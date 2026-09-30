import { z } from 'zod';

// RSS Entry Schema
export const RSSEntrySchema = z.object({
  title: z.string(),
  link: z.string().url(),
  pubDate: z.string(),
  content: z.string(),
  categories: z.array(z.string()).optional(),
  contentSnippet: z.string().optional(),
});

export type RSSEntry = z.infer<typeof RSSEntrySchema>;

// Analysis Scores Schema
export const AnalysisScoresSchema = z.object({
  merchantImpact: z.number().min(1).max(5),
  partnerImpact: z.number().min(1).max(5),
  japanRelevance: z.number().min(1).max(5),
  technicalImportance: z.number().min(1).max(5),
});

export type AnalysisScores = z.infer<typeof AnalysisScoresSchema>;

// Token Usage Schema
export const TokenUsageSchema = z.object({
  input: z.number(),
  output: z.number(),
});

export type TokenUsage = z.infer<typeof TokenUsageSchema>;

// Analysis Schema
export const AnalysisSchema = z.object({
  titleJa: z.string().optional(), // 日本語タイトル
  summarizedJa: z.string(),
  scores: AnalysisScoresSchema,
  totalScore: z.number(),
  analyzedAt: z.string(),
  model: z.string(), // 'claude-opus-5-5' など
  tokenUsage: TokenUsageSchema.optional(),
  estimatedCost: z.number().optional(), // USD
});

export type Analysis = z.infer<typeof AnalysisSchema>;

// Jev（System One モデル）の判定結果（評価中のため本番のスコアには使わない）
const ScoredDecisionSchema = z.object({
  score: z.number(), // 期待スコア（1-5、小数あり）
  confidence: z.number(),
});

export const JevDecisionSchema = z.object({
  model: z.string(), // 実際に応答したモデルのバージョン
  scores: z.object({
    merchantImpact: ScoredDecisionSchema,
    partnerImpact: ScoredDecisionSchema,
    japanRelevance: ScoredDecisionSchema,
    technicalImportance: ScoredDecisionSchema,
  }),
  totalScore: z.number(),
  actionRequired: z.number(), // 対応が必要な確率（0-1）
  breakingChange: z.number(), // 破壊的変更・廃止である確率（0-1）
  appliesInJapan: z.number().optional(), // 日本のストアに適用される確率（0-1）
  // 立場ごとの関係度（config/profiles.json）。overall は立場全体、areas は領域ごとの確率
  relevance: z
    .record(z.string(), z.object({ overall: z.number(), areas: z.record(z.string(), z.number()) }))
    .optional(),
  profilesVersion: z.number().optional(),
  decidedAt: z.string(),
  tokenUsage: TokenUsageSchema,
});

export type JevDecision = z.infer<typeof JevDecisionSchema>;

// Changelog Entry Schema
export const ChangelogEntrySchema = z.object({
  id: z.string(),
  source: z.enum(['shopify-changelog', 'developer-changelog']),
  title: z.string(),
  link: z.string().url(),
  publishedAt: z.string(),
  collectedAt: z.string().optional(), // 収集日時（新規追加時に設定）
  category: z.array(z.string()),
  description: z.string(),
  analyses: z.record(z.string(), AnalysisSchema).optional(), // モデル名をキーとした分析結果の辞書
  jev: JevDecisionSchema.optional(),
  officialActionRequired: z.boolean().optional(), // Shopify公式の「Action required」ラベル（開発者向けのみ）
});

export type ChangelogEntry = z.infer<typeof ChangelogEntrySchema>;

// Data Store Schema
export const DataStoreSchema = z.object({
  lastUpdated: z.string().nullable(),
  entries: z.array(ChangelogEntrySchema),
});

export type DataStore = z.infer<typeof DataStoreSchema>;

// RSS Source Configuration
export interface RSSSource {
  name: 'shopify-changelog' | 'developer-changelog';
  url: string;
  displayName: string;
}

export const RSS_SOURCES: RSSSource[] = [
  {
    name: 'shopify-changelog',
    url: 'https://changelog.shopify.com/feed.xml',
    displayName: 'Shopify Changelog',
  },
  {
    name: 'developer-changelog',
    url: 'https://shopify.dev/changelog/feed.xml',
    displayName: 'Developer Changelog',
  },
];
