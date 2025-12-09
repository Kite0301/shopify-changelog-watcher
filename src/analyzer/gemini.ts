import { GoogleGenAI } from '@google/genai';
import { getGeminiApiKey } from '../utils/env.js';
import { buildAnalysisPrompt } from './prompt.js';
import type { ChangelogEntry } from '../types/index.js';
import type { Analyzer, AnalysisResult } from './interface.js';
import { toISOString } from '../utils/date.js';

// Gemini 2.5 Flash の料金 (per million tokens)
// https://ai.google.dev/gemini-api/docs/pricing
// Gemini 2.5 Flash stable: 10 RPM, 250K TPM, 250 RPD (無料枠)
const PRICING = {
  INPUT_PER_MILLION: 0.0, // 無料枠内なら $0
  OUTPUT_PER_MILLION: 0.0, // 無料枠内なら $0
};

export class GeminiAnalyzer implements Analyzer {
  private client: GoogleGenAI;
  private model: string;

  constructor(modelName: string = 'gemini-2.5-flash') {
    this.client = new GoogleGenAI({
      apiKey: getGeminiApiKey(),
    });
    this.model = modelName;
  }

  getModelName(): string {
    return this.model;
  }

  /**
   * Gemini APIを使ってエントリーを分析
   */
  async analyzeEntry(entry: ChangelogEntry): Promise<AnalysisResult> {
    const prompt = await buildAnalysisPrompt(entry);

    const response = await this.client.models.generateContent({
      model: this.model,
      contents: prompt,
      config: {
        temperature: 0.2,
        maxOutputTokens: 4096, // 十分な余裕を持たせる
        responseMimeType: 'application/json',
      },
    });

    // candidatesからテキストを抽出
    if (!response.candidates || response.candidates.length === 0) {
      throw new Error('Gemini API returned no candidates');
    }

    const candidate = response.candidates[0];

    // finishReasonをチェック
    if (candidate.finishReason === 'MAX_TOKENS') {
      console.warn('Warning: Response was truncated due to MAX_TOKENS');
      console.warn('Usage metadata:', response.usageMetadata);
    }

    if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
      console.error('Full response:', JSON.stringify(response, null, 2));
      throw new Error('Gemini API returned no content parts');
    }

    const responseText = candidate.content.parts.map((part: any) => part.text).join('');

    if (!responseText || responseText.trim() === '') {
      console.error('Full response object:', JSON.stringify(response, null, 2));
      throw new Error('Gemini API returned empty text');
    }

    // JSONをパース
    let jsonText = responseText.trim();

    // 念のため```json ... ```の形式もサポート
    const jsonMatch = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1].trim();
    }

    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (error) {
      console.error('Failed to parse Gemini response:', jsonText);
      throw new Error(
        `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`
      );
    }

    // スコアの合計を計算
    const totalScore =
      parsed.scores.merchantImpact +
      parsed.scores.partnerImpact +
      parsed.scores.japanRelevance +
      parsed.scores.technicalImportance;

    // トークン使用量と料金を計算
    const inputTokens = response.usageMetadata?.promptTokenCount || 0;
    const outputTokens = response.usageMetadata?.candidatesTokenCount || 0;
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
