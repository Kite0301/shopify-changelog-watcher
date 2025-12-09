import Anthropic from '@anthropic-ai/sdk';
import { getAnthropicApiKey } from '../utils/env.js';
import { buildAnalysisPrompt } from './prompt.js';
import type { ChangelogEntry } from '../types/index.js';
import type { Analyzer, AnalysisResult } from './interface.js';
import { toISOString } from '../utils/date.js';

// Claude Sonnet 4.5 の料金 (per million tokens)
const PRICING = {
  INPUT_PER_MILLION: 3.0,
  OUTPUT_PER_MILLION: 15.0,
};

export class ClaudeAnalyzer implements Analyzer {
  private client: Anthropic;
  private model: string;

  constructor(modelName: string = 'claude-sonnet-4-5') {
    this.client = new Anthropic({
      apiKey: getAnthropicApiKey(),
    });
    this.model = modelName;
  }

  getModelName(): string {
    return this.model;
  }

  /**
   * Claude APIを使ってエントリーを分析
   */
  async analyzeEntry(entry: ChangelogEntry): Promise<AnalysisResult> {
    const prompt = await buildAnalysisPrompt(entry);

    const message = await this.client.messages.create({
      model: this.model,
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // レスポンスからテキストを抽出
    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // JSONブロックを削除してパース
    let jsonText = responseText.trim();
    // ```json ... ``` の形式の場合は中身を抽出
    const jsonMatch = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1];
    }

    // JSONをパース
    const parsed = JSON.parse(jsonText);

    // スコアの合計を計算
    const totalScore =
      parsed.scores.merchantImpact +
      parsed.scores.partnerImpact +
      parsed.scores.japanRelevance +
      parsed.scores.technicalImportance;

    // トークン使用量と料金を計算
    const inputTokens = message.usage.input_tokens;
    const outputTokens = message.usage.output_tokens;
    const inputCost = (inputTokens / 1_000_000) * PRICING.INPUT_PER_MILLION;
    const outputCost = (outputTokens / 1_000_000) * PRICING.OUTPUT_PER_MILLION;
    const estimatedCost = inputCost + outputCost;

    return {
      titleJa: parsed.titleJa,
      summarizedJa: parsed.summarizedJa,
      scores: {
        merchantImpact: parsed.scores.merchantImpact,
        partnerImpact: parsed.scores.partnerImpact,
        japanRelevance: parsed.scores.japanRelevance,
        technicalImportance: parsed.scores.technicalImportance,
      },
      totalScore,
      analyzedAt: toISOString(new Date()),
      model: this.model,
      tokenUsage: {
        input: inputTokens,
        output: outputTokens,
      },
      estimatedCost,
    };
  }
}
