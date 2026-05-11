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

## 2026年第19週
### 5/4-5/10

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
<div class="stat-number">17</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">4</div>
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
<span class="meta-value">22件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 12件 / Dev 10件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">1つの注文で配送と店舗受取が可能に - 機能プレビュー開始</span><span class="toc-score">17pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">特定のマーケットをターゲットにした割引設定が可能に</span><span class="toc-score">16pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Flow: ShopifyQLを使用した分析データ取得アクションが追加</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">商品バリエーションを商品本体とは独立して公開・非公開にできるように</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">商品バリエーションの公開設定機能</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">在庫調整ワークフローに完全な変更履歴追跡機能を追加</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">新しいPOSエディターで全てのPOS設定を一か所で管理</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">アカウントコンポーネントでマーケティング同意を収集可能に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">ボットとエージェントはWeb Bot Authによる識別が必要に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">特定のマーケットにディスカウントを割り当てる機能</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">アノテーション機能により、ストアイベントの文脈が分析画面に直接表示されるように</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Flow: ワークフローバージョンの編集者、有効化・無効化の履歴を確認可能に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">トラッキングなしのフルフィルメントを配達完了としてマーク可能に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">CI/CDでのアプリデプロイメントが全アプリで利用可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">管理画面インテントで設定項目のサポートが拡大</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">在庫転送webhookに発送元・発送先ロケーションIDが追加、ミューテーションのドキュメントも明確化</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">サブスクリプション契約と請求試行のミューテーションにactorフィールドを追加</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Analyticsのベンチマーク比較機能が5月19日に廃止されます</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">返金ページで商品に割引を適用可能に</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Dev Dashboardで管理画面のWeb Vitalsを監視可能に</span><span class="toc-score">9pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">アプリディスカウント入力の`appliesOnSubscription`のデフォルト値が`true`に変更</span><span class="toc-score">8pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">Shopify Balance 国内電信送金機能</span><span class="toc-score">5pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## 1つの注文で配送と店舗受取が可能に - 機能プレビュー開始

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">17pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■■□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/ship-and-pickup-in-one-order-feature-preview" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify PlusおよびEnterpriseマーチャント向けに、1つの注文内で商品ごとに配送と店舗受取を選択できる新機能がプレビュー公開されました。配送・フルフィルメント情報を扱うアプリは、チェックアウトエラーや計算ミスを防ぐため、機能プレビュー環境でテストし必要な対応を行う必要があります。注文ごとに単一の配送方法を前提としているロジックの見直しが必須です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
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
<span>📅 2026-04-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## 特定のマーケットをターゲットにした割引設定が可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">16pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/target-discounts-to-specific-markets" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Admin GraphQL APIの`DiscountContextInput`に新たに`markets`オプションが追加され、地域市場、実店舗、B2B企業拠点など特定のマーケットに対して割引を設定できるようになりました。すべての割引タイプ（ベーシック、BXGY、アプリ、送料無料）で利用可能ですが、マーケットターゲティングと顧客セグメントの同時指定はできません。API version 2026-07以前では、マーケット対象の割引は表示されないため注意が必要です。

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
<span>📅 2026-05-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## Flow: ShopifyQLを使用した分析データ取得アクションが追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-new-action-to-get-analytics-data-using-shopifyql" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowに新しい「分析データを取得」アクションが追加され、ShopifyQLを使用してワークフロー内で売上、セッション数、在庫レベルなどの分析データを取得できるようになりました。クエリ結果は変数として保存され、後続の条件やアクションで活用可能です。売上が一定の閾値を下回った際のアラート送信や、セッション数の変動通知、売上マイルストーン達成時の商品タグ付けなど、データに基づく自動化が可能になります。

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
<span>📅 2026-05-09</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## 商品バリエーションを商品本体とは独立して公開・非公開にできるように

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/publish-and-unpublish-product-variants-independently-from-product" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

API version 2026-07から、商品バリエーション単位で販売チャネルやカタログごとに公開・非公開を設定できるようになりました。これにより、バリエーションを削除したり商品を複製することなく、特定のチャネルで特定のバリエーションのみを表示する細かな制御が可能になります。既存の商品レベルでの公開機能は変更なく、バリエーションはデフォルトで公開状態となるため、既存アプリへの影響はありません。

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
<span>📅 2026-05-07</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## 商品バリエーションの公開設定機能

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/product-variant-publishing" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

