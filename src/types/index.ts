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
  model: z.string(), // 'claude-sonnet-4-5', 'gemini-1.5-pro-latest', etc.
  tokenUsage: TokenUsageSchema.optional(),
  estimatedCost: z.number().optional(), // USD
});

export type Analysis = z.infer<typeof AnalysisSchema>;

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
