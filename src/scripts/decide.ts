import { JevClassifier } from '../analyzer/jev.js';
import { getOptionalEnv } from '../utils/env.js';
import { loadProfiles } from '../utils/config.js';
import { loadDataStore, saveDataStore } from '../utils/file.js';

// 保存間隔（件数）。全件バックフィル時にファイル書き込みを減らす
const SAVE_EVERY = 25;

/**
 * Jevの判定がない（または設定が古い）エントリーを評価して保存
 */
async function main() {
  if (!getOptionalEnv('TYPESAFE_API_KEY')) {
    console.log('TYPESAFE_API_KEY is not set, skipping Jev decisions');
    return;
  }

  const profiles = await loadProfiles();
  const classifier = new JevClassifier(profiles);
  const dataStore = await loadDataStore();
  // 未判定、または判定に使った立場の設定が古いエントリーが対象
  const targets = dataStore.entries.filter(
    (entry) => entry.jev?.profilesVersion !== profiles.version
  );
  console.log(`=== Jev decisions: ${targets.length} entries ===\n`);

  let successCount = 0;
  let failedCount = 0;
  let inputTokens = 0;

  for (const [i, entry] of targets.entries()) {
    try {
      entry.jev = await classifier.decide(entry);
      inputTokens += entry.jev.tokenUsage.input;
      successCount++;
      console.log(
        `[${i + 1}/${targets.length}] ${entry.jev.totalScore.toFixed(1)} ` +
          `(action ${entry.jev.actionRequired.toFixed(2)}) ${entry.title.substring(0, 70)}`
      );
    } catch (error) {
      failedCount++;
      console.error(
        `[${i + 1}/${targets.length}] ✗ ${error instanceof Error ? error.message : String(error)}`
      );
    }
    if ((i + 1) % SAVE_EVERY === 0) await saveDataStore(dataStore);
  }
  await saveDataStore(dataStore);

  console.log('\n=== Jev Summary ===');
  console.log(`Decided: ${successCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Input tokens: ${inputTokens.toLocaleString()}`);
  console.log(`Estimated cost: $${((inputTokens / 1_000_000) * 0.042).toFixed(4)}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
