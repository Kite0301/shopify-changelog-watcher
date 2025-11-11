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

// Analysis Schema
export const AnalysisSchema = z.object({
  summarizedJa: z.string(),
  scores: AnalysisScoresSchema,
  totalScore: z.number(),
  analyzedAt: z.string(),
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
  analysis: AnalysisSchema.optional(),
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
