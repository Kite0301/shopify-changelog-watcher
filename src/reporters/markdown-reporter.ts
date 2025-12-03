import { WeeklyReport, ScoredEntry } from './types.js';
import { formatDate } from '../utils/date.js';
import { formatWeekNumber, formatWeekRange } from '../utils/week.js';

/**
 * 週次レポートをMarkdown形式で生成
 */
export function generateMarkdownReport(report: WeeklyReport): string {
  const sections: string[] = [];

  // ヘッダー
  sections.push(generateHeader(report));

  // サマリー
  sections.push(generateSummary(report));

  // 超重要更新（スコア12以上）
  if (report.entries.high.length > 0) {
    sections.push(generateHighPrioritySection(report.entries.high));
  }

  // 重要更新（スコア8-11）
  if (report.entries.medium.length > 0) {
    sections.push(generateMediumPrioritySection(report.entries.medium));
  }

  // その他の更新（スコア8未満）
  if (report.entries.low.length > 0) {
    sections.push(generateLowPrioritySection(report.entries.low));
  }

  // 週次トレンド
  sections.push(generateTrendsSection(report));

  // フッター
  sections.push(generateFooter());

  return sections.join('\n\n');
}

/**
 * ヘッダーセクション生成
 */
function generateHeader(report: WeeklyReport): string {
  const { meta, stats } = report;
  const weekTitle = formatWeekNumber(meta.weekNumber);
  const weekRange = formatWeekRange(meta.weekNumber);

  return `# Shopify更新レポート ${weekTitle}（${weekRange}）

> 対象期間: ${meta.startDate}（月）〜 ${meta.endDate}（日）
> レポート生成日時: ${new Date(meta.generatedAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
> 総更新数: ${stats.totalEntries}件（うち重要: ${stats.highPriorityCount + stats.mediumPriorityCount}件）`;
}

/**
 * サマリーセクション生成
 */
function generateSummary(report: WeeklyReport): string {
  const { stats } = report;

  return `## 📊 サマリー

- **超重要更新（スコア12点以上）**: ${stats.highPriorityCount}件
- **重要更新（スコア8-11点）**: ${stats.mediumPriorityCount}件
- **通常更新（スコア8点未満）**: ${stats.lowPriorityCount}件
- **情報源別**: Shopify Changelog ${stats.bySource['shopify-changelog']}件、Developer Changelog ${stats.bySource['developer-changelog']}件`;
}

/**
 * 超重要更新セクション生成
 */
function generateHighPrioritySection(entries: ScoredEntry[]): string {
  const items = entries.map((item, index) => generateDetailedEntry(item, index + 1));

  return `## 🔥 超重要更新（スコア12点以上）

${items.join('\n\n---\n\n')}`;
}

/**
 * 重要更新セクション生成
 */
function generateMediumPrioritySection(entries: ScoredEntry[]): string {
  const items = entries.map((item, index) => generateDetailedEntry(item, index + 1));

  return `## ⚠️ 重要更新（スコア8-11点）

${items.join('\n\n---\n\n')}`;
}

/**
 * その他の更新セクション生成
 */
function generateLowPrioritySection(entries: ScoredEntry[]): string {
  const items = entries.map(item =>
    `- [${item.entry.title}](${item.entry.link}) - スコア: ${item.score}点`
  );

  return `## 📌 その他の更新（スコア8点未満）

${items.join('\n')}`;
}

/**
 * 詳細エントリー生成（超重要・重要向け）
 */
function generateDetailedEntry(item: ScoredEntry, index: number): string {
  const { entry, score, analysis } = item;
  const categories = entry.category.join(', ');
  const publishedDate = formatDate(new Date(entry.publishedAt));
  const collectedDate = entry.collectedAt ? formatDate(new Date(entry.collectedAt)) : 'N/A';

  // ソース名を日本語化
  const sourceName = entry.source === 'shopify-changelog'
    ? 'Shopify Changelog'
    : 'Developer Changelog';

  return `### ${index}. [${entry.title}](${entry.link}) - スコア: ${score}点

**公開日**: ${publishedDate}
**収集日**: ${collectedDate}
**カテゴリ**: ${categories || 'なし'}
**情報源**: ${sourceName}

#### AI分析サマリー（Claude Sonnet 4.5）

${analysis.summarizedJa}

#### 詳細スコア

- マーチャント影響度: ${analysis.scores.merchantImpact}/5
- パートナー/開発者影響度: ${analysis.scores.partnerImpact}/5
- 日本市場関連性: ${analysis.scores.japanRelevance}/5
- 技術的重要度: ${analysis.scores.technicalImportance}/5`;
}

/**
 * 週次トレンドセクション生成
 */
function generateTrendsSection(report: WeeklyReport): string {
  const { stats, entries } = report;

  // カテゴリーTop3
  const topCategoriesText = stats.topCategories.length > 0
    ? stats.topCategories.map(c => `${c.category}（${c.count}件）`).join('、')
    : 'なし';

  // 日本市場関連性の高い更新を抽出（japanRelevance >= 4）
  const allEntries = [...entries.high, ...entries.medium, ...entries.low];
  const japanRelevantCount = allEntries.filter(
    item => item.analysis.scores.japanRelevance >= 4
  ).length;

  // 破壊的変更を抽出（technicalImportance >= 4）
  const breakingChangesCount = allEntries.filter(
    item => item.analysis.scores.technicalImportance >= 4
  ).length;

  return `## 📈 週次トレンド

- 最も多いカテゴリー: ${topCategoriesText}
- 日本市場関連性の高い更新: ${japanRelevantCount}件
- 技術的に重要な変更: ${breakingChangesCount}件`;
}

/**
 * フッターセクション生成
 */
function generateFooter(): string {
  return `---

*このレポートは自動生成されています。詳細は [Shopify Changelog Watcher](https://kite0301.github.io/shopify-changelog-watcher/) でご確認ください。*`;
}
