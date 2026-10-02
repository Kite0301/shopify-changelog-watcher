import fs from 'fs/promises';
import path from 'path';
import { loadDataStore } from '../utils/file.js';
import { loadProfiles } from '../utils/config.js';
import { getOptionalEnv } from '../utils/env.js';
import {
  generateMonthlyEditorial,
  MonthlyEditorialSchema,
  type MonthlyEditorial,
} from '../reporters/monthly-editorial.js';
import { renderMonthlyHtml } from '../reporters/monthly-html.js';
import { z } from 'zod';

// 使い方: npm run report:monthly -- [YYYY-MM] [--refresh]
//   月を省略すると前月。--refresh で編集記事（Claude）を作り直す
const EDITORIAL_DIR = path.join(process.cwd(), 'data', 'reports', 'monthly');
const HTML_DIR = path.join(process.cwd(), 'public', 'monthly');
const VIEWER_URL = 'https://kite0301.github.io/shopify-changelog-watcher/';
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/** 日本時間での YYYY-MM */
function jstMonth(date: Date): string {
  return new Date(date.getTime() + JST_OFFSET_MS).toISOString().slice(0, 7);
}

function previousMonth(): string {
  const now = new Date(Date.now() + JST_OFFSET_MS);
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1))
    .toISOString()
    .slice(0, 7);
}

const StoredEditorialSchema = MonthlyEditorialSchema.extend({
  model: z.string(),
  generatedAt: z.string(),
});

async function loadEditorial(file: string): Promise<MonthlyEditorial | undefined> {
  try {
    return StoredEditorialSchema.parse(JSON.parse(await fs.readFile(file, 'utf-8')));
  } catch {
    return undefined;
  }
}

/** public/monthly/index.html（バックナンバー一覧）を作り直す */
async function writeIndex() {
  const months = (await fs.readdir(HTML_DIR))
    .filter((f) => /^\d{4}-\d{2}\.html$/.test(f))
    .map((f) => f.slice(0, 7))
    .sort()
    .reverse();
  const items = months
    .map((m) => {
      const [y, mm] = m.split('-').map(Number);
      return `<li><a href="./${m}.html">${y}年${mm}月号</a></li>`;
    })
    .join('\n');
  await fs.writeFile(
    path.join(HTML_DIR, 'index.html'),
    `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>月間 Shopify Changelogs</title>
<style>
:root { --bg: #f6f5f1; --ink: #1d1d1b; --accent: #0b6e4f; }
@media (prefers-color-scheme: dark) { :root { --bg: #141413; --ink: #ecebe6; --accent: #5cc49b; } }
body { margin: 0; background: var(--bg); color: var(--ink); font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Noto Sans JP", sans-serif; line-height: 1.8; }
.wrap { max-width: 720px; margin: 0 auto; padding: 40px 16px; }
h1 { font-size: 32px; margin: 0 0 8px; }
a { color: var(--accent); }
li { font-size: 18px; }
</style>
</head>
<body>
<div class="wrap">
<h1>月間 Shopify Changelogs</h1>
<p>Shopifyの更新情報を、マーチャントと開発者・パートナー向けに日本語でまとめた月刊レポートです。</p>
<ul>
${items}
</ul>
<p><a href="../">毎日の更新を見る（Shopify Changelog Watcher）</a></p>
</div>
</body>
</html>
`,
    'utf-8'
  );
}

async function main() {
  const args = process.argv.slice(2);
  const month = args.find((a) => /^\d{4}-\d{2}$/.test(a)) ?? previousMonth();
  const refresh = args.includes('--refresh');
  const [year, mon] = month.split('-').map(Number);
  const monthLabel = `${year}年${mon}月`;

  const { entries: all } = await loadDataStore();
  const profiles = await loadProfiles();
  const entries = all
    .filter((e) => jstMonth(new Date(e.collectedAt ?? e.publishedAt)) === month)
    .sort((a, b) => (b.collectedAt ?? b.publishedAt).localeCompare(a.collectedAt ?? a.publishedAt));
  console.log(`📰 月間レポート: ${monthLabel}（${entries.length}件）`);

  // 編集記事（保存済みがあれば使い回す）
  const editorialFile = path.join(EDITORIAL_DIR, `${month}.json`);
  let editorial = refresh ? undefined : await loadEditorial(editorialFile);
  if (!editorial && entries.length > 0) {
    if (getOptionalEnv('ANTHROPIC_API_KEY')) {
      console.log('✍️  編集記事を生成中...');
      editorial = await generateMonthlyEditorial(entries, monthLabel);
      await fs.mkdir(EDITORIAL_DIR, { recursive: true });
      await fs.writeFile(editorialFile, JSON.stringify(editorial, null, 2) + '\n', 'utf-8');
      console.log(`✓ 編集記事を保存: ${editorialFile}`);
    } else {
      console.warn('⚠ ANTHROPIC_API_KEY がないため、編集記事なしで作成します');
    }
  }

  await fs.mkdir(HTML_DIR, { recursive: true });
  const htmlFile = path.join(HTML_DIR, `${month}.html`);
  await fs.writeFile(
    htmlFile,
    renderMonthlyHtml({ month, monthLabel, entries, editorial, profiles, viewerUrl: VIEWER_URL }),
    'utf-8'
  );
  await writeIndex();
  console.log(`✓ HTMLを保存: ${htmlFile}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
