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

## 2026年第3週
### 1/12-1/18

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
<div class="stat-number">6</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">3</div>
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
<span class="meta-value">10件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 5件 / Dev 5件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">マーケティングピクセルのデータ共有に関する新しいデフォルト設定</span><span class="toc-score">16pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">テーマおよびテーマアプリ拡張機能におけるLiquidパースの厳格化</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Hydrogenにおけるshopify_yおよびshopify_sクッキーの廃止</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">FlowがGraphQL Admin APIのバージョン2026-01を採用</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">カテゴリー別の返品理由で詳細なインサイトを取得</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">ReturnオブジェクトでのTransaction（取引）データへのアクセス</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Shop Minisの開発にパートナーアカウントの権限が必須に</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">アセットURLバージョンパラメータの標準化</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">ShopifyのLiquidコード処理方法のアップデート</span><span class="toc-score">10pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">Shopify Capitalがスペインで開始</span><span class="toc-score">4pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## マーケティングピクセルのデータ共有に関する新しいデフォルト設定

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">16pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/new-default-setting-for-pixel-data-sharing" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopifyはマーケティングピクセルのデータ共有を自動最適化する新しいデフォルト設定を導入します。トラフィックや売上などの指標をもとに、成果が出ているツールにのみデータを共有し、成果が見られないピクセルへのデータ共有は一時停止されます。この設定はすべてのアクティブなピクセルで即座に有効化されますが、実際の制限は最低7日後から開始され、管理画面の「設定 > カスタマーイベント」から常時データ共有する設定に変更することも可能です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-13</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## テーマおよびテーマアプリ拡張機能におけるLiquidパースの厳格化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/liquid-is-getting-faster-and-ready-to-evolve" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年1月13日より、Shopifyは全テーマに対してより厳格なLiquidパースを適用します。厳格な要件を満たさないコードは自動的に書き換えられ、変更内容はコメントで説明されます。新規テーマやテーマアプリ拡張機能の提出時には既にこの厳格な基準が適用されており、コード品質の向上とシンタックスエラーの防止を目的としています。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-13</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## Hydrogenにおけるshopify_yおよびshopify_sクッキーの廃止

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/tracking-cookie-deprecation-hydrogen" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopifyは2026年に`shopify_y`と`shopify_s`クッキーの設定を停止します。Hydrogenストアフロントを利用している場合、2026年4月30日までにアップグレードしないと、Shopify Analyticsでの訪問者およびセッションのアトリビューションが正確に機能しなくなります。Hydrogen CLI upgrade コマンドの実行、またはその他のセットアップの場合は開発者ドキュメントの手順に従って対応が必要です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
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
<span>📅 2026-01-17</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## FlowがGraphQL Admin APIのバージョン2026-01を採用

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-adopts-version-2026-01-of-the-graphql-admin-api" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowが最新のGraphQL Admin APIバージョン2026-01に対応し、自動化機能の構築オプションが拡張されました。主な変更点として、メタフィールドとメタオブジェクトの高度なクエリ機能、Returnオブジェクトでのトランザクションデータへのアクセス、より詳細な返品理由の定義、注文更新時の電話番号フィールドの追加などが含まれます。FlowでAdmin APIリクエストアクションを利用している場合、これらの新機能を活用できるようになります。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
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
<span>📅 2026-01-15</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## カテゴリー別の返品理由で詳細なインサイトを取得

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/enhanced-return-reasons" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

返品処理時に商品カテゴリーに応じた具体的な返品理由が自動表示されるようになりました。アパレルなら「大きすぎる」「小さすぎる」、食品なら「味」など、Shopifyの標準商品分類に基づいた理由が管理画面、POS、セルフサービス返品で利用できます。より詳細で一貫性のあるデータにより、サイズ問題や品質課題への対応が迅速化し、返品削減や商品開発に活用できます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-16</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## ReturnオブジェクトでのTransaction（取引）データへのアクセス

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/access-transactions-on-the-return-object" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Admin GraphQL APIのReturnオブジェクトから直接トランザクションデータにアクセスできるようになりました。新しいtransactionsコネクションにより、返品・交換に関連する支払いや返金の情報を明確に取得でき、金額やタイムスタンプから関係性を推測する必要がなくなります。POSでの返品・交換では返金と支払いの両方、オンラインでの返品・交換では返金のみが含まれます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-01</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## Shop Minisの開発にパートナーアカウントの権限が必須に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/shop-minis-development-now-requires-partner-account-permissions" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shop Minis CLIの利用には、パートナーアカウントで「アプリを管理」権限が必要になりました。この変更により、新しいMiniのセットアップや申請などのCLI操作を行うには、組織のオーナーまたは管理者から該当権限を付与してもらう必要があります。Shop Minisを開発する開発者は、パートナーダッシュボードで権限設定を確認・更新する必要があります。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-17</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## アセットURLバージョンパラメータの標準化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/standardization-of-asset-url-version-parameters" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

CSSやJavaScriptなどのストアアセットのバージョン管理用クエリパラメータの形式が統一されます。従来の`?108`のような数値のみの形式から、すべて`?v=108`のようなキー・バリュー形式に変更されます。ほとんどのテーマは標準のLiquidフィルターを使用していれば自動的に対応されますが、カスタムコードやアプリで旧形式を前提とした正規表現やロジックがある場合は更新が必要です。

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
<span>📅 2026-01-12</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## ShopifyのLiquidコード処理方法のアップデート

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/storefronts-are-getting-faster-and-ready-to-evolve" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年1月13日より、Shopifyがテーマファイル内のLiquidコードの処理方法を自動的に更新します。ストアの見た目や機能、パフォーマンスは変わらず、マーチャント側での対応は不要です。テーマファイルを編集する際に、更新内容を説明する小さなコメントが追加される場合がありますが、情報提供のみを目的としています。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
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
<span>📅 2026-01-13</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## Shopify Capitalがスペインで開始

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">4pt</div>
<div class="score-bar">■■■■□□□□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/shopify-capital-launches-in-spain" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

スペインのマーチャントがShopify管理画面から直接資金調達にアクセスできるようになりました。簡素化された申請プロセスと、ビジネスのキャッシュフローに合わせた柔軟な返済条件が提供されます。この機能は現時点ではスペイン限定で、日本での提供はありません。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
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
<span>📅 2025-12-19</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第3週（1/12-1/18）

全 **10件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>