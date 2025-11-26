import fs from 'fs/promises';
import path from 'path';
import { GeminiAnalyzer } from '../analyzer/gemini.js';

const DATA_FILE = path.join(process.cwd(), 'data', 'entries.json');
const ENTRIES_TO_BACKFILL = 10;

/**
 * 直近N件のエントリーにGemini分析を追加
 */
async function main() {
  try {
    console.log('=== Backfill Gemini Analysis for Recent Entries ===\n');

    // データを直接読み込み（スキーマ検証なし）
    console.log('Loading data...');
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    const dataStore = JSON.parse(content);
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    // 直近N件でGemini分析がないエントリーを探す
    const entriesToBackfill = dataStore.entries
      .slice(0, ENTRIES_TO_BACKFILL)
      .filter((entry: any) => {
        if (!entry.analyses) return false;
        return !entry.analyses['gemini-2.5-flash'];
      });

    if (entriesToBackfill.length === 0) {
      console.log('✓ All recent entries already have Gemini analysis');
      return;
    }

    console.log(`Found ${entriesToBackfill.length} entries to backfill\n`);

    const analyzer = new GeminiAnalyzer();
    let successCount = 0;
    let failedCount = 0;
    let totalCost = 0;
    let totalTokens = 0;

    for (let i = 0; i < entriesToBackfill.length; i++) {
      const entry = entriesToBackfill[i];
      const progress = `${i + 1}/${entriesToBackfill.length}`;

      console.log(`\n[${progress}] ${entry.title.substring(0, 60)}...`);
      console.log(`  Analyzing with Gemini...`);

      try {
        const result = await analyzer.analyzeEntry(entry);

        // analyses に追加
        if (!entry.analyses) {
          entry.analyses = {};
        }
        entry.analyses['gemini-2.5-flash'] = result;

        console.log(`  ✓ Score: ${result.totalScore}/20`);
        if (result.tokenUsage) {
          totalTokens += result.tokenUsage.input + result.tokenUsage.output;
          console.log(`  Tokens: ${result.tokenUsage.input + result.tokenUsage.output}`);
        }
        if (result.estimatedCost !== undefined) {
          totalCost += result.estimatedCost;
        }

        successCount++;

        // 1件ごとに保存
        await fs.writeFile(DATA_FILE, JSON.stringify(dataStore, null, 2), 'utf-8');

        // API制限を考慮して少し待機（無料枠: 10 RPM）
        if (i < entriesToBackfill.length - 1) {
          console.log(`  Waiting 6s for rate limit...`);
          await new Promise(resolve => setTimeout(resolve, 6000));
        }
      } catch (error) {
        console.error(`  ✗ Failed: ${error instanceof Error ? error.message : String(error)}`);
        failedCount++;
      }
    }

    console.log('\n=== Backfill Summary ===');
    console.log(`Successfully backfilled: ${successCount}`);
    console.log(`Failed: ${failedCount}`);
    console.log(`Total tokens used: ${totalTokens.toLocaleString()}`);
    console.log(`Total cost: $${totalCost.toFixed(4)} (free tier)`);
    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
