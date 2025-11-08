// データを保持するグローバル変数
let allEntries = [];
let filteredEntries = [];

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  setupEventListeners();
  renderEntries();
});

/**
 * データを読み込む
 */
async function loadData() {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');

  try {
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';

    const response = await fetch('../data/entries.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    allEntries = data.entries || [];
    filteredEntries = [...allEntries];

    updateStats();
    loadingEl.style.display = 'none';
  } catch (error) {
    console.error('Failed to load data:', error);
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    errorEl.textContent = `データの読み込みに失敗しました: ${error.message}`;
  }
}

/**
 * イベントリスナーを設定
 */
function setupEventListeners() {
  const searchBox = document.getElementById('searchBox');
  const sourceFilter = document.getElementById('sourceFilter');
  const scoreFilter = document.getElementById('scoreFilter');
  const sortBy = document.getElementById('sortBy');

  searchBox.addEventListener('input', applyFilters);
  sourceFilter.addEventListener('change', applyFilters);
  scoreFilter.addEventListener('change', applyFilters);
  sortBy.addEventListener('change', applyFilters);
}

/**
 * 統計情報を更新
 */
function updateStats() {
  const totalCount = allEntries.length;

  // 最新の更新日を取得
  let latestDate = '-';
  if (allEntries.length > 0) {
    const dates = allEntries.map((e) => new Date(e.publishedAt));
    const latest = new Date(Math.max(...dates));
    latestDate = formatDate(latest.toISOString());
  }

  document.getElementById('totalCount').textContent = totalCount;
  document.getElementById('latestDate').textContent = latestDate;
}

/**
 * フィルターとソートを適用
 */
function applyFilters() {
  const searchText = document.getElementById('searchBox').value.toLowerCase();
  const sourceValue = document.getElementById('sourceFilter').value;
  const scoreValue = document.getElementById('scoreFilter').value;
  const sortValue = document.getElementById('sortBy').value;

  // フィルタリング
  filteredEntries = allEntries.filter((entry) => {
    // 検索テキスト
    const matchesSearch =
      !searchText ||
      entry.title.toLowerCase().includes(searchText) ||
      (entry.analysis?.summarizedJa || '').toLowerCase().includes(searchText);

    // ソース
    const matchesSource = !sourceValue || entry.source === sourceValue;

    // スコア
    let matchesScore = true;
    if (scoreValue && entry.analysis?.totalScore !== undefined) {
      const score = entry.analysis.totalScore;
      if (scoreValue === 'high') matchesScore = score >= 12;
      else if (scoreValue === 'medium') matchesScore = score >= 8 && score < 12;
      else if (scoreValue === 'low') matchesScore = score < 8;
    }

    return matchesSearch && matchesSource && matchesScore;
  });

  // ソート
  filteredEntries.sort((a, b) => {
    if (sortValue === 'date-desc') {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    } else if (sortValue === 'date-asc') {
      return new Date(a.publishedAt) - new Date(b.publishedAt);
    } else if (sortValue === 'score-desc') {
      const scoreA = a.analysis?.totalScore ?? 0;
      const scoreB = b.analysis?.totalScore ?? 0;
      return scoreB - scoreA;
    } else if (sortValue === 'score-asc') {
      const scoreA = a.analysis?.totalScore ?? 0;
      const scoreB = b.analysis?.totalScore ?? 0;
      return scoreA - scoreB;
    }
    return 0;
  });

  renderEntries();
}

/**
 * エントリーを描画
 */
function renderEntries() {
  const container = document.getElementById('entriesContainer');

  if (filteredEntries.length === 0) {
    container.innerHTML = '<div class="loading">該当するエントリーがありません</div>';
    return;
  }

  container.innerHTML = filteredEntries
    .map((entry) => createEntryCard(entry))
    .join('');
}

/**
 * エントリーカードのHTMLを生成
 */
function createEntryCard(entry) {
  const analysis = entry.analysis;
  const scores = analysis?.scores;
  const totalScore = analysis?.totalScore ?? 0;

  // スコアレベルを判定
  let scoreClass = 'score-low';
  if (totalScore >= 12) scoreClass = 'score-high';
  else if (totalScore >= 8) scoreClass = 'score-medium';

  // 日付をフォーマット
  const publishedDate = formatDate(entry.publishedAt);

  // 3日以内かチェック
  const isNew = isWithin3Days(entry.publishedAt);
  const newBadge = isNew ? '<span class="new-badge">NEW</span>' : '';

  // ソース名を変換
  const sourceName =
    entry.source === 'shopify-changelog'
      ? 'Shopify Changelog'
      : 'Developer Changelog';

  // サマリー（日本語）
  const summary = analysis?.summarizedJa || '分析中...';

  // 個別スコア
  const scoreItems = scores
    ? `
    <div class="entry-scores">
      <div class="score-item">
        <span class="score-label">マーチャント影響</span>
        <span class="score-value">${scores.merchantImpact}/5</span>
      </div>
      <div class="score-item">
        <span class="score-label">パートナー影響</span>
        <span class="score-value">${scores.partnerImpact}/5</span>
      </div>
      <div class="score-item">
        <span class="score-label">日本関連性</span>
        <span class="score-value">${scores.japanRelevance}/5</span>
      </div>
      <div class="score-item">
        <span class="score-label">技術的重要性</span>
        <span class="score-value">${scores.technicalImportance}/5</span>
      </div>
    </div>
  `
    : '<div class="entry-scores">分析中...</div>';

  return `
    <div class="entry-card ${scoreClass}">
      <div class="entry-header">
        <div class="entry-title">
          <a href="${entry.link}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(entry.title)}
          </a>
          ${newBadge}
        </div>
        <div class="entry-score">スコア: ${totalScore}/20</div>
      </div>

      <div class="entry-meta">
        <span>📅 ${publishedDate}</span>
        <span>📍 ${sourceName}</span>
      </div>

      <div class="entry-summary">
        ${escapeHtml(summary)}
      </div>

      ${scoreItems}
    </div>
  `;
}

/**
 * 日付をフォーマット
 */
function formatDate(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

/**
 * 3日以内かチェック
 */
function isWithin3Days(isoString) {
  const publishedDate = new Date(isoString);
  const now = new Date();
  const diffInMs = now - publishedDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays <= 3;
}

/**
 * HTMLエスケープ
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
