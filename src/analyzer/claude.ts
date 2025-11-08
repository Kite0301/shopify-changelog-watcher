import Anthropic from '@anthropic-ai/sdk';
import { getAnthropicApiKey } from '../utils/env.js';
import { loadEvaluationCriteria, generateScoreDescription } from '../utils/config.js';
import type { ChangelogEntry, Analysis, AnalysisScores } from '../types/index.js';
import { toISOString } from '../utils/date.js';

const client = new Anthropic({
  apiKey: getAnthropicApiKey(),
});

// Claude Sonnet 4.5 の料金 (per million tokens)
const PRICING = {
  INPUT_PER_MILLION: 3.0,
  OUTPUT_PER_MILLION: 15.0,
};

export interface AnalysisResult {
  analysis: Analysis;
  usage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    estimatedCost: number;
  };
}

/**
 * プロンプトを生成
 */
async function buildAnalysisPrompt(entry: ChangelogEntry): Promise<string> {
  const criteria = await loadEvaluationCriteria();

  const merchantDesc = generateScoreDescription('merchantImpact', criteria.scoring.merchantImpact);
  const partnerDesc = generateScoreDescription('partnerImpact', criteria.scoring.partnerImpact);
  const japanDesc = generateScoreDescription('japanRelevance', criteria.scoring.japanRelevance);
  const technicalDesc = generateScoreDescription(
    'technicalImportance',
    criteria.scoring.technicalImportance
  );

  return `あなたは日本のShopifyマーチャントおよびパートナー向けの情報分析の専門家です。
以下のShopify changelogエントリーを分析し、JSON形式で回答してください。

# エントリー情報

タイトル: ${entry.title}
ソース: ${entry.source}
カテゴリー: ${entry.category.join(', ')}
公開日: ${entry.publishedAt}
リンク: ${entry.link}

内容:
${entry.description}

# 分析タスク

1. **日本語要約**: このエントリーの内容を日本語で2-3文で要約してください。日本のマーチャント・パートナーにとって分かりやすい表現を心がけてください。

2. **スコアリング**: 以下の4つの評価軸で1-5点で評価してください。

${merchantDesc}

${partnerDesc}

${japanDesc}

${technicalDesc}

# 出力形式

必ず以下のJSON形式で回答してください。JSONのみを出力し、他のテキストは含めないでください。

{
  "summarizedJa": "日本語での要約文",
  "scores": {
    "merchantImpact": 1-5の数値,
    "partnerImpact": 1-5の数値,
    "japanRelevance": 1-5の数値,
    "technicalImportance": 1-5の数値
  }
}`;
}

/**
 * Claude APIを使ってエントリーを分析（トークン使用量と料金を含む）
 */
export async function analyzeEntry(entry: ChangelogEntry): Promise<AnalysisResult> {
  const prompt = await buildAnalysisPrompt(entry);

  const message = await client.messages.create({
    model: 'claude-sonnet-4-5',
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
  const totalTokens = inputTokens + outputTokens;
  const inputCost = (inputTokens / 1_000_000) * PRICING.INPUT_PER_MILLION;
  const outputCost = (outputTokens / 1_000_000) * PRICING.OUTPUT_PER_MILLION;
  const estimatedCost = inputCost + outputCost;

  return {
    analysis: {
      summarizedJa: parsed.summarizedJa,
      scores: parsed.scores as AnalysisScores,
      totalScore,
      analyzedAt: toISOString(new Date()),
    },
    usage: {
      inputTokens,
      outputTokens,
      totalTokens,
      estimatedCost,
    },
  };
}
