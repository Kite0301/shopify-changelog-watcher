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

## 2026年第13週
### 3/23-3/29

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
<div class="stat-number">12</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">1</div>
<div class="stat-label">重要<span class="stat-range">8-11pt</span></div>
</div>
<div class="stat-item low">
<div class="stat-number">2</div>
<div class="stat-label">通常<span class="stat-range">8pt未満</span></div>
</div>
</div>

<div class="summary-meta">
<div class="meta-item">
<span class="meta-label">総更新数</span>
<span class="meta-value">15件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 10件 / Dev 5件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">配送オプション設定機能のアップデート</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">SimGymでオンラインストアテーマの詳細分析が可能に</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Flow: ワークフロー実行、カゴ落ち、在庫アイテム、カタログ、ページのデータ取得アクションを追加</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">顧客サインインページでマーケティング同意を収集可能に</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">外部IDプロバイダーから顧客データを自動同期</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Shopアプリの商品詳細ページをブロックでカスタマイズ可能に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Flow: Shopify Admin APIのより多くのフィールドが利用可能に</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">在庫出荷APIへのバーコードサポート追加</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">テーマエディターのナビゲーションが刷新</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Shopify CLIアプリリリースの`--force`フラグが非推奨となり削除予定</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">最近の注文がある顧客データ削除リクエストの処理方法の更新</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">InventoryLevelに`isActive`フィールドを追加</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">クイックセール機能が全ての国で利用可能に</span><span class="toc-score">10pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">配送設定ページが見やすく改善されました</span><span class="toc-score">7pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">Order REST Admin APIからpre_tax_priceフィールドの削除</span><span class="toc-score">7pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## 配送オプション設定機能のアップデート

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/updates-to-setting-up-shipping-options" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

配送オプション（旧称：配送料金）の設定がよりシンプルになり、各オプションに配送日数や説明文を個別に設定できるようになりました。重量や価格の範囲条件を1つの配送オプションで設定でき、最低注文金額を設定することで送料無料を自動適用できるようになります。チェックアウト時に顧客へより詳細な配送情報を提供できるため、購入体験の向上が期待できます。

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
<span>📅 2026-03-26</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## SimGymでオンラインストアテーマの詳細分析が可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/run-a-deep-analysis-on-your-online-store-theme-with-simgym" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

SimGymアプリで単一テーマの詳細分析が可能になりました。AI顧客が実際の顧客のようにストアを閲覧し、ホームページ、商品ページ、コレクションページ、カートなど特定エリアに焦点を当てた分析を実施できます。一般的なアドバイスではなく、ストア固有の改善点と具体的なアクションステップが提示されます。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-26</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## Flow: ワークフロー実行、カゴ落ち、在庫アイテム、カタログ、ページのデータ取得アクションを追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-workflow-runs-abandoned-checkouts-inventory-items-catalogs-and-pages" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowに5つの新しい「データ取得」アクションが追加されました。ワークフロー実行履歴、カゴ落ちチェックアウト、在庫アイテム、ページ情報を取得し、最大100件のデータをワークフローで活用できます。これにより、売上回復キャンペーン、在庫監視、コンテンツ監査などの自動化ワークフローの構築が可能になります。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-24</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## 顧客サインインページでマーケティング同意を収集可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/collect-marketing-consent-on-the-customer-sign-in-page" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

顧客がアカウントにサインインする際に、マーケティング配信への同意を収集できるようになりました。チェックアウト時にマーケティング同意を有効にしている場合、同じ設定がサインインページにも適用され、顧客は後からアカウントプロフィールページで配信設定を変更できます。この機能により、カスタマージャーニーの早い段階で質の高いメールマーケティングの購読者を獲得できます。

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
<span>📅 2026-03-23</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## 外部IDプロバイダーから顧客データを自動同期

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/enrich-customer-records-with-data-from-external-identity-providers" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

独自のIDプロバイダーを使用しているPlusマーチャント向けに、顧客がサインインした際に顧客情報（氏名、メールアドレス、電話番号、住所、タグ）をShopifyの顧客レコードに自動同期する機能が追加されました。これにより、手動でのデータ入力やカスタムWebhook/API連携が不要になり、顧客情報を常に最新の状態に保つことができます。Plusプラン限定の機能です。

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
<span>📅 2026-03-17</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## Shopアプリの商品詳細ページをブロックでカスタマイズ可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/customize-your-product-detail-pages-on-shop-with-blocks" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopエディターにブロック機能が追加され、商品詳細ページに画像、動画、スライドショー、関連商品、ショッパブル動画など5種類のブロックを最大2つまで追加できるようになりました。商品テンプレートを使って特定の商品にカスタマイズを適用でき、ShopアプリとWeb版の両方に反映されます。オンラインストアと同様のブランディングと商品訴求が可能になります。

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
<span>📅 2026-03-25</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #7

