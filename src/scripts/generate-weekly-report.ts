import * as fs from 'fs';
import * as path from 'path';
import { loadDataStore } from '../utils/file.js';
import { getWeekNumber } from '../utils/date.js';
import { getPreviousWeek, getWeekRange, parseWeekNumber } from '../utils/week.js';
import { generateMarkdownReport } from '../reporters/markdown-reporter.js';
import { generateMarpSlides } from '../reporters/marp-reporter.js';
import {
  WeeklyReport,
  WeeklyReportMeta,
  WeeklyReportStats,
  GroupedEntries,
  ScoredEntry,
  ReportGeneratorOptions,
} from '../reporters/types.js';
import { ChangelogEntry } from '../types/index.js';
import { getPrimaryAnalysis } from '../utils/analysis.js';

const DEFAULT_OUTPUT_DIR = path.join(process.cwd(), 'data', 'reports');

/**
 * 週次レポート生成のメイン関数
 */
export async function generateWeeklyReport(options: ReportGeneratorOptions = {}): Promise<void> {
  const {
    weekNumber = getPreviousWeek(), // デフォルトは前週
    outputDir = DEFAULT_OUTPUT_DIR,
  } = options;

  console.log(`📊 週次レポート生成開始: ${weekNumber}`);

  // データ読み込み
  const data = await loadDataStore();
  console.log(`✓ データ読み込み完了: ${data.entries.length}件のエントリー`);

  // 週次レポート構築
  const report = buildWeeklyReport(data.entries, weekNumber);

  console.log(`✓ レポート構築完了:`);
  console.log(`  - 超重要更新: ${report.stats.highPriorityCount}件`);
  console.log(`  - 重要更新: ${report.stats.mediumPriorityCount}件`);
  console.log(`  - 通常更新: ${report.stats.lowPriorityCount}件`);
  console.log(`  - 合計: ${report.stats.totalEntries}件`);

  // Markdown生成
  const markdown = generateMarkdownReport(report);

  // Marpスライド生成
  const slides = generateMarpSlides(report);

  // 出力ディレクトリ作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✓ 出力ディレクトリ作成: ${outputDir}`);
  }

  // Markdownレポート保存
  const reportPath = path.join(outputDir, `${weekNumber}.md`);
  fs.writeFileSync(reportPath, markdown, 'utf-8');
  console.log(`✓ Markdownレポート保存: ${reportPath}`);

  // Marpスライド保存
  const slidesPath = path.join(outputDir, `${weekNumber}-slides.md`);
  fs.writeFileSync(slidesPath, slides, 'utf-8');
  console.log(`✓ Marpスライド保存: ${slidesPath}`);

  console.log(`🎉 週次レポート生成完了！`);
}

/**
 * 週次レポートを構築
 */
function buildWeeklyReport(entries: ChangelogEntry[], weekNumber: string): WeeklyReport {
  // メタ情報生成
  const meta = buildReportMeta(weekNumber);

  // 指定週のエントリーを抽出
  const weekEntries = filterEntriesByWeek(entries, weekNumber);

  // 分析結果を持つエントリーのみスコア化
  const scoredEntries = scoreEntries(weekEntries);

  // 優先度別にグループ化
  const groupedEntries = groupEntriesByPriority(scoredEntries);

  // 統計情報生成
  const stats = buildReportStats(scoredEntries, weekEntries);

  return {
    meta,
    stats,
    entries: groupedEntries,
  };
}

/**
 * メタ情報生成
 */
function buildReportMeta(weekNumber: string): WeeklyReportMeta {
  const { year, week } = parseWeekNumber(weekNumber);
  const { startDate, endDate } = getWeekRange(weekNumber);

  return {
    weekNumber,
    year,
    weekNum: week,
    startDate,
    endDate,
    generatedAt: new Date().toISOString(),
  };
}

/**
 * 指定週のエントリーをフィルタリング
 */
function filterEntriesByWeek(entries: ChangelogEntry[], weekNumber: string): ChangelogEntry[] {
  return entries.filter(entry => {
    if (!entry.collectedAt) return false;
    const entryWeek = getWeekNumber(new Date(entry.collectedAt));
    return entryWeek === weekNumber;
  });
}

/**
 * エントリーをスコア付き形式に変換（分析結果があるエントリーのみ）
 */
function scoreEntries(entries: ChangelogEntry[]): ScoredEntry[] {
  return entries.flatMap((entry) => {
    const analysis = getPrimaryAnalysis(entry);
    if (!analysis) return [];
    return [
      {
        entry,
        score: analysis.totalScore,
        analysis: {
          titleJa: analysis.titleJa,
          summarizedJa: analysis.summarizedJa,
          scores: analysis.scores,
          analyzedAt: analysis.analyzedAt,
          model: analysis.model,
        },
      },
    ];
  });
}

/**
 * エントリーを優先度別にグループ化
 */
function groupEntriesByPriority(scoredEntries: ScoredEntry[]): GroupedEntries {
  // スコア順にソート（降順）
  const sorted = [...scoredEntries].sort((a, b) => b.score - a.score);

  return {
    high: sorted.filter(e => e.score >= 12),
    medium: sorted.filter(e => e.score >= 8 && e.score < 12),
    low: sorted.filter(e => e.score < 8),
  };
}

/**
 * 統計情報を構築
 */
function buildReportStats(
  scoredEntries: ScoredEntry[],
  allWeekEntries: ChangelogEntry[]
): WeeklyReportStats {
  // 優先度別カウント
  const highPriorityCount = scoredEntries.filter(e => e.score >= 12).length;
  const mediumPriorityCount = scoredEntries.filter(e => e.score >= 8 && e.score < 12).length;
  const lowPriorityCount = scoredEntries.filter(e => e.score < 8).length;

  // ソース別カウント
  const bySource = {
    'shopify-changelog': allWeekEntries.filter(e => e.source === 'shopify-changelog').length,
    'developer-changelog': allWeekEntries.filter(e => e.source === 'developer-changelog').length,
  };

  // カテゴリー集計
  const categoryCount: Record<string, number> = {};
  allWeekEntries.forEach(entry => {
    entry.category.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  });

  // Top 3カテゴリーを抽出
  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([category, count]) => ({ category, count }));

  return {
    totalEntries: allWeekEntries.length,
    highPriorityCount,
    mediumPriorityCount,
    lowPriorityCount,
    bySource,
    topCategories,
  };
}

/**
 * CLIから直接実行された場合
 */
const args = process.argv.slice(2);
const weekNumber = args[0]; // オプション: 週番号を指定（例: 2025-W47）

generateWeeklyReport({ weekNumber })
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ レポート生成エラー:', error);
    process.exit(1);
  });