販売チャネルやカタログごとに、商品バリエーション単位で公開・非公開を設定できる機能がリリースされました。バリエーションを削除したり商品を複製することなく、チャネルごとに表示する在庫を細かくコントロールできるようになり、地域限定商品やB2B専用バリエーション、発売前の新商品準備などに活用できます。商品詳細ページ、バリエーション詳細ページ、または一括編集画面から個別に設定可能です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-07</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## 在庫調整ワークフローに完全な変更履歴追跡機能を追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/inventory-adjustment-workflow-now-with-full-change-tracking" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

管理画面での在庫調整時に、「数量を設定」と「数量を調整」の2つのモードが利用可能になりました。すべての調整で、調整元・調整先・実行者・実行日時が自動記録され、完全な調整履歴をいつでも確認できるようになります。一括編集機能は従来通り、調整元・調整先の指定なしで利用可能です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-07</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #7

## 新しいPOSエディターで全てのPOS設定を一か所で管理

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/manage-all-your-pos-settings-in-one-place-with-the-new-pos-editor" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify POSの設定画面が刷新され、決済、レシート、チップ、顧客情報、アプリなどの設定が単一のエディター内で管理できるようになりました。オンラインストアエディターと同様の分割パネルナビゲーションを採用し、設定ページ間の移動が不要になり、より直感的で効率的な設定が可能になります。自動的にロールアウトされ、既存の権限設定はそのまま適用されます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-04-30</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #8

## アカウントコンポーネントでマーケティング同意を収集可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/collect-marketing-consent-on-the-account-component" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ストアフロントのアカウントコンポーネントに、メールマーケティングのオプトインチェックボックスが追加されました。顧客がサインイン時にチェックを入れると、自動的にメールマーケティングの購読者リストに追加されます。この設定は管理画面の「設定」>「チェックアウト」>「マーケティングオプトイン」から有効化・変更が可能です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
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
<span>📅 2026-05-08</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #9

## ボットとエージェントはWeb Bot Authによる識別が必要に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/bots-and-agents-should-identify-themselves-via-web-bot-auth" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopifyは、Storefront APIやオンラインストアにアクセスするボットやエージェントに対して、より厳格なレート制限を適用するようになりました。Web Bot Authでリクエストに署名していないボット・エージェントには最も厳しい制限が適用され、より高いレート制限を受けるにはWeb Bot Authによる署名が必要です。マーチャントが自身のストアをクロールする場合は、Shopify管理画面ですぐに使えるWeb Bot Auth署名が提供されています。

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
<span>📅 2026-05-07</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #10

## 特定のマーケットにディスカウントを割り当てる機能

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/assign-discounts-to-specific-markets" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ディスカウント（割引）を特定のマーケットに割り当てて、適用範囲を正確にコントロールできるようになりました。オンライン限定のフラッシュセールや、B2Bバイヤー専用の卸売オファーなどを、回避策なしで簡単に作成できます。Basicプラン以上で新バージョンのMarketsを利用しているマーチャントが対象です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
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
<span>📅 2026-05-07</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #11

## アノテーション機能により、ストアイベントの文脈が分析画面に直接表示されるように

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/annotations-bring-store-event-context-directly-to-your-analytics" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopifyのレポート画面で、データの変動とストアイベント（商品公開、テーマ変更、アプリインストールなど）を紐付けて表示する「アノテーション機能」が追加されました。チャート上にカラーマーカーで表示され、コンバージョン率の変化などの原因を視覚的に把握できます。設定不要で自動的に生成され、レポートの可視化パネルから「Show annotations」をオンにするだけで利用できます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
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
<span>📅 2026-05-05</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #12

## Flow: ワークフローバージョンの編集者、有効化・無効化の履歴を確認可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-see-exactly-what-changed-in-any-workflow-and-roll-it-back" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowの全ワークフローにバージョン履歴機能が追加されました。編集、有効化、無効化の操作が、実行したスタッフメンバーとタイムスタンプと共に記録されるようになり、問題発生時に誰がいつ変更したかを確認できます。Flowアプリにアクセス権のあるスタッフメンバーは誰でも履歴を閲覧し、過去のバージョンを参照できます。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-05</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #13

## トラッキングなしのフルフィルメントを配達完了としてマーク可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/mark-fulfillments-without-tracking-as-delivered" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify管理画面で、配送業者のトラッキング情報がないフルフィルメントを「配達完了」としてマークできる機能が追加されました。サポートされていない配送業者を使用するマーチャントが、注文の配達ステータスを正確に保つことができます。個別注文のフルフィルメントカードから、または注文ページから複数の注文を一括で配達完了にすることが可能です。

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
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-03</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #14

## CI/CDでのアプリデプロイメントが全アプリで利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/app-deployment-in-cicd-is-now-available-for-all-apps" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

