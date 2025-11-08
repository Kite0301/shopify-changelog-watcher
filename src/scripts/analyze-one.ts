import { loadDataStore, saveDataStore } from '../utils/file.js';
import { analyzeEntry } from '../analyzer/claude.js';

/**
 * テスト用: 未分析のエントリー1件のみを分析して保存
 */
async function main() {
  try {
    console.log('=== Test: Analyze One Entry ===\n');

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    const unanalyzedEntries = dataStore.entries.filter((entry) => !entry.analysis);

    if (unanalyzedEntries.length === 0) {
      console.log('✓ All entries are already analyzed');
      return;
    }

    console.log(`Found ${unanalyzedEntries.length} unanalyzed entries`);
    console.log(`Analyzing the first one...\n`);

    const entry = unanalyzedEntries[0];
    console.log(`Title: ${entry.title}`);
    console.log(`Source: ${entry.source}`);
    console.log(`Published: ${entry.publishedAt}\n`);

    console.log('Analyzing...');
    const result = await analyzeEntry(entry);

    console.log('\n=== Analysis Result ===');
    console.log(`Total Score: ${result.analysis.totalScore}/20`);
    console.log(`  Merchant Impact: ${result.analysis.scores.merchantImpact}/5`);
    console.log(`  Partner Impact: ${result.analysis.scores.partnerImpact}/5`);
    console.log(`  Japan Relevance: ${result.analysis.scores.japanRelevance}/5`);
    console.log(`  Technical Importance: ${result.analysis.scores.technicalImportance}/5`);
    console.log(`\nSummary (Japanese):`);
    console.log(`  ${result.analysis.summarizedJa}`);

    console.log('\n=== Token Usage & Cost ===');
    console.log(`Input tokens:  ${result.usage.inputTokens.toLocaleString()}`);
    console.log(`Output tokens: ${result.usage.outputTokens.toLocaleString()}`);
    console.log(`Total tokens:  ${result.usage.totalTokens.toLocaleString()}`);
    console.log(`Estimated cost: $${result.usage.estimatedCost.toFixed(6)}\n`);

    console.log('Saving...');
    entry.analysis = result.analysis;
    await saveDataStore(dataStore);
    console.log(`✓ Saved`);

    const remaining = unanalyzedEntries.length - 1;
    console.log(`\n✓ Done! ${remaining} entries remaining to analyze.`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
