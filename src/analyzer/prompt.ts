import { loadEvaluationCriteria, generateScoreDescription } from '../utils/config.js';
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
