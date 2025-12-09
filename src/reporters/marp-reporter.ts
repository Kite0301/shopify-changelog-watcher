import { WeeklyReport, ScoredEntry } from './types.js';
import { formatDate } from '../utils/date.js';
import { formatWeekNumber, formatWeekRange } from '../utils/week.js';

/**
 * 週次レポートをMarp形式のスライドMarkdownで生成
 */
export function generateMarpSlides(report: WeeklyReport): string {
  const slides: string[] = [];

  // スライド1: タイトルページ
  slides.push(generateTitleSlide(report));

  // スライド2: この資料について
  slides.push(generateAboutSlide());

  // スライド3: サマリー + 目次
  slides.push(generateSummarySlide(report));

  // スライド4〜: 超重要更新
  if (report.entries.high.length > 0) {
    report.entries.high.forEach((entry, index) => {
      slides.push(generateDetailSlide(entry, index + 1, '🔥 超重要更新'));
    });
  }

  // 重要更新
  if (report.entries.medium.length > 0) {
    report.entries.medium.forEach((entry, index) => {
      slides.push(generateDetailSlide(entry, index + 1, '⚠️ 重要更新'));
    });
  }

  // 通常更新
  if (report.entries.low.length > 0) {
    report.entries.low.forEach((entry, index) => {
      slides.push(generateDetailSlide(entry, index + 1, '📌 通常更新'));
    });
  }

  // 最終スライド: まとめ
  slides.push(generateClosingSlide(report));

  // Marpフロントマター + スライド
  return generateFrontMatter() + '\n\n' + slides.join('\n\n---\n\n');
}

/**
 * Marpフロントマター
 */
function generateFrontMatter(): string {
  return `---
marp: true
theme: shopify-changelog
paginate: true
header: 'Shopify Changelog 週次レポート'
footer: '[Kite0301/shopify-changelog-watcher](https://github.com/Kite0301/shopify-changelog-watcher)'
---`;
}

/**
 * タイトルスライド
 */
function generateTitleSlide(report: WeeklyReport): string {
  const { meta } = report;
  const weekTitle = formatWeekNumber(meta.weekNumber);
  const weekRange = formatWeekRange(meta.weekNumber);

  return `<!-- _class: title -->
<!-- _header: "" -->
<!-- _footer: "" -->

# Shopify Changelog 週次レポート

## ${weekTitle}
### ${weekRange}`;
}

/**
 * この資料について
 */
function generateAboutSlide(): string {
  return `<!-- _class: about -->

# 📖 この資料について

この資料は以下の2つのShopify Changelogの更新情報を、AIが評価して採点したものです。

**📰 情報源**
[Shopify Changelog](https://changelog.shopify.com/) / [Developer Changelog](https://shopify.dev/changelog)

## 🎯 評価方法

AIが4つの基準をもとに各5点満点、**合計20点満点**で評価

<div class="about-criteria">
<div class="criteria-item">マーチャント影響度 (5点)</div>
<div class="criteria-item">パートナー影響度 (5点)</div>
<div class="criteria-item">日本市場関連度 (5点)</div>
<div class="criteria-item">技術的重要度 (5点)</div>
</div>

## 📊 優先度の分類

<div class="about-priority">
<div class="priority-item high">🔥 超重要 - 12pt以上</div>
<div class="priority-item medium">⚠️ 重要 - 8-11pt</div>
<div class="priority-item low">📌 通常 - 8pt未満</div>
</div>`;
}

/**
 * サマリースライド
 */
