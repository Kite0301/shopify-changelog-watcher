import { GeminiAnalyzer } from '../analyzer/gemini.js';
import { loadDataStore } from '../utils/file.js';

/**
 * Gemini APIのみをテスト
 */
async function main() {
  try {
    console.log('=== Test: Gemini Analyzer Only ===\n');

    const analyzer = new GeminiAnalyzer();
    console.log(`Using model: ${analyzer.getModelName()}\n`);

    console.log('Loading data...');
    const dataStore = await loadDataStore();

    // 最初のエントリーを取得
    const entry = dataStore.entries[0];
    console.log(`Title: ${entry.title}`);
    console.log(`Source: ${entry.source}\n`);

    console.log('Analyzing with Gemini...\n');

    try {
      const result = await analyzer.analyzeEntry(entry);

      console.log('=== Analysis Result ===');
      console.log(`Total Score: ${result.totalScore}/20`);
      console.log(`  Merchant Impact: ${result.scores.merchantImpact}/5`);
      console.log(`  Partner Impact: ${result.scores.partnerImpact}/5`);
      console.log(`  Japan Relevance: ${result.scores.japanRelevance}/5`);
      console.log(`  Technical Importance: ${result.scores.technicalImportance}/5`);
      console.log(`\nSummary (Japanese):`);
      console.log(`  ${result.summarizedJa}`);

      if (result.tokenUsage && result.estimatedCost !== undefined) {
        console.log(`\nToken Usage & Cost:`);
        console.log(`  Input tokens:  ${result.tokenUsage.input.toLocaleString()}`);
        console.log(`  Output tokens: ${result.tokenUsage.output.toLocaleString()}`);
        console.log(
          `  Total tokens:  ${(result.tokenUsage.input + result.tokenUsage.output).toLocaleString()}`
        );
        console.log(`  Estimated cost: $${result.estimatedCost.toFixed(6)}`);
      }

      console.log('\n✓ Success!');
    } catch (error) {
      console.error('\n✗ Failed:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Stack:', error.stack);
      }
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
