---
marp: true
theme: shopify-changelog
paginate: true
header: 'Shopify Changelog 週次レポート'
footer: '[Kite0301/shopify-changelog-watcher](https://github.com/Kite0301/shopify-changelog-watcher)'
---

<!-- _class: title -->
<!-- _header: "" -->
<!-- _footer: "" -->

# Shopify Changelog 週次レポート

## 2026年第22週
### 5/25-5/31

---

<!-- _class: about -->

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
</div>

---

<!-- _class: summary -->

# 📊 今週の更新

<div class="summary-container">

<div class="summary-left">

<div class="summary-stats">
<div class="stat-item high">
<div class="stat-number">1</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">1</div>
<div class="stat-label">重要<span class="stat-range">8-11pt</span></div>
</div>
<div class="stat-item low">
<div class="stat-number">1</div>
<div class="stat-label">通常<span class="stat-range">8pt未満</span></div>
</div>
</div>

<div class="summary-meta">
<div class="meta-item">
<span class="meta-label">総更新数</span>
<span class="meta-value">3件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 1件 / Dev 2件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">App HomeをUIエクステンションとして構築可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">/llms.txt、/llms-full.txt、/agents.mdのカスタマイズが可能に</span><span class="toc-score">11pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">Shopify Paymentsの支払い残高とリザーブ情報の表示改善</span><span class="toc-score">5pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## App HomeをUIエクステンションとして構築可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/build-app-home-as-a-ui-extension" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026-07 APIバージョンより、App HomeをPreactベースのAdmin UIエクステンションとして構築できるようになりました。これにより別途Webサーバーを用意することなく、他のAdmin UIエクステンションと一緒にバンドルしてアプリのホーム画面を作成できます。この機能はカスタム配布アプリ向けで、公開アプリではこれまで通りiFrameベースのApp Homeを使用する必要があります。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-21</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## /llms.txt、/llms-full.txt、/agents.mdのカスタマイズが可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/customize-llmstxt-llms-fulltxt-and-agentsmd" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ストアにデフォルトで含まれる`agents.md`ファイル（`/agents.md`、`/llms.txt`、`/llms-full.txt`でアクセス可能）を、テーマのテンプレートファイルとしてカスタマイズできるようになりました。テーマエディタで各パス用のLiquidテンプレートを追加することで、パスごとに異なるコンテンツを配信できます。テンプレートが存在しない場合は、agents.mdテンプレート、次にShopifyのデフォルトにフォールバックします。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-28</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## Shopify Paymentsの支払い残高とリザーブ情報の表示改善

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">5pt</div>
<div class="score-bar">■■■■■□□□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/clearer-payout-balance-and-reserve-information-in-shopify-payments" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Paymentsの支払いページにおいて、用語と説明が改善されました。「支払い予定額」が「支払い残高」に変更され、Finance全体で統一された用語が使用されるようになりました。また、支払い残高の計算方法（決済額からrefund、dispute、手数料を差し引いた額）やリザーブ資金の説明が追加されましたが、支払いタイミングや金額自体に変更はありません。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-23</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第22週（5/25-5/31）

全 **3件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>