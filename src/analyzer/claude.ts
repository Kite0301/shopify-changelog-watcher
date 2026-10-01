import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { z } from 'zod';
import { getAnthropicApiKey, getOptionalEnv } from '../utils/env.js';
import { buildEntryMessage, buildSystemPrompt } from './prompt.js';
import { isDateMentioned } from '../utils/deadline.js';
import type { Analysis, ChangelogEntry } from '../types/index.js';
import { toISOString } from '../utils/date.js';

// 分析に使うモデル（環境変数 ANALYSIS_MODEL で上書き可能）
export const DEFAULT_MODEL = 'claude-opus-5-5';

// 料金 (USD per million tokens)
// キャッシュ書き込みは入力の1.25倍、読み込みは0.1倍
const CACHE_WRITE_MULTIPLIER = 1.25;
const CACHE_READ_MULTIPLIER = 0.1;

const PRICING: Record<string, { input: number; output: number }> = {
  'claude-opus-5-5': { input: 4.0, output: 20.0 },
  'claude-sonnet-5-5': { input: 2.0, output: 10.0 },
  'claude-haiku-4-5': { input: 1.0, output: 5.0 },
};

const score = z.number().int().min(1).max(5);

const AnalysisResponseSchema = z.object({
  titleJa: z.string().describe('日本語タイトル'),
  summarizedJa: z.string().describe('日本語要約（2-3文）'),
  audienceJa: z
    .string()
    .describe('対象者（例: 全マーチャント、Plus のマーチャント、Admin API を使うアプリ開発者）'),
  actionJa: z.string().nullable().describe('対象者が行う必要のある対応。不要なら null'),
  deadline: z
    .string()
    .nullable()
    .describe(
      '記事本文に明記された対応期限や適用日（YYYY-MM-DD）。APIバージョン名から推測しない。なければ null'
    ),
  scores: z.object({
    merchantImpact: score,
    partnerImpact: score,
    japanRelevance: score,
    technicalImportance: score,
  }),
});

export class ClaudeAnalyzer {
  private client: Anthropic;
  readonly model: string;

  constructor(model: string = getOptionalEnv('ANALYSIS_MODEL', DEFAULT_MODEL)) {
    this.client = new Anthropic({ apiKey: getAnthropicApiKey() });
    this.model = model;
  }

  /**
   * Claude APIを使ってエントリーを分析
   */
  async analyzeEntry(entry: ChangelogEntry): Promise<Analysis> {
    const systemPrompt = await buildSystemPrompt();

    const message = await this.client.beta.messages.parse({
      model: this.model,
      max_tokens: 16000,
      // 安全フィルタで拒否された場合は推奨モデルでサーバー側が再実行する
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: {
        effort: 'low',
        format: betaZodOutputFormat(AnalysisResponseSchema),
      },
      // 共通の指示はキャッシュし、同じ実行内で続けて分析するときの入力コストを下げる
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: buildEntryMessage(entry) }],
    });

    if (message.stop_reason === 'refusal') {
      throw new Error(`Refused: ${message.stop_details?.category ?? 'unknown'}`);
    }
    const parsed = message.parsed_output;
    if (!parsed) {
      throw new Error(`No parsed output (stop_reason: ${message.stop_reason})`);
    }

    const { scores } = parsed;
    const totalScore =
      scores.merchantImpact +
      scores.partnerImpact +
      scores.japanRelevance +
      scores.technicalImportance;

    // フォールバックが走った場合は実際に応答したモデルで記録する
    const model = message.model;
    const usage = message.usage;
    const cacheWrite = usage.cache_creation_input_tokens ?? 0;
    const cacheRead = usage.cache_read_input_tokens ?? 0;
    const inputTokens = usage.input_tokens + cacheWrite + cacheRead;
    const outputTokens = usage.output_tokens;
    const pricing = PRICING[model];
    const estimatedCost = pricing
      ? ((usage.input_tokens +
          cacheWrite * CACHE_WRITE_MULTIPLIER +
          cacheRead * CACHE_READ_MULTIPLIER) /
          1_000_000) *
          pricing.input +
        (outputTokens / 1_000_000) * pricing.output
      : undefined;

    // 期限は本文に明記されている日付だけを採用する
    const deadline =
      parsed.deadline && isDateMentioned(entry.description, parsed.deadline)
        ? parsed.deadline
        : null;

    return {
      titleJa: parsed.titleJa,
      summarizedJa: parsed.summarizedJa,
      audienceJa: parsed.audienceJa,
      actionJa: parsed.actionJa,
      deadline,
      scores,
      totalScore,
      analyzedAt: toISOString(new Date()),
      model,
      tokenUsage: { input: inputTokens, output: outputTokens },
      estimatedCost,
    };
  }
}
