import { ChangelogEntry } from '../types/index.js';

/**
 * 週次レポートのメタデータ
 */
export interface WeeklyReportMeta {
  weekNumber: string; // ISO 8601 週番号（例: "2025-W47"）
  year: number;
  weekNum: number;
  startDate: string; // YYYY-MM-DD形式
  endDate: string; // YYYY-MM-DD形式
  generatedAt: string; // ISO 8601形式
}

/**
 * 週次レポートの統計情報
 */
export interface WeeklyReportStats {
  totalEntries: number;
  highPriorityCount: number; // スコア12以上
  mediumPriorityCount: number; // スコア8-11
  lowPriorityCount: number; // スコア8未満
  bySource: {
    'shopify-changelog': number;
    'developer-changelog': number;
  };
  topCategories: Array<{ category: string; count: number }>;
}

/**
 * スコア付きエントリー（Claude Sonnet 4.5の分析結果）
 */
export interface ScoredEntry {
  entry: ChangelogEntry;
  score: number;
  analysis: {
    titleJa?: string; // 日本語タイトル
    summarizedJa: string;
    scores: {
      merchantImpact: number;
      partnerImpact: number;
      japanRelevance: number;
      technicalImportance: number;
    };
    analyzedAt: string;
  };
}

/**
 * 優先度別にグループ化されたエントリー
 */
export interface GroupedEntries {
  high: ScoredEntry[]; // スコア12以上
  medium: ScoredEntry[]; // スコア8-11
  low: ScoredEntry[]; // スコア8未満
}

/**
 * 週次レポートの完全なデータ構造
 */
export interface WeeklyReport {
  meta: WeeklyReportMeta;
  stats: WeeklyReportStats;
  entries: GroupedEntries;
}

/**
 * レポート生成オプション
 */
export interface ReportGeneratorOptions {
  weekNumber?: string; // 指定がない場合は前週
  outputDir?: string; // デフォルト: data/reports
}
