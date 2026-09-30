import fs from 'fs/promises';
import path from 'path';
import { ClaudeAnalyzer } from '../analyzer/claude.js';
import { loadDataStore } from '../utils/file.js';
import { formatModelName } from '../utils/analysis.js';
import type { Analysis } from '../types/index.js';

// 使い方: npm run compare:models -- [件数] [モデル...]
// 例: npm run compare:models -- 20 claude-opus-5-5 claude-sonnet-5-5
const [countArg, ...modelArgs] = process.argv.slice(2);
const COUNT = Number(countArg ?? 20);
const MODELS = modelArgs.length > 0 ? modelArgs : ['claude-opus-5-5', 'claude-sonnet-5-5'];
const OUTPUT_FILE = path.join(process.cwd(), 'tmp', 'model-comparison.md');

interface RunResult {
  analysis?: Analysis;
  error?: string;
  ms: number;
}

/**
 * 直近N件のエントリーを複数モデルで分析し、結果を並べたMarkdownを出力する（データは保存しない）
 */
async function main() {
  const dataStore = await loadDataStore();
  const entries = dataStore.entries.slice(0, COUNT);
  const analyzers = MODELS.map((model) => new ClaudeAnalyzer(model));

  console.log(`Comparing ${MODELS.join(', ')} on ${entries.length} entries\n`);

  const rows: Array<{ title: string; link: string; results: RunResult[] }> = [];
  for (const [i, entry] of entries.entries()) {
    console.log(`[${i + 1}/${entries.length}] ${entry.title}`);
    const results = await Promise.all(
      analyzers.map(async (analyzer): Promise<RunResult> => {
        const start = Date.now();
        try {
          return { analysis: await analyzer.analyzeEntry(entry), ms: Date.now() - start };
        } catch (error) {
          return { error: error instanceof Error ? error.message : String(error), ms: Date.now() - start };
        }
      })
    );
    rows.push({ title: entry.title, link: entry.link, results });
  }

  const names = MODELS.map(formatModelName);
  const lines: string[] = [`# モデル比較: ${names.join(' vs ')}`, '', `対象: 直近 ${rows.length} 件`, ''];

  // 集計
  lines.push('## 集計', '', `| | ${names.join(' | ')} |`, `|---|${MODELS.map(() => '---').join('|')}|`);
  const stat = (fn: (r: RunResult[]) => string) => MODELS.map((_, m) => fn(rows.map((row) => row.results[m])));
  const ok = (rs: RunResult[]) => rs.filter((r) => r.analysis).map((r) => r.analysis!);
  const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);
  lines.push(`| 成功 | ${stat((rs) => `${ok(rs).length}/${rs.length}`).join(' | ')} |`);
  lines.push(`| 平均スコア | ${stat((rs) => avg(ok(rs).map((a) => a.totalScore)).toFixed(1)).join(' | ')} |`);
  lines.push(`| 平均出力トークン | ${stat((rs) => avg(ok(rs).map((a) => a.tokenUsage?.output ?? 0)).toFixed(0)).join(' | ')} |`);
  lines.push(`| 平均所要時間 | ${stat((rs) => `${(avg(rs.map((r) => r.ms)) / 1000).toFixed(1)}s`).join(' | ')} |`);
  lines.push(`| 合計コスト | ${stat((rs) => `$${ok(rs).reduce((s, a) => s + (a.estimatedCost ?? 0), 0).toFixed(4)}`).join(' | ')} |`);
  lines.push('');

  // 記事ごとの比較
  lines.push('## 記事ごとの比較', '');
  for (const row of rows) {
    lines.push(`### [${row.title}](${row.link})`, '');
    row.results.forEach((r, m) => {
      const a = r.analysis;
      if (!a) {
        lines.push(`**${names[m]}**: ❌ ${r.error}`, '');
        return;
      }
      const s = a.scores;
      lines.push(
        `**${names[m]}** — ${a.totalScore}点（M${s.merchantImpact} P${s.partnerImpact} J${s.japanRelevance} T${s.technicalImportance}）`,
        '',
        `- タイトル: ${a.titleJa}`,
        `- 要約: ${a.summarizedJa}`,
        ''
      );
    });
  }

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, lines.join('\n'), 'utf-8');
  console.log(`\n✓ Saved: ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
