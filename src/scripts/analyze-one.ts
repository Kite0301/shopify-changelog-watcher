import { loadDataStore, saveDataStore } from '../utils/file.js';
import { createAllAnalyzers } from '../analyzer/factory.js';

/**
 * テスト用: 未分析のエントリー1件のみを全モデルで分析して保存
 */
async function main() {
  try {
    console.log('=== Test: Analyze One Entry ===\n');

    // すべてのアナライザーを作成
    const analyzers = createAllAnalyzers();
    console.log(`Using analyzers: ${analyzers.map((a) => a.getModelName()).join(', ')}\n`);

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    const unanalyzedEntries = dataStore.entries.filter((entry) => !entry.analyses);

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

    // analyses を初期化
    entry.analyses = {};

    // 各アナライザーで分析
    for (const analyzer of analyzers) {
      const modelName = analyzer.getModelName();
      console.log(`\nAnalyzing with ${modelName}...`);

      try {
        const result = await analyzer.analyzeEntry(entry);
        entry.analyses[modelName] = result;

        console.log(`\n=== ${modelName} Analysis Result ===`);
        console.log(`Total Score: ${result.totalScore}/20`);
        console.log(`  Merchant Impact: ${result.scores.merchantImpact}/5`);
        console.log(`  Partner Impact: ${result.scores.partnerImpact}/5`);
        console.log(`  Japan Relevance: ${result.scores.japanRelevance}/5`);
        console.log(`  Technical Importance: ${result.scores.technicalImportance}/5`);
        if (result.titleJa) {
          console.log(`\nTitle (Japanese):`);
          console.log(`  ${result.titleJa}`);
        }
        console.log(`\nSummary (Japanese):`);
        console.log(`  ${result.summarizedJa}`);

        if (result.tokenUsage && result.estimatedCost !== undefined) {
          console.log(`\nToken Usage & Cost:`);
          console.log(`  Input tokens:  ${result.tokenUsage.input.toLocaleString()}`);
          console.log(`  Output tokens: ${result.tokenUsage.output.toLocaleString()}`);
          console.log(`  Total tokens:  ${(result.tokenUsage.input + result.tokenUsage.output).toLocaleString()}`);
          console.log(`  Estimated cost: $${result.estimatedCost.toFixed(6)}`);
        }
      } catch (error) {
        console.error(`✗ Failed with ${modelName}:`, error);
      }
    }

    console.log('\n\nSaving...');
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