function generateSummarySlide(report: WeeklyReport): string {
  const { stats, entries } = report;

  // 目次：全記事のタイトルとスコア（コンパクト表示）
  const tocItems: string[] = [];

  if (entries.high.length > 0) {
    entries.high.forEach(item => {
      const title = item.analysis.titleJa || item.entry.title;
      tocItems.push(`<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">${title}</span><span class="toc-score">${item.score}pt</span></div>`);
    });
  }

  if (entries.medium.length > 0) {
    entries.medium.forEach(item => {
      const title = item.analysis.titleJa || item.entry.title;
      tocItems.push(`<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">${title}</span><span class="toc-score">${item.score}pt</span></div>`);
    });
  }

  if (entries.low.length > 0) {
    entries.low.forEach(item => {
      const title = item.analysis.titleJa || item.entry.title;
      tocItems.push(`<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">${title}</span><span class="toc-score">${item.score}pt</span></div>`);
    });
  }

  return `<!-- _class: summary -->

# 📊 今週の更新

<div class="summary-container">

<div class="summary-left">

<div class="summary-stats">
<div class="stat-item high">
<div class="stat-number">${stats.highPriorityCount}</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">${stats.mediumPriorityCount}</div>
<div class="stat-label">重要<span class="stat-range">8-11pt</span></div>
</div>
<div class="stat-item low">
<div class="stat-number">${stats.lowPriorityCount}</div>
<div class="stat-label">通常<span class="stat-range">8pt未満</span></div>
</div>
</div>

<div class="summary-meta">
<div class="meta-item">
<span class="meta-label">総更新数</span>
<span class="meta-value">${stats.totalEntries}件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify ${stats.bySource['shopify-changelog']}件 / Dev ${stats.bySource['developer-changelog']}件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
${tocItems.join('\n')}
</div>
</div>

</div>`;
}

/**
 * 詳細スライド（個別更新）- 1スライドに統合
 */
function generateDetailSlide(item: ScoredEntry, index: number, category: string): string {
  const { entry, score, analysis } = item;
  const publishedDate = formatDate(new Date(entry.publishedAt));
  const sourceName = entry.source === 'shopify-changelog'
    ? 'Shopify Changelog'
    : 'Developer Changelog';

  // スコアバーの視覚化（20点満点）
  const scoreBar = generateScoreBar(score);
  const scoreColor = score >= 12 ? 'high' : score >= 8 ? 'medium' : 'low';
  const displayTitle = analysis.titleJa || entry.title;

  return `<!-- _class: detail -->

# ${category} #${index}

## ${displayTitle}

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge ${scoreColor}">${score}pt</div>
<div class="score-bar">${scoreBar}</div>
</div>
<div class="article-link-container">
<a href="${entry.link}" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

${analysis.summarizedJa}

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">${analysis.scores.merchantImpact}/5</span>
${generateMiniBar(analysis.scores.merchantImpact, 5)}
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">${analysis.scores.partnerImpact}/5</span>
${generateMiniBar(analysis.scores.partnerImpact, 5)}
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">${analysis.scores.japanRelevance}/5</span>
${generateMiniBar(analysis.scores.japanRelevance, 5)}
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">${analysis.scores.technicalImportance}/5</span>
${generateMiniBar(analysis.scores.technicalImportance, 5)}
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 ${publishedDate}</span>
<span>🔗 ${sourceName}</span>
</div>`;
}

/**
 * 最終スライド
 */
function generateClosingSlide(report: WeeklyReport): string {
  const { meta } = report;

  return `<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## ${formatWeekNumber(meta.weekNumber)}（${formatWeekRange(meta.weekNumber)}）

全 **${report.stats.totalEntries}件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>`;
}

/**
 * スコアバーを生成（■で視覚化）
 */
function generateScoreBar(score: number, max: number = 20): string {
  const filled = Math.round((score / max) * 20);
  const empty = 20 - filled;
  return '■'.repeat(filled) + '□'.repeat(empty);
}

/**
 * ミニバーを生成（詳細スコア用）
 */
function generateMiniBar(score: number, max: number = 5): string {
  const filled = score;
  const empty = max - score;
  return `<div class="mini-bar">${'●'.repeat(filled)}${'○'.repeat(empty)}</div>`;
}

/**
 * タイトルを短縮（スライド表示用）
 */
function shortenTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength) + '...';
}