開発ダッシュボードで生成できるアプリ自動化トークンを使用して、GitHub Workflowなどの自動化ツールでアプリのデプロイメントが可能になりました。アプリごとに認証トークンが発行されるため、セキュリティと管理が強化されます。パートナーダッシュボードで生成された既存のCLIトークンは有効期限まで使用できますが、新しいアプリ自動化トークンへの移行が推奨されています。

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
<span>📅 2026-05-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #15

## 管理画面インテントで設定項目のサポートが拡大

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/more-admin-intents-now-support-settings" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

アプリから管理画面の設定ページを直接開けるadmin intentsに、7つの新しい設定項目が追加されました。通知、支払い、ギフトカード、配送プロファイル、ビジネス詳細の各設定に、1回のAPI呼び出しでマーチャントを該当箇所まで誘導できるようになります。これにより、アプリ開発者はよりスムーズなユーザー体験を提供できます。

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
<span>📅 2026-05-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #16

## 在庫転送webhookに発送元・発送先ロケーションIDが追加、ミューテーションのドキュメントも明確化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/inventory-transfer-webhooks-include-origin-and-destination-location-ids-and-mutation-documentation-clarified" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

在庫転送関連のwebhookペイロードに発送元・発送先ロケーションのGlobal IDが追加され、追加のAPI呼び出しなしでロケーション情報を取得できるようになりました。また、inventoryTransferSetItemsとinventoryTransferRemoveItemsのドキュメントが実際の挙動に合わせて明確化され、エラーメッセージもより分かりやすくなりました。動作自体に変更はありませんが、在庫管理機能を実装している開発者にとって有用な改善です。

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
<span>📅 2026-05-05</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #17

## サブスクリプション契約と請求試行のミューテーションにactorフィールドを追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/add-actor-field-to-subscription-contract-and-billing-attempt-mutations" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

サブスクリプション関連のGraphQL APIミューテーションに、アクションの実行者（顧客、マーチャント、パートナーアプリの自動システム）を追跡するための新しい`actor`フィールドが追加されました。このフィールドは請求試行の作成、契約の編集、ステータス更新など、サブスクリプション関連のすべての主要なミューテーションで利用可能です。これにより、誰がどのようなアクションを実行したかを明確に追跡できるようになります。

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
<span>📅 2026-05-01</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## Analyticsのベンチマーク比較機能が5月19日に廃止されます

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/benchmark-comparisons-in-analytics-will-be-removed-on-may-19th" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Analyticsのベンチマーク比較機能は、2026年5月19日に完全に廃止されます。代替手段として、レポート内で独自のパフォーマンス目標を設定できる「指標ターゲット」機能、またはストアのパフォーマンスに関するパーソナライズされたガイダンスを提供するSidekickの活用が推奨されています。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-07</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## 返金ページで商品に割引を適用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/apply-discounts-to-items-on-the-refund-page" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

返金処理時に、返金ページから直接商品に割引を追加・更新・削除できるようになりました。これまでは注文編集ページに移動する必要がありましたが、その手間が省かれ、返金額に割引を反映させることで売上・税務レポートの正確性も確保できます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-04</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## Dev Dashboardで管理画面のWeb Vitalsを監視可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">9pt</div>
<div class="score-bar">■■■■■■■■■□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/monitor-admin-web-vitals-in-the-dev-dashboard" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

アプリの管理画面のパフォーマンスデータが、Partner DashboardからDev Dashboardに移動しました。LCP、INP、CLSの3つのCore Web Vitalsを1箇所で確認できるようになり、Built for Shopifyの評価基準との整合性も確保されています。コード変更は不要で、既存のブックマークは自動的にリダイレクトされます。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-04</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #4

## アプリディスカウント入力の`appliesOnSubscription`のデフォルト値が`true`に変更

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">8pt</div>
<div class="score-bar">■■■■■■■■□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/default-value-of-appliesonsubscription-changed-to-true-for-app-discount-inputs" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin APIの`DiscountCodeAppInput`と`DiscountAutomaticAppInput`において、`appliesOnSubscription`のデフォルト値が`false`から`true`に変更されました。この変更はチェックアウト時のディスカウント適用には影響せず、アプリで明示的に値を設定している場合は動作に変更はありません。すべてのアクティブなAPIバージョンに適用されます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-05-04</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## Shopify Balance 国内電信送金機能

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">5pt</div>
<div class="score-bar">■■■■■□□□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/shopify-balance-domestic-wire-transfers" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

米国のマーチャント向けに、Shopify Balanceから国内電信送金を行える機能が追加されました。サプライヤーや契約業者、ベンダーへの支払いをより効率的かつ安全に管理できるようになります。この機能は米国内の電信送金に対応しています。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-04-29</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第19週（5/4-5/10）

全 **22件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>