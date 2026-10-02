import type { Analysis, ChangelogEntry } from '../types/index.js';
import type { Profiles } from '../utils/config.js';
import { getPrimaryAnalysis } from '../utils/analysis.js';
import type { MonthlyEditorial } from './monthly-editorial.js';

export interface MonthlyReportData {
  month: string; // YYYY-MM
  monthLabel: string; // 2026年9月
  entries: ChangelogEntry[]; // その月に収集した記事（新しい順）
  editorial?: MonthlyEditorial;
  profiles: Profiles;
  viewerUrl: string;
}

const SOURCE_LABELS: Record<string, string> = {
  'shopify-changelog': 'Shopify Changelog',
  'developer-changelog': 'Developer Changelog',
};

function esc(text: string | null | undefined): string {
  return (text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** ISO日時を日本時間の M/D に */
function shortDate(iso: string): string {
  const d = new Date(new Date(iso).getTime() + 9 * 60 * 60 * 1000);
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
}

/** YYYY-MM-DD を YYYY/M/D に */
function formatDeadline(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  return `${y}/${m}/${d}`;
}

function titleOf(entry: ChangelogEntry, a?: Analysis): string {
  return a?.titleJa ?? entry.title;
}

function entryLink(entry: ChangelogEntry, a?: Analysis): string {
  return `<a href="${esc(entry.link)}" target="_blank" rel="noopener">${esc(titleOf(entry, a))}</a>`;
}

/** 立場ごとの優先度で記事を抽出（スコアの高い順） */
function byLevel(entries: ChangelogEntry[], key: string, level: 'now' | 'check') {
  return entries
    .filter((e) => e.priority?.[key]?.level === level)
    .map((entry) => ({ entry, a: getPrimaryAnalysis(entry) }))
    .sort((x, y) => (y.a?.totalScore ?? 0) - (x.a?.totalScore ?? 0));
}

function renderActionItems(items: ReturnType<typeof byLevel>): string {
  // 期限が近い順、期限なしは後ろ
  const sorted = [...items].sort((x, y) =>
    (x.a?.deadline ?? '9999').localeCompare(y.a?.deadline ?? '9999')
  );
  return sorted
    .map(
      ({ entry, a }) => `
      <li class="action">
        <div class="action-head">
          ${a?.deadline ? `<span class="deadline">期限 ${formatDeadline(a.deadline)}</span>` : ''}
          <span class="source">${SOURCE_LABELS[entry.source]}</span>
        </div>
        <h4>${entryLink(entry, a)}</h4>
        ${a?.audienceJa ? `<p><span class="label">対象</span>${esc(a.audienceJa)}</p>` : ''}
        ${a?.actionJa ? `<p><span class="label">対応</span>${esc(a.actionJa)}</p>` : ''}
      </li>`
    )
    .join('');
}

function renderNotable(items: ReturnType<typeof byLevel>, key: string): string {
  // 最も関係の強い領域ごとにまとめる
  const groups = new Map<string, typeof items>();
  for (const item of items) {
    const area = item.entry.priority?.[key]?.areas[0] ?? 'その他';
    groups.set(area, [...(groups.get(area) ?? []), item]);
  }
  return [...groups.entries()]
    .sort(([, a], [, b]) => b.length - a.length)
    .map(
      ([area, list]) => `
      <div class="area-group">
        <h4 class="area">${esc(area)}</h4>
        <ul class="notable">
          ${list
            .map(
              ({ entry, a }) => `
            <li>
              ${entryLink(entry, a)}
              <p>${esc(a?.summarizedJa)}</p>
            </li>`
            )
            .join('')}
        </ul>
      </div>`
    )
    .join('');
}

export function renderMonthlyHtml(data: MonthlyReportData): string {
  const { entries, editorial, profiles } = data;
  const byId = new Map(entries.map((e) => [e.id, e]));
  const count = (source: string) => entries.filter((e) => e.source === source).length;
  const perspectives = Object.entries(profiles.profiles);
  const levelCount = (level: 'now' | 'check') =>
    entries.filter((e) => Object.values(e.priority ?? {}).some((p) => p.level === level)).length;

  const editorialHtml = editorial
    ? `
    <section class="lead">
      <p class="kicker">今月の Shopify</p>
      <h2>${esc(editorial.headline)}</h2>
      <p>${esc(editorial.overview)}</p>
    </section>

    <section>
      <h2 class="section-title">今月のトピック</h2>
      <div class="topics">
        ${editorial.topics
          .map(
            (t, i) => `
          <article class="topic">
            <span class="topic-no">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.body)}</p>
            ${
              t.entryIds.length > 0
                ? `<ul class="related">${t.entryIds
                    .map((id) => byId.get(id))
                    .filter((e): e is ChangelogEntry => !!e)
                    .map((e) => `<li>${entryLink(e, getPrimaryAnalysis(e))}</li>`)
                    .join('')}</ul>`
                : ''
            }
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section class="points">
      <div>
        <h3>${esc(profiles.profiles.merchant?.label ?? 'マーチャント')}向けのポイント</h3>
        <ul>${editorial.merchantPoints.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>
      <div>
        <h3>${esc(profiles.profiles.developer?.label ?? '開発者')}向けのポイント</h3>
        <ul>${editorial.developerPoints.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>
    </section>`
    : '';

  const actionHtml = perspectives
    .map(([key, profile]) => {
      const items = byLevel(entries, key, 'now');
      if (items.length === 0) return '';
      return `
      <div class="perspective">
        <h3>${esc(profile.label)} <span class="count">${items.length}件</span></h3>
        <ul class="actions">${renderActionItems(items)}</ul>
      </div>`;
    })
    .join('');

  const notableHtml = perspectives
    .map(([key, profile]) => {
      const items = byLevel(entries, key, 'check');
      if (items.length === 0) return '';
      return `
      <div class="perspective">
        <h3>${esc(profile.label)} <span class="count">${items.length}件</span></h3>
        ${renderNotable(items, key)}
      </div>`;
    })
    .join('');

  const allRows = entries
    .map((entry) => {
      const a = getPrimaryAnalysis(entry);
      const marks = Object.values(entry.priority ?? {})
        .map((p) => p.level)
        .includes('now')
        ? '🚨'
        : Object.values(entry.priority ?? {}).some((p) => p.level === 'check')
          ? '👀'
          : '';
      return `<tr><td>${shortDate(entry.collectedAt ?? entry.publishedAt)}</td><td>${marks}</td><td>${entryLink(entry, a)}<span class="src">${SOURCE_LABELS[entry.source]}</span></td></tr>`;
    })
    .join('');

  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>月間 Shopify Changelogs ${esc(data.monthLabel)}号</title>
<meta name="description" content="${esc(data.monthLabel)}のShopifyの更新情報を、マーチャントと開発者・パートナー向けに日本語でまとめた月刊レポート">
<style>
:root {
  --bg: #f6f5f1; --paper: #ffffff; --ink: #1d1d1b; --muted: #6b6b66; --line: #e3e1da;
  --accent: #0b6e4f; --accent-soft: #e4f2ec; --alert: #b3261e; --alert-soft: #fbe9e7;
  --notice: #8a5300; --notice-soft: #fff3df;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #141413; --paper: #1d1d1b; --ink: #ecebe6; --muted: #a3a29b; --line: #34332f;
    --accent: #5cc49b; --accent-soft: #1d3a2f; --alert: #f2a097; --alert-soft: #3b2220;
    --notice: #f0c27a; --notice-soft: #3a2e1a;
  }
}
* { box-sizing: border-box; }
body {
  margin: 0; background: var(--bg); color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;
  line-height: 1.75; font-size: 16px;
}
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.wrap { max-width: 880px; margin: 0 auto; padding: 32px 16px 64px; }
header.masthead { border-bottom: 3px double var(--ink); padding-bottom: 20px; margin-bottom: 32px; }
.masthead .eyebrow { font-size: 12px; letter-spacing: .2em; color: var(--muted); margin: 0; }
.masthead h1 { font-size: clamp(30px, 6vw, 44px); line-height: 1.2; margin: 6px 0 4px; letter-spacing: .02em; }
.masthead .issue { font-size: 18px; margin: 0; }
.stats { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.stat { background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 4px 14px; font-size: 14px; }
.stat strong { font-size: 16px; margin-left: 4px; }
section { margin: 40px 0; }
.section-title { font-size: 22px; border-left: 5px solid var(--accent); padding-left: 12px; margin: 0 0 16px; }
.section-note { color: var(--muted); font-size: 14px; margin: -8px 0 16px; }
.lead { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 24px; }
.lead .kicker { color: var(--accent); font-weight: 700; font-size: 13px; letter-spacing: .1em; margin: 0; }
.lead h2 { font-size: 24px; line-height: 1.4; margin: 6px 0 12px; }
.lead p { margin: 0; }
.topics { display: grid; gap: 16px; }
.topic { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 20px 24px; }
.topic-no { color: var(--accent); font-weight: 700; font-size: 14px; }
.topic h3 { margin: 2px 0 8px; font-size: 19px; line-height: 1.5; }
.topic p { margin: 0 0 10px; }
.related { margin: 0; padding-left: 18px; font-size: 14px; }
.points { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.points > div { background: var(--accent-soft); border-radius: 12px; padding: 16px 20px; }
.points h3 { margin: 0 0 8px; font-size: 16px; }
.points ul { margin: 0; padding-left: 18px; }
.perspective { margin-bottom: 28px; }
.perspective > h3 { font-size: 18px; margin: 0 0 12px; }
.count { color: var(--muted); font-weight: 400; font-size: 14px; }
.actions { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.action { background: var(--paper); border: 1px solid var(--line); border-left: 4px solid var(--alert); border-radius: 8px; padding: 14px 18px; }
.action-head { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-size: 13px; }
.deadline { background: var(--alert-soft); color: var(--alert); font-weight: 700; border-radius: 4px; padding: 0 8px; }
.source, .src { color: var(--muted); font-size: 12px; }
.src { display: block; }
.action h4 { margin: 4px 0 6px; font-size: 16px; line-height: 1.5; }
.action p { margin: 2px 0; font-size: 14px; }
.label { display: inline-block; min-width: 2.8em; color: var(--muted); font-weight: 700; margin-right: 6px; }
.area-group { margin-bottom: 16px; }
.area { display: inline-block; background: var(--notice-soft); color: var(--notice); font-size: 13px; border-radius: 4px; padding: 0 8px; margin: 0 0 6px; }
.notable { list-style: none; margin: 0; padding: 0; }
.notable li { padding: 8px 0; border-bottom: 1px solid var(--line); }
.notable p { margin: 2px 0 0; font-size: 14px; color: var(--muted); }
details { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 12px 20px; }
summary { cursor: pointer; font-weight: 700; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px; }
td { border-top: 1px solid var(--line); padding: 8px 6px; vertical-align: top; }
td:first-child { white-space: nowrap; color: var(--muted); width: 3.5em; }
td:nth-child(2) { width: 1.8em; }
footer { border-top: 1px solid var(--line); padding-top: 16px; color: var(--muted); font-size: 13px; }
footer p { margin: 4px 0; }
</style>
</head>
<body>
<div class="wrap">
  <header class="masthead">
    <p class="eyebrow">MONTHLY SHOPIFY CHANGELOGS</p>
    <h1>月間 Shopify Changelogs</h1>
    <p class="issue">${esc(data.monthLabel)}号</p>
    <div class="stats">
      <span class="stat">更新<strong>${entries.length}件</strong></span>
      <span class="stat">Shopify Changelog<strong>${count('shopify-changelog')}</strong></span>
      <span class="stat">Developer Changelog<strong>${count('developer-changelog')}</strong></span>
      <span class="stat">🚨 要対応<strong>${levelCount('now')}</strong></span>
      <span class="stat">👀 注目<strong>${levelCount('check')}</strong></span>
    </div>
  </header>

  ${editorialHtml}

  ${
    actionHtml
      ? `<section>
    <h2 class="section-title">🚨 要対応</h2>
    <p class="section-note">該当する方は対応が必要な変更です。期限が近い順に並べています。</p>
    ${actionHtml}
  </section>`
      : ''
  }

  ${
    notableHtml
      ? `<section>
    <h2 class="section-title">👀 注目の更新</h2>
    <p class="section-note">対応は必須ではないものの、影響が大きい、または関係する人が多い更新です。</p>
    ${notableHtml}
  </section>`
      : ''
  }

  <section>
    <details>
      <summary>今月の全${entries.length}件の一覧</summary>
      <div class="table-wrap"><table><tbody>${allRows}</tbody></table></div>
    </details>
  </section>

  <footer>
    <p>出典: <a href="https://changelog.shopify.com" target="_blank" rel="noopener">Shopify Changelog</a> / <a href="https://shopify.dev/changelog" target="_blank" rel="noopener">Shopify Developer Changelog</a>。日本語の要約・分類はAI（${esc(editorial?.model ?? 'Claude')}、Jev）が作成しています。正確な内容は各記事の原文をご確認ください。</p>
    <p>本レポートはShopify公式のものではありません。毎日の更新は <a href="${esc(data.viewerUrl)}" target="_blank" rel="noopener">Shopify Changelog Watcher</a> で見られます。</p>
  </footer>
</div>
</body>
</html>
`;
}
