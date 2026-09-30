import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { z } from 'zod';
import { getAnthropicApiKey, getOptionalEnv } from '../utils/env.js';
import { buildAnalysisPrompt } from './prompt.js';
import type { Analysis, ChangelogEntry } from '../types/index.js';
import { toISOString } from '../utils/date.js';

// 分析に使うモデル（環境変数 ANALYSIS_MODEL で上書き可能）
export const DEFAULT_MODEL = 'claude-opus-5-5';

// 料金 (USD per million tokens)
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
    .describe('対応期限や変更の適用日（YYYY-MM-DD）。記事に日付がなければ null'),
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
    const prompt = await buildAnalysisPrompt(entry);

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
      messages: [{ role: 'user', content: prompt }],
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
    const inputTokens = message.usage.input_tokens;
    const outputTokens = message.usage.output_tokens;
    const pricing = PRICING[model];
    const estimatedCost = pricing
      ? (inputTokens / 1_000_000) * pricing.input + (outputTokens / 1_000_000) * pricing.output
      : undefined;

    return {
      titleJa: parsed.titleJa,
      summarizedJa: parsed.summarizedJa,
      audienceJa: parsed.audienceJa,
      actionJa: parsed.actionJa,
      deadline: parsed.deadline,
      scores,
      totalScore,
      analyzedAt: toISOString(new Date()),
      model,
      tokenUsage: { input: inputTokens, output: outputTokens },
      estimatedCost,
    };
  }
}
