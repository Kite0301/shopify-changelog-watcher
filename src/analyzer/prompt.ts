import { loadEvaluationCriteria, generateScoreDescription } from '../utils/config.js';
import { z } from 'zod';
import type { ChangelogEntry } from '../types/index.js';

/**
 * 共通の分析プロンプトを生成
 */
export async function buildAnalysisPrompt(entry: ChangelogEntry): Promise<string> {
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

1. **日本語タイトル**: エントリーのタイトルを日本語に翻訳してください。簡潔で分かりやすい表現を心がけてください。

2. **日本語要約**: このエントリーの内容を日本語で2-3文で要約してください。日本のマーチャント・パートナーにとって分かりやすい表現を心がけてください。

3. **スコアリング**: 以下の4つの評価軸で1-5点で評価してください。

${merchantDesc}

${partnerDesc}

${japanDesc}

${technicalDesc}

# 出力形式

必ず以下のJSON形式で回答してください。JSONのみを出力し、他のテキストは含めないでください。

{
  "titleJa": "日本語でのタイトル",
  "summarizedJa": "日本語での要約文",
  "scores": {
    "merchantImpact": 1-5の数値,
    "partnerImpact": 1-5の数値,
    "japanRelevance": 1-5の数値,
    "technicalImportance": 1-5の数値
  }
}`;
}

const AnalysisResponseSchema = z.object({
  titleJa: z.string().optional(),
  summarizedJa: z.string(),
  scores: z.object({
    merchantImpact: z.number().int().min(1).max(5),
    partnerImpact: z.number().int().min(1).max(5),
    japanRelevance: z.number().int().min(1).max(5),
    technicalImportance: z.number().int().min(1).max(5),
  }),
});

export type AnalysisResponse = z.infer<typeof AnalysisResponseSchema>;

/**
 * モデルの応答テキストをパースし、出力形式どおりか検証する
 */
export function parseAnalysisResponse(responseText: string): AnalysisResponse {
  let jsonText = responseText.trim();
  // ```json ... ``` の形式の場合は中身を抽出
  const jsonMatch = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
  if (jsonMatch) {
    jsonText = jsonMatch[1].trim();
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch (error) {
    throw new Error(
      `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}\n${jsonText}`
    );
  }
  return AnalysisResponseSchema.parse(parsed);
}
