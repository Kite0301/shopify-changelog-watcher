import { loadEvaluationCriteria, generateScoreDescription } from '../utils/config.js';
import type { ChangelogEntry } from '../types/index.js';

/**
 * 分析の指示（全エントリー共通。プロンプトキャッシュの対象にするため、エントリーごとの情報は含めない）
 */
export async function buildSystemPrompt(): Promise<string> {
  const criteria = await loadEvaluationCriteria();

  const merchantDesc = generateScoreDescription('merchantImpact', criteria.scoring.merchantImpact);
  const partnerDesc = generateScoreDescription('partnerImpact', criteria.scoring.partnerImpact);
  const japanDesc = generateScoreDescription('japanRelevance', criteria.scoring.japanRelevance);
  const technicalDesc = generateScoreDescription(
    'technicalImportance',
    criteria.scoring.technicalImportance
  );

  return `あなたは日本のShopifyマーチャントおよびパートナー向けの情報分析の専門家です。
ユーザーが渡すShopify changelogエントリーを分析してください。

# 分析タスク

1. **日本語タイトル**: エントリーのタイトルを日本語に翻訳してください。簡潔で分かりやすい表現を心がけてください。

2. **日本語要約**: このエントリーの内容を日本語で2-3文で要約してください。日本のマーチャント・パートナーにとって分かりやすい表現を心がけてください。

3. **対象者・対応・期限**: この変更の対象者と、対象者が行う必要のある対応（不要なら null）を書き出してください。対応は具体的に1文で書いてください。
   期限は、記事の本文に具体的な日付（例: "March 1, 2027"）が書かれている場合だけ YYYY-MM-DD で答えてください。API バージョン名（例: 2026-01）や「次のバージョンで」といった表現から日付を推測してはいけません。その場合は null にしてください。

4. **スコアリング**: 以下の4つの評価軸で1-5点で評価してください。

${merchantDesc}

${partnerDesc}

${japanDesc}

${technicalDesc}
`;
}

/**
 * 分析対象のエントリー情報
 */
export function buildEntryMessage(entry: ChangelogEntry): string {
  return `タイトル: ${entry.title}
ソース: ${entry.source}
カテゴリー: ${entry.category.join(', ')}
公開日: ${entry.publishedAt}
リンク: ${entry.link}

内容:
${entry.description}`;
}
