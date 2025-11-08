import { loadDataStore, saveDataStore } from '../utils/file.js';
import { analyzeEntry } from '../analyzer/claude.js';

/**
 * 未分析のエントリーを1件ずつ分析して保存
 */
async function main() {
  try {
    console.log('=== Shopify Changelog AI Analyzer ===\n');

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    const unanalyzedEntries = dataStore.entries.filter((entry) => !entry.analysis);

    if (unanalyzedEntries.length === 0) {
      console.log('✓ All entries are already analyzed');
      return;
    }

    console.log(`Found ${unanalyzedEntries.length} unanalyzed entries\n`);
    console.log('Starting AI analysis...\n');

    let successCount = 0;
    let failedCount = 0;
    const analyzedEntries = [];
    let totalCost = 0;
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    for (let i = 0; i < unanalyzedEntries.length; i++) {
      const entry = unanalyzedEntries[i];
      const progress = `${i + 1}/${unanalyzedEntries.length}`;

      process.stdout.write(`\r[${progress}] Analyzing: ${entry.title.substring(0, 60)}...`);

      try {
        const result = await analyzeEntry(entry);
        entry.analysis = result.analysis;
        analyzedEntries.push(entry);

        totalInputTokens += result.usage.inputTokens;
        totalOutputTokens += result.usage.outputTokens;
        totalCost += result.usage.estimatedCost;

        await saveDataStore(dataStore);
        successCount++;
      } catch (error) {
        console.error(`\n✗ Failed: ${entry.title}`);
        console.error(`  ${error instanceof Error ? error.message : String(error)}`);
        failedCount++;
      }
    }

    console.log('\n');

    console.log('=== Analysis Summary ===');
    console.log(`Total entries: ${dataStore.entries.length}`);
    console.log(`Successfully analyzed: ${successCount}`);
    console.log(`Failed: ${failedCount}`);

    console.log('\n=== Token Usage & Cost ===');
    console.log(`Total input tokens:  ${totalInputTokens.toLocaleString()}`);
    console.log(`Total output tokens: ${totalOutputTokens.toLocaleString()}`);
    console.log(`Total tokens:        ${(totalInputTokens + totalOutputTokens).toLocaleString()}`);
    console.log(`Total cost:          $${totalCost.toFixed(4)}`);

    if (analyzedEntries.length > 0) {
      const sortedEntries = [...analyzedEntries].sort(
        (a, b) => (b.analysis?.totalScore || 0) - (a.analysis?.totalScore || 0)
      );

      console.log('\n=== Top 5 Entries (by score) ===');
      sortedEntries.slice(0, 5).forEach((entry, index) => {
        console.log(`\n${index + 1}. ${entry.title}`);
        console.log(`   Total Score: ${entry.analysis?.totalScore}/20`);
        console.log(
          `   Scores: M:${entry.analysis?.scores.merchantImpact} P:${entry.analysis?.scores.partnerImpact} J:${entry.analysis?.scores.japanRelevance} T:${entry.analysis?.scores.technicalImportance}`
        );
        console.log(`   ${entry.analysis?.summarizedJa}`);
      });
    }

    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
