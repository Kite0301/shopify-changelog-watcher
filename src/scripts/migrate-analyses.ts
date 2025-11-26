import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'entries.json');

/**
 * 既存の analysis フィールドを analyses に移行
 */
async function main() {
  try {
    console.log('=== Migrate analysis to analyses ===\n');

    console.log('Loading data (bypassing schema validation)...');
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    const dataStore = JSON.parse(content);
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    let migratedCount = 0;

    // 既存データの型定義（移行前）
    interface OldEntry {
      analysis?: any;
      analyses?: Record<string, any>;
      [key: string]: any;
    }

    for (const entry of dataStore.entries as OldEntry[]) {
      // analysis フィールドがあり、analyses がない場合に移行
      if (entry.analysis && !entry.analyses) {
        // モデル名がない場合はclaudeと仮定し、追加
        const modelName = entry.analysis.model || 'claude-sonnet-4-5';

        // analysisにmodelフィールドを追加（存在しない場合）
        if (!entry.analysis.model) {
          entry.analysis.model = modelName;
        }

        entry.analyses = {
          [modelName]: entry.analysis,
        };

        // 古い analysis フィールドを削除
        delete entry.analysis;

        migratedCount++;

        if (migratedCount === 1 || migratedCount % 10 === 0) {
          console.log(`✓ Migrated ${migratedCount} entries...`);
        }
      }
    }

    if (migratedCount > 0) {
      console.log('\nSaving migrated data...');
      await fs.writeFile(DATA_FILE, JSON.stringify(dataStore, null, 2), 'utf-8');
      console.log(`✓ Saved\n`);
    } else {
      console.log('\nNo entries to migrate.\n');
    }

    console.log('=== Migration Summary ===');
    console.log(`Total entries: ${dataStore.entries.length}`);
    console.log(`Migrated: ${migratedCount}`);
    console.log('\n✓ Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
