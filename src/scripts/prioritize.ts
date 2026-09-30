import { loadDataStore, saveDataStore } from '../utils/file.js';
import { loadProfiles } from '../utils/config.js';
import { computePriority } from '../utils/priority.js';

/**
 * 全エントリーの立場ごとの優先度を計算し直して保存（API は呼ばない）
 */
async function main() {
  const profiles = await loadProfiles();
  const dataStore = await loadDataStore();

  const counts: Record<string, Record<string, number>> = {};
  for (const entry of dataStore.entries) {
    entry.priority = computePriority(entry, profiles);
    for (const [key, p] of Object.entries(entry.priority ?? {})) {
      counts[key] ??= { now: 0, check: 0, info: 0 };
      counts[key][p.level]++;
    }
  }
  await saveDataStore(dataStore);

  for (const [key, c] of Object.entries(counts)) {
    console.log(
      `${profiles.profiles[key].label}: 今すぐ対応 ${c.now} / 確認推奨 ${c.check} / 参考 ${c.info}`
    );
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
