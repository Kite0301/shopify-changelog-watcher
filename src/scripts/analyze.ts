import { loadDataStore, saveDataStore } from '../utils/file.js';
import { ClaudeAnalyzer } from '../analyzer/claude.js';
import { getPrimaryAnalysis } from '../utils/analysis.js';

// 既存エントリーに対象者・対応・期限を補う件数の上限（1回の実行あたり）
const MAX_DETAIL_BACKFILL = 150;

/**
 * 未分析のエントリーを分析して保存
 * ※分析に失敗したエントリーは analyses が付かないため、次回実行時に再分析される
 * ※「今すぐ対応」「確認推奨」なのに対象者・対応・期限がない既存エントリーも分析し直す
 */
async function main() {
  try {
    console.log('=== Shopify Changelog AI Analyzer ===\n');

    const analyzer = new ClaudeAnalyzer();
    console.log(`Using model: ${analyzer.model}\n`);

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    const needsDetails = (entry: (typeof dataStore.entries)[number]) =>
      Object.values(entry.priority ?? {}).some((p) => p.level !== 'info') &&
      getPrimaryAnalysis(entry)?.audienceJa === undefined;
    const unanalyzedEntries = [
      ...dataStore.entries.filter((entry) => !getPrimaryAnalysis(entry)),
      ...dataStore.entries
        .filter((entry) => getPrimaryAnalysis(entry) && needsDetails(entry))
        .slice(0, MAX_DETAIL_BACKFILL),
    ];

    if (unanalyzedEntries.length === 0) {
      console.log('✓ All entries are already analyzed');
      return;
    }

    console.log(`Found ${unanalyzedEntries.length} unanalyzed entries\n`);

    let successCount = 0;
    let failedCount = 0;
    let totalCost = 0;
    const totalTokens = { input: 0, output: 0 };

    for (let i = 0; i < unanalyzedEntries.length; i++) {
      const entry = unanalyzedEntries[i];
      console.log(`\n[${i + 1}/${unanalyzedEntries.length}] ${entry.title.substring(0, 80)}`);

      try {
        const result = await analyzer.analyzeEntry(entry);
        entry.analyses = { ...entry.analyses, [result.model]: result };
        await saveDataStore(dataStore);

        totalCost += result.estimatedCost ?? 0;
        totalTokens.input += result.tokenUsage?.input ?? 0;
        totalTokens.output += result.tokenUsage?.output ?? 0;
        successCount++;

        console.log(`  ✓ Score ${result.totalScore}/20 - ${result.titleJa}`);
        if (result.actionJa)
          console.log(`    対応: ${result.actionJa}（期限: ${result.deadline ?? 'なし'}）`);
      } catch (error) {
        failedCount++;
        console.error(`  ✗ Failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    console.log('\n=== Analysis Summary ===');
    console.log(`Model: ${analyzer.model}`);
    console.log(`Successfully analyzed: ${successCount}`);
    console.log(`Failed: ${failedCount}`);
    console.log(`Input tokens: ${totalTokens.input.toLocaleString()}`);
    console.log(`Output tokens: ${totalTokens.output.toLocaleString()}`);
    console.log(`Total tokens: ${(totalTokens.input + totalTokens.output).toLocaleString()}`);
    console.log(`Total cost: $${totalCost.toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
