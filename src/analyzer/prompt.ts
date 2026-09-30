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
以下のShopify changelogエントリーを分析してください。

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

3. **対象者・対応・期限**: この変更の対象者、対象者が行う必要のある対応（不要なら null）、対応期限や適用日（記事に書かれている場合のみ、YYYY-MM-DD）を書き出してください。対応は具体的に1文で書いてください。

4. **スコアリング**: 以下の4つの評価軸で1-5点で評価してください。

${merchantDesc}

${partnerDesc}

${japanDesc}

${technicalDesc}
`;
}
