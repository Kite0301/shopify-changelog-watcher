import { fetchAllFeeds, filterNewEntries } from '../fetcher/rss.js';
import { loadDataStore, saveDataStore } from '../utils/file.js';
import { loadEvaluationCriteria } from '../utils/config.js';
import { toISOString } from '../utils/date.js';

/**
 * RSSフィードを取得してデータストアに保存
 */
async function main() {
  try {
    console.log('=== Shopify Changelog RSS Fetcher ===\n');

    // 設定を読み込み
    const criteria = await loadEvaluationCriteria();
    const startDate = criteria.analysis?.startDate || '2025-10-01';
    console.log(`Analysis start date: ${startDate}\n`);

    // 既存のデータを読み込み
    console.log('Loading existing data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} existing entries\n`);

    // RSSフィードから取得
    const fetchedEntries = await fetchAllFeeds();

    // 分析開始日以降のエントリーのみをフィルタリング
    const recentEntries = fetchedEntries.filter(
      (entry) => entry.publishedAt >= startDate
    );
    console.log(
      `Filtered to ${recentEntries.length} entries from ${startDate} onwards (from ${fetchedEntries.length} total)`
    );

    // 新規エントリーのみをフィルタリング
    const newEntries = filterNewEntries(recentEntries, dataStore.entries);

    if (newEntries.length === 0) {
      console.log('\n✓ No new entries to add');
      return;
    }

    // 新規エントリーを追加
    dataStore.entries.push(...newEntries);
    dataStore.lastUpdated = toISOString(new Date());

    // 公開日時の降順（新しい順）にソート
    dataStore.entries.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // 保存
    console.log('\nSaving data...');
    await saveDataStore(dataStore);
    console.log(`✓ Saved ${dataStore.entries.length} total entries`);

    // サマリーを表示
    console.log('\n=== Summary ===');
    console.log(`New entries added: ${newEntries.length}`);
    console.log(`Total entries: ${dataStore.entries.length}`);
    console.log(`Last updated: ${dataStore.lastUpdated}`);

    // 新規エントリーの詳細を表示
    if (newEntries.length > 0) {
      console.log('\n=== New Entries ===');
      newEntries.forEach((entry, index) => {
        console.log(`\n${index + 1}. ${entry.title}`);
        console.log(`   Source: ${entry.source}`);
        console.log(`   Published: ${entry.publishedAt}`);
        console.log(`   Link: ${entry.link}`);
      });
    }

    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
