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

    // GitHub raw コンテンツから直接取得
    const response = await fetch('https://raw.githubusercontent.com/Kite0301/shopify-changelog-watcher/refs/heads/main/data/entries.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    allEntries = data.entries || [];

    // 初期ソート: 収集日（なければ公開日）の新しい順
    allEntries.sort((a, b) => {
      const dateA = new Date(a.collectedAt || a.publishedAt);
      const dateB = new Date(b.collectedAt || b.publishedAt);
      return dateB - dateA; // 新しい順
    });

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
  const modelFilter = document.getElementById('modelFilter');

  searchBox.addEventListener('input', applyFilters);
  sourceFilter.addEventListener('change', applyFilters);
  scoreFilter.addEventListener('change', applyFilters);
  modelFilter.addEventListener('change', applyFilters);
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
 * エントリーから分析結果を取得（analyses または analysis から）
 */
function getAnalysis(entry) {
  // 新形式: analyses から取得
  if (entry.analyses) {
    const models = Object.keys(entry.analyses);
    if (models.length > 0) {
      // 最初のモデルの結果を返す（デフォルト）
      return entry.analyses[models[0]];
    }
  }
  // 旧形式: analysis を返す（後方互換性）
  return entry.analysis || null;
}

/**
 * エントリーから全モデルの分析結果を取得
 */
function getAllAnalyses(entry) {
  if (entry.analyses) {
    return entry.analyses;
  }
  // 旧形式の場合
  if (entry.analysis) {
    const model = entry.analysis.model || 'claude-sonnet-4-5';
    return { [model]: entry.analysis };
  }
  return {};
}

/**
 * フィルターを適用
 */
function applyFilters() {
  const searchText = document.getElementById('searchBox').value.toLowerCase();
  const sourceValue = document.getElementById('sourceFilter').value;
  const scoreValue = document.getElementById('scoreFilter').value;
  const modelValue = document.getElementById('modelFilter').value;

  // フィルタリング
  filteredEntries = allEntries.filter((entry) => {
    const analysis = getAnalysis(entry);

    // 検索テキスト（日本語タイトルも検索対象に）
    const matchesSearch =
      !searchText ||
      entry.title.toLowerCase().includes(searchText) ||
      (analysis?.titleJa || '').toLowerCase().includes(searchText) ||
      (analysis?.summarizedJa || '').toLowerCase().includes(searchText);

    // ソース
    const matchesSource = !sourceValue || entry.source === sourceValue;

    // モデル
    const matchesModel = !modelValue || (entry.analyses && entry.analyses[modelValue]);

    // スコア
    let matchesScore = true;
    if (scoreValue && analysis?.totalScore !== undefined) {
      const score = analysis.totalScore;
      if (scoreValue === 'high') matchesScore = score >= 12;
      else if (scoreValue === 'medium') matchesScore = score >= 8 && score < 12;
      else if (scoreValue === 'low') matchesScore = score < 8;
    }

    return matchesSearch && matchesSource && matchesModel && matchesScore;
  });

  // デフォルトソート: 収集日（なければ公開日）の新しい順
  filteredEntries.sort((a, b) => {
    const dateA = new Date(a.collectedAt || a.publishedAt);
    const dateB = new Date(b.collectedAt || b.publishedAt);
    return dateB - dateA; // 新しい順
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
  const analyses = getAllAnalyses(entry);
  const modelNames = Object.keys(analyses);

  // デフォルトで最初のモデルを表示
  const defaultAnalysis = modelNames.length > 0 ? analyses[modelNames[0]] : null;
  const totalScore = defaultAnalysis?.totalScore ?? 0;

  // スコアレベルを判定
  let scoreClass = 'score-low';
  if (totalScore >= 12) scoreClass = 'score-high';
  else if (totalScore >= 8) scoreClass = 'score-medium';

  // 日付をフォーマット
  const publishedDate = formatDate(entry.publishedAt);
  const collectedDate = entry.collectedAt ? formatDate(entry.collectedAt) : null;

  // 3日以内かチェック（収集日基準）
  const isNew = isWithin3Days(entry);
  const newBadge = isNew ? '<span class="new-badge">NEW</span>' : '';

  // ソース名を変換
  const sourceName =
    entry.source === 'shopify-changelog'
      ? 'Shopify Changelog'
      : 'Developer Changelog';

  // タイトル表示（日本語タイトルがあれば優先、なければ英語）
  const displayTitle = defaultAnalysis?.titleJa || entry.title;

  // 複数モデルの分析結果を表示
  let analysisHTML = '';
  let scoreDisplayHTML = '';

  if (modelNames.length === 0) {
    analysisHTML = '<div class="entry-summary">分析中...</div><div class="entry-scores">分析中...</div>';
    scoreDisplayHTML = '<div class="entry-score">スコア: -/20</div>';
  } else if (modelNames.length === 1) {
    // 1モデルのみ: シンプル表示（スコアはヘッダーに固定表示）
    const analysis = analyses[modelNames[0]];
    analysisHTML = createSingleAnalysisHTML(analysis, modelNames[0]);
    scoreDisplayHTML = `<div class="entry-score">スコア: ${totalScore}/20</div>`;
  } else {
    // 複数モデル: タブ表示（スコアもタブ内に移動）
    analysisHTML = createMultiAnalysisHTML(analyses, entry.id);
    scoreDisplayHTML = ''; // スコアはタブ内に表示
  }

  return `
    <div class="entry-card ${scoreClass}" data-entry-id="${entry.id}">
      <div class="entry-header">
        <div class="entry-title">
          <a href="${entry.link}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(displayTitle)}
          </a>
          ${newBadge}
        </div>
        ${scoreDisplayHTML}
      </div>

      <div class="entry-meta">
        <span>📅 公開: ${publishedDate}</span>
        ${collectedDate ? `<span>📥 収集: ${collectedDate}</span>` : ''}
        <span>📍 ${sourceName}</span>
      </div>

      ${analysisHTML}
    </div>
  `;
}

/**
 * 単一モデルの分析結果HTML
 */
function createSingleAnalysisHTML(analysis, modelName) {
  const summary = analysis?.summarizedJa || '分析中...';
  const scores = analysis?.scores;

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

  const modelBadge = modelName ? `<span class="model-badge">${getModelDisplayName(modelName)}</span>` : '';

  return `
    <div class="entry-summary">
      ${modelBadge}
      ${escapeHtml(summary)}
    </div>
    ${scoreItems}
  `;
}

/**
 * 複数モデルの分析結果HTML（タブ形式）
 */
function createMultiAnalysisHTML(analyses, entryId) {
  const modelNames = Object.keys(analyses);

  // タブヘッダー
  const tabs = modelNames
    .map((modelName, index) => {
      const isActive = index === 0 ? 'active' : '';
      return `<button class="model-tab ${isActive}" data-entry="${entryId}" data-model="${modelName}">${getModelDisplayName(modelName)}</button>`;
    })
    .join('');

  // タブコンテンツ
  const contents = modelNames
    .map((modelName, index) => {
      const isActive = index === 0 ? 'active' : '';
      const analysis = analyses[modelName];
      const summary = analysis?.summarizedJa || '分析中...';
      const scores = analysis?.scores;
      const totalScore = analysis?.totalScore ?? 0;

      const scoreItems = scores
        ? `
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
      `
        : '<div>分析中...</div>';

      return `
        <div class="model-content ${isActive}" data-entry="${entryId}" data-model="${modelName}" data-total-score="${totalScore}">
          <div class="model-content-header">
            <div class="entry-score">スコア: ${totalScore}/20</div>
          </div>
          <div class="entry-summary">${escapeHtml(summary)}</div>
          <div class="entry-scores">${scoreItems}</div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="model-tabs">
      ${tabs}
    </div>
    <div class="model-contents">
      ${contents}
    </div>
  `;
}

/**
 * モデル名を表示用に変換
 */
function getModelDisplayName(modelName) {
  const displayNames = {
    'claude-sonnet-4-5': 'Claude 4.5',
    'gemini-2.5-flash': 'Gemini 2.5',
    'gemini-1.5-flash': 'Gemini 1.5',
    'gpt-4o': 'GPT-4o',
  };
  return displayNames[modelName] || modelName;
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
 * 3日以内かチェック（収集日基準）
 */
function isWithin3Days(entry) {
  // collectedAt があればそれを使用、なければ publishedAt を使用
  const dateToCheck = entry.collectedAt || entry.publishedAt;
  const checkDate = new Date(dateToCheck);
  const now = new Date();
  const diffInMs = now - checkDate;
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

// タブクリックのイベントリスナー（イベント委譲）
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('model-tab')) {
    const entryId = e.target.dataset.entry;
    const modelName = e.target.dataset.model;

    // 同じエントリー内のタブとコンテンツを切り替え
    const tabs = document.querySelectorAll(`.model-tab[data-entry="${entryId}"]`);
    const contents = document.querySelectorAll(`.model-content[data-entry="${entryId}"]`);

    tabs.forEach((tab) => tab.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));

    e.target.classList.add('active');
    document
      .querySelector(`.model-content[data-entry="${entryId}"][data-model="${modelName}"]`)
      .classList.add('active');
  }
});
