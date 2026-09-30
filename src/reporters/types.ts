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
 * スコア付きエントリー（AIの分析結果）
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
    model: string;
    audienceJa?: string; // 対象者
    actionJa?: string | null; // 必要な対応
    deadline?: string | null; // 対応期限（YYYY-MM-DD）
  };
}

/**
 * 立場ごとの「今すぐ対応」「確認推奨」の記事
 */
export interface PerspectiveActionItems {
  key: string; // config/profiles.json の立場のキー
  label: string;
  now: ScoredEntry[];
  check: ScoredEntry[];
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
  actionItems: PerspectiveActionItems[];
}

/**
 * レポート生成オプション
 */
export interface ReportGeneratorOptions {
  weekNumber?: string; // 指定がない場合は前週
  outputDir?: string; // デフォルト: data/reports
}
