import Parser from 'rss-parser';
import { RSS_SOURCES, type RSSSource, type ChangelogEntry } from '../types/index.js';
import { generateEntryId } from '../utils/file.js';
import { parseRFC822Date, toISOString } from '../utils/date.js';

const parser = new Parser();

/**
 * 単一のRSSフィードから記事を取得
 */
async function fetchFromSource(source: RSSSource): Promise<ChangelogEntry[]> {
  console.log(`Fetching RSS feed from ${source.displayName}...`);

  try {
    const feed = await parser.parseURL(source.url);

    const entries: ChangelogEntry[] = feed.items.map((item) => {
      const link = item.link || '';
      const pubDate = item.pubDate || item.isoDate || new Date().toISOString();
      const publishedAt = toISOString(parseRFC822Date(pubDate));

      // カテゴリーの抽出
      const categories: string[] = [];
      if (item.categories) {
        categories.push(...item.categories);
      }

      return {
        id: generateEntryId(source.name, link),
        source: source.name,
        title: item.title || 'No title',
        link,
        publishedAt,
        category: categories,
        description: item.content || item.contentSnippet || '',
      };
    });

    console.log(`✓ Fetched ${entries.length} entries from ${source.displayName}`);
    return entries;
  } catch (error) {
    console.error(`✗ Failed to fetch from ${source.displayName}:`, error);
    return [];
  }
}

/**
 * すべてのRSSフィードから記事を取得
 */
export async function fetchAllFeeds(): Promise<ChangelogEntry[]> {
  console.log('Starting RSS feed fetch...\n');

  const results = await Promise.all(RSS_SOURCES.map((source) => fetchFromSource(source)));

  const allEntries = results.flat();

  console.log(`\n✓ Total entries fetched: ${allEntries.length}`);
  return allEntries;
}

/**
 * 新規エントリーのみをフィルタリング
 */
export function filterNewEntries(
  fetchedEntries: ChangelogEntry[],
  existingEntries: ChangelogEntry[]
): ChangelogEntry[] {
  const existingIds = new Set(existingEntries.map((e) => e.id));
  const newEntries = fetchedEntries.filter((entry) => !existingIds.has(entry.id));

  console.log(`\n✓ New entries found: ${newEntries.length}`);

  return newEntries;
}
