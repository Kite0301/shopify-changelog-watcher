import fs from 'fs/promises';
import path from 'path';
import { loadDataStore } from '../utils/file.js';
import { getPrimaryAnalysis, formatModelName } from '../utils/analysis.js';

const OUTPUT_FILE = path.join(process.cwd(), 'tmp', 'jev-vs-claude.md');
const AXES = ['merchantImpact', 'partnerImpact', 'japanRelevance', 'technicalImportance'] as const;

const band = (score: number) => (score >= 12 ? '超重要' : score >= 8 ? '重要' : '通常');

function correlation(xs: number[], ys: number[]): number {
  const mean = (v: number[]) => v.reduce((a, b) => a + b, 0) / v.length;
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let dx = 0;
  let dy = 0;
  xs.forEach((x, i) => {
    num += (x - mx) * (ys[i] - my);
    dx += (x - mx) ** 2;
    dy += (ys[i] - my) ** 2;
  });
  return num / Math.sqrt(dx * dy);
}

/**
 * 保存済みの Jev の判定と Claude の分析を突き合わせる（API は呼ばない）
 */
async function main() {
  const { entries } = await loadDataStore();
  const pairs = entries.flatMap((entry) => {
    const claude = getPrimaryAnalysis(entry);
    return claude && entry.jev ? [{ entry, claude, jev: entry.jev }] : [];
  });
  if (pairs.length === 0) {
    console.log('No entries have both Jev and Claude results');
    return;
  }

  const claudeTotals = pairs.map((p) => p.claude.totalScore);
  const jevTotals = pairs.map((p) => p.jev.totalScore);
  const bandAgree = pairs.filter(
    (p) => band(p.claude.totalScore) === band(p.jev.totalScore)
  ).length;
  const models = [...new Set(pairs.map((p) => formatModelName(p.claude.model)))].join(', ');

  const lines = [
    '# Jev vs Claude',
    '',
    `対象: ${pairs.length} 件（Claude: ${models} / Jev: ${[...new Set(pairs.map((p) => p.jev.model))].join(', ')}）`,
    '',
    '## 合計スコア',
    '',
    `- 相関係数: ${correlation(claudeTotals, jevTotals).toFixed(2)}`,
    `- 平均: Claude ${(claudeTotals.reduce((a, b) => a + b, 0) / pairs.length).toFixed(1)} / Jev ${(jevTotals.reduce((a, b) => a + b, 0) / pairs.length).toFixed(1)}`,
    `- 優先度区分（超重要/重要/通常）の一致: ${bandAgree}/${pairs.length}（${((bandAgree / pairs.length) * 100).toFixed(0)}%）`,
    '',
    '## 軸ごと',
    '',
    '| 軸 | 相関 | 平均差（Jev−Claude） | Jevの平均確信度 |',
    '|---|---|---|---|',
    ...AXES.map((axis) => {
      const c = pairs.map((p) => p.claude.scores[axis]);
      const j = pairs.map((p) => p.jev.scores[axis].score);
      const diff = j.reduce((sum, v, i) => sum + v - c[i], 0) / pairs.length;
      const conf = pairs.reduce((sum, p) => sum + p.jev.scores[axis].confidence, 0) / pairs.length;
      return `| ${axis} | ${correlation(c, j).toFixed(2)} | ${diff >= 0 ? '+' : ''}${diff.toFixed(2)} | ${conf.toFixed(2)} |`;
    }),
    '',
    '## 判定が大きく食い違う記事（上位20件）',
    '',
    '| Claude | Jev | 対応必要 | 記事 |',
    '|---|---|---|---|',
    ...[...pairs]
      .sort(
        (a, b) =>
          Math.abs(b.jev.totalScore - b.claude.totalScore) -
          Math.abs(a.jev.totalScore - a.claude.totalScore)
      )
      .slice(0, 20)
      .map(
        (p) =>
          `| ${p.claude.totalScore} | ${p.jev.totalScore.toFixed(1)} | ${(p.jev.actionRequired * 100).toFixed(0)}% | [${p.claude.titleJa ?? p.entry.title}](${p.entry.link}) |`
      ),
    '',
  ];

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, lines.join('\n'), 'utf-8');
  console.log(lines.join('\n'));
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