## Flow: Shopify Admin APIのより多くのフィールドが利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-more-of-shopify-s-admin-api-is-now-a-native-action" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowで、Admin APIのほぼすべてのフィールドがネイティブに利用可能になりました。これには引数が必要な`product.inCollection`などのフィールドも含まれます。従来は「HTTPリクエストを送信」アクションを手動で構築する必要がありましたが、ネイティブサポートによりAPI変更時の管理がFlowによって自動化されます。

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
<span>📅 2026-03-24</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #8

## 在庫出荷APIへのバーコードサポート追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/adding-barcode-support-to-inventory-shipments-api" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026-04バージョンから在庫出荷APIにバーコード機能が追加され、出荷にバーコードを割り当てることで入荷作業を高速化できるようになります。InventoryShipmentオブジェクトにbarcodeフィールドが追加され、inventoryShipmentCreateミューテーションでのバーコード指定や、新しいinventoryShipmentSetBarcodeミューテーションでの既存出荷へのバーコード設定が可能になります。バーコードはショップ内で一意である必要があり、最大255文字まで対応します。

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
<span>📅 2026-03-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #9

## テーマエディターのナビゲーションが刷新

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/redesigned-theme-editor-navigation" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

テーマエディターのレイアウトが刷新され、左側のナビゲーションが上部バーに移動したことで、ストアフロントの編集画面が広く表示されるようになりました。右サイドバーの折りたたみが可能になり、ノートPCなどの小さな画面では設定パネルが画面下部からスライド表示されるようになり、ページ構造と設定を同時に確認できるようになりました。これによりパネル管理の時間が削減され、ストアデザインに集中できるようになります。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-25</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #10

## Shopify CLIアプリリリースの`--force`フラグが非推奨となり削除予定

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/the-shopify-cli-app-release-force-flag-is-deprecated-and-will-be-removed" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify CLIの`shopify app deploy`および`shopify app release`コマンドの`--force`フラグが非推奨となり、2026年5月に削除されます。CI/CD環境でアプリリリースを自動化している場合は、より安全な`--allow-updates`フラグへの移行が必要です。`--force`は拡張機能の削除による永久的なデータ損失のリスクがあるため、より細かい制御が可能な新しいフラグの使用が推奨されます。

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
<span>📅 2026-03-25</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #11

## 最近の注文がある顧客データ削除リクエストの処理方法の更新

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/updated-handling-of-customer-data-erasure-requests-with-recent-orders" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年3月23日より、顧客データ削除リクエストの処理方法が変更されました。これまで最新の注文から180日間保留されていたリクエストが、リクエスト送信から10日後に処理されるようになります。この変更により、個人情報保護法に基づく顧客データリクエストの管理がシンプルになります。

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
<span>📅 2026-03-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #12

## InventoryLevelに`isActive`フィールドを追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/add-isactive-field-to-inventorylevel" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin API バージョン2026-04から、InventoryLevelオブジェクトに在庫レベルのアクティブ状態を示す`isActive`フィールドが追加されました。これまで非アクティブ化すると在庫数がクリアされていましたが、今後は数量が保持され、非アクティブな在庫レベルもAPIで取得可能になります。既存のクエリは引き続きアクティブな在庫のみを返すため、デフォルトでは影響ありませんが、非アクティブな在庫を含める場合は`isActive`フィールドでフィルタリングする必要があります。

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
<span>📅 2026-03-17</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## クイックセール機能が全ての国で利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/quick-sale-is-now-available-in-every-country" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

クイックセール機能が、Shopifyが展開する全ての国で利用可能になりました。Shopifyモバイルアプリでカートを作成し、商品を追加して、現金での支払いやリンク送信による決済が可能です。Tap to Pay対応地域では、カード決済も対面で受け付けられます。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-23</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## 配送設定ページが見やすく改善されました

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">7pt</div>
<div class="score-bar">■■■■■■■□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/shipping-and-delivery-settings-are-now-easier-to-scan" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify管理画面の配送設定ページのデザインが刷新され、より見やすく使いやすくなりました。配送方法ごとにグループ化され、プロフィール情報が3カラムレイアウトで表示されるようになり、すべてのプロフィールが1つのリストに統合されました。設定フローや機能自体に変更はなく、UIの改善のみが行われています。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-24</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #2

## Order REST Admin APIからpre_tax_priceフィールドの削除

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">7pt</div>
<div class="score-bar">■■■■■■■□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/removal-of-pretaxprice-from-the-order-rest-admin-api" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

REST Admin APIのorder line itemsから`pre_tax_price`と`pre_tax_price_set`フィールドが削除されます。これらのフィールドは2025年4月に非推奨となったAvalara AvaTax 1.0統合でのみ利用可能でした。注文明細の価格データにアクセスする場合は、GraphQL Admin APIの使用を推奨します。

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
<span class="score-inline-value">1/5</span>
<div class="mini-bar">●○○○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-03-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第13週（3/23-3/29）

全 **15件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>