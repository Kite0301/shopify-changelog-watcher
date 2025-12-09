import Anthropic from '@anthropic-ai/sdk';
import { loadDataStore, saveDataStore } from '../utils/file.js';
import { getAnthropicApiKey } from '../utils/env.js';

/**
 * 2025年11月以降に収集されたエントリーに日本語タイトルのみを追加（軽量版）
 */
async function main() {
  try {
    console.log('=== Backfill Japanese Titles (Collected in November 2025+) ===\n');

    // Anthropic クライアントを初期化
    const anthropic = new Anthropic({ apiKey: getAnthropicApiKey() });

    console.log('Loading data...');
    const dataStore = await loadDataStore();
    console.log(`✓ Loaded ${dataStore.entries.length} entries\n`);

    // 2025年11月1日以降に収集されたエントリーをフィルタリング
    const cutoffDate = new Date('2025-11-01T00:00:00Z');
    const targetEntries = dataStore.entries.filter((entry) => {
      if (!entry.collectedAt) return false;
      const collectedDate = new Date(entry.collectedAt);
      return collectedDate >= cutoffDate;
    });

    console.log(`Found ${targetEntries.length} entries collected from November 2025 onwards\n`);

    let processedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (let i = 0; i < targetEntries.length; i++) {
      const entry = targetEntries[i];
      console.log(`\n[${i + 1}/${targetEntries.length}] ${entry.title}`);
      console.log(`Published: ${entry.publishedAt}`);

      // analyses が存在しない場合はスキップ
      if (!entry.analyses || !entry.analyses['claude-sonnet-4-5']) {
        console.log('  ⚠ No existing Claude analysis, skipping');
        skippedCount++;
        continue;
      }

      const analysis = entry.analyses['claude-sonnet-4-5'];

      // 既に titleJa が存在する場合はスキップ
      if (analysis.titleJa) {
        console.log(`  ✓ Already has titleJa: ${analysis.titleJa}`);
        skippedCount++;
        continue;
      }

      console.log('  Translating title to Japanese...');

      try {
        // タイトル翻訳のみを実行
        const prompt = `以下の英語のタイトルを日本語に翻訳してください。簡潔で分かりやすい表現を心がけてください。

タイトル: ${entry.title}

日本語訳のみを出力してください。説明や他のテキストは不要です。`;

        const message = await anthropic.messages.create({
          model: 'claude-sonnet-4-5-20250929',
          max_tokens: 100,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        });

        const titleJa =
          message.content[0].type === 'text' ? message.content[0].text.trim() : '';

        if (!titleJa) {
          throw new Error('Empty translation received');
        }

        // 既存の分析データに titleJa を追加
        analysis.titleJa = titleJa;
        processedCount++;

        console.log(`  ✓ ${titleJa}`);
      } catch (error) {
        console.error('  ✗ Failed:', error);
        errorCount++;
      }
    }

    // 保存
    console.log('\n\n💾 Saving results...');
    await saveDataStore(dataStore);
    console.log('✓ Saved');

    console.log(`\n=== Summary ===`);
    console.log(`Total entries checked: ${targetEntries.length}`);
    console.log(`  Translated: ${processedCount}`);
    console.log(`  Skipped: ${skippedCount}`);
    console.log(`  Errors: ${errorCount}`);
    console.log('\n✓ Backfill complete!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
