import { loadDataStore, saveDataStore } from '../utils/file.js';
import { createAllAnalyzers } from '../analyzer/factory.js';

/**
 * 未分析のエントリーを全モデルで分析して保存
 * ※過去エントリーは遡らず、新規未分析エントリーのみ対象
 */
async function main() {
  try {
    console.log('=== Shopify Changelog AI Analyzer ===\n');

    // すべてのアナライザーを作成
    const analyzers = createAllAnalyzers();
    console.log(`Using analyzers: ${analyzers.map((a) => a.getModelName()).join(', ')}\n`);

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    // analyses が全くないエントリーのみを対象（完全未分析）
    const unanalyzedEntries = dataStore.entries.filter((entry) => !entry.analyses);

    if (unanalyzedEntries.length === 0) {
      console.log('✓ All entries are already analyzed');
      return;
    }

    console.log(`Found ${unanalyzedEntries.length} unanalyzed entries\n`);
    console.log('Starting AI analysis...\n');

    let successCount = 0;
    let failedCount = 0;
    const analyzedEntries = [];
    const costByModel: Record<string, number> = {};
    const tokensByModel: Record<string, { input: number; output: number }> = {};

    for (let i = 0; i < unanalyzedEntries.length; i++) {
      const entry = unanalyzedEntries[i];
      const progress = `${i + 1}/${unanalyzedEntries.length}`;

      console.log(`\n[${progress}] Analyzing: ${entry.title.substring(0, 80)}...`);

      // analyses を初期化
      entry.analyses = {};

      // 各アナライザーで分析
      for (const analyzer of analyzers) {
        const modelName = analyzer.getModelName();

        try {
          console.log(`  → ${modelName}: Analyzing...`);
          const result = await analyzer.analyzeEntry(entry);
          entry.analyses[modelName] = result;

          // 統計情報を集計
          if (!costByModel[modelName]) costByModel[modelName] = 0;
          if (!tokensByModel[modelName]) tokensByModel[modelName] = { input: 0, output: 0 };

          costByModel[modelName] += result.estimatedCost || 0;
          tokensByModel[modelName].input += result.tokenUsage?.input || 0;
          tokensByModel[modelName].output += result.tokenUsage?.output || 0;

          console.log(`  ✓ ${modelName}: Score ${result.totalScore}/20`);
          successCount++;
        } catch (error) {
          console.error(`  ✗ ${modelName}: Failed`);
          console.error(`     ${error instanceof Error ? error.message : String(error)}`);
          failedCount++;
        }
      }

      analyzedEntries.push(entry);
      await saveDataStore(dataStore);
    }

    console.log('\n');

    console.log('=== Analysis Summary ===');
    console.log(`Total entries: ${dataStore.entries.length}`);
    console.log(`Successfully analyzed: ${successCount}`);
    console.log(`Failed: ${failedCount}`);

    console.log('\n=== Token Usage & Cost (by model) ===');
    for (const modelName of Object.keys(costByModel)) {
      const tokens = tokensByModel[modelName];
      const cost = costByModel[modelName];
      console.log(`\n${modelName}:`);
      console.log(`  Input tokens:  ${tokens.input.toLocaleString()}`);
      console.log(`  Output tokens: ${tokens.output.toLocaleString()}`);
      console.log(`  Total tokens:  ${(tokens.input + tokens.output).toLocaleString()}`);
      console.log(`  Total cost:    $${cost.toFixed(4)}`);
    }

    if (analyzedEntries.length > 0) {
      console.log('\n=== Top 5 Entries (by average score across models) ===');
      const sortedEntries = [...analyzedEntries].sort((a, b) => {
        // 各エントリーの全モデルの平均スコアを計算
        const avgScoreA = a.analyses
          ? Object.values(a.analyses).reduce((sum, analysis) => sum + analysis.totalScore, 0) /
            Object.values(a.analyses).length
          : 0;
        const avgScoreB = b.analyses
          ? Object.values(b.analyses).reduce((sum, analysis) => sum + analysis.totalScore, 0) /
            Object.values(b.analyses).length
          : 0;
        return avgScoreB - avgScoreA;
      });

      sortedEntries.slice(0, 5).forEach((entry, index) => {
        console.log(`\n${index + 1}. ${entry.title}`);
        if (entry.analyses) {
          for (const [modelName, analysis] of Object.entries(entry.analyses)) {
            console.log(`   [${modelName}] Score: ${analysis.totalScore}/20`);
            console.log(
              `     M:${analysis.scores.merchantImpact} P:${analysis.scores.partnerImpact} J:${analysis.scores.japanRelevance} T:${analysis.scores.technicalImportance}`
            );
            console.log(`     ${analysis.summarizedJa}`);
          }
        }
      });
    }

    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
