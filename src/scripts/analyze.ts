import { loadDataStore, saveDataStore } from '../utils/file.js';
import { analyzeEntries } from '../analyzer/claude.js';

/**
 * 未分析のエントリーを分析する
 */
async function main() {
  try {
    console.log('=== Shopify Changelog AI Analyzer ===\n');

    // データを読み込み
    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    // 未分析のエントリーを抽出
    const unanalyzedEntries = dataStore.entries.filter((entry) => !entry.analysis);

    if (unanalyzedEntries.length === 0) {
      console.log('✓ All entries are already analyzed');
      return;
    }

    console.log(`Found ${unanalyzedEntries.length} unanalyzed entries\n`);
    console.log('Starting AI analysis...');
    console.log('(This may take a few minutes)\n');

    // 進捗表示付きで分析
    const analysisResults = await analyzeEntries(unanalyzedEntries, {
      concurrency: 5,
      onProgress: (current, total) => {
        const percentage = Math.round((current / total) * 100);
        process.stdout.write(`\rProgress: ${current}/${total} (${percentage}%)`);
      },
    });

    console.log('\n');

    // 分析結果をエントリーに追加
    let successCount = 0;
    for (const entry of dataStore.entries) {
      const analysis = analysisResults.get(entry.id);
      if (analysis) {
        entry.analysis = analysis;
        successCount++;
      }
    }

    // 保存
    console.log('\nSaving results...');
    await saveDataStore(dataStore);
    console.log(`✓ Saved analysis results for ${successCount} entries`);

    // 統計情報を表示
    console.log('\n=== Analysis Summary ===');
    console.log(`Total entries: ${dataStore.entries.length}`);
    console.log(`Analyzed in this run: ${successCount}`);
    console.log(`Failed: ${unanalyzedEntries.length - successCount}`);

    // 高スコアのエントリーを表示
    const analyzedEntries = dataStore.entries
      .filter((e) => e.analysis && analysisResults.has(e.id))
      .sort((a, b) => (b.analysis?.totalScore || 0) - (a.analysis?.totalScore || 0));

    if (analyzedEntries.length > 0) {
      console.log('\n=== Top Scored Entries (from this run) ===');
      analyzedEntries.slice(0, 5).forEach((entry, index) => {
        console.log(`\n${index + 1}. ${entry.title}`);
        console.log(`   Score: ${entry.analysis?.totalScore}/20`);
        console.log(`   - Merchant Impact: ${entry.analysis?.scores.merchantImpact}`);
        console.log(`   - Partner Impact: ${entry.analysis?.scores.partnerImpact}`);
        console.log(`   - Japan Relevance: ${entry.analysis?.scores.japanRelevance}`);
        console.log(
          `   - Technical Importance: ${entry.analysis?.scores.technicalImportance}`
        );
        console.log(`   Summary: ${entry.analysis?.summarizedJa}`);
      });
    }

    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
