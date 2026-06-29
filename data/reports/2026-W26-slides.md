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

## 2026年第26週
### 6/22-6/28

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
<div class="stat-number">7</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">4</div>
<div class="stat-label">重要<span class="stat-range">8-11pt</span></div>
</div>
<div class="stat-item low">
<div class="stat-number">0</div>
<div class="stat-label">通常<span class="stat-range">8pt未満</span></div>
</div>
</div>

<div class="summary-meta">
<div class="meta-item">
<span class="meta-label">総更新数</span>
<span class="meta-value">11件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 6件 / Dev 5件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">新しいコレクションモデルとAPIが利用可能に</span><span class="toc-score">16pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">配送業者サービスがデフォルトの配送プロファイルに自動追加されなくなります</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">発注書から在庫転送が自動作成されるように</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">B2Bディスカウントが新規B2Bストアおよび対象の既存ストアでデフォルト有効化</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Storefront MCP のカートツールが非推奨化され、UCP Cart MCP への移行が必要に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">GraphQL Admin API 2026-10で`DraftOrderDiscountNotAppliedWarning.priceRule`フィールドが削除されます</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">POSのスタッフ帰属機能の改善</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">ShopifyがEU輸入関税€3の徴収に対応開始</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">下書き注文のカスタム行項目割引が提示通貨を使用するように改善</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">チェックアウトのメールフィールド:新しい保存インジケーターとツールチップ</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">OrderオブジェクトにcheckoutTokenフィールドが追加されました</span><span class="toc-score">9pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## 新しいコレクションモデルとAPIが利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">16pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/new-collection-model-and-apis-now-available" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026-07 APIバージョンにて、コレクションの定義方法が単一のruleSetから複数のソースを持つマルチソースモデルに刷新されました。これにより、除外条件、バリアントレベルのコレクション、再利用可能なアプリソースなど、より柔軟なコレクション管理が可能になります。旧バージョンのAPIでは新機能を使ったコレクションが表示されないため、すべてのコレクションを管理するには2026-07への移行が必要です。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">パートナー影響度</span>
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">日本市場関連性</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-06-17</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## 配送業者サービスがデフォルトの配送プロファイルに自動追加されなくなります

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/carrier-services-will-no-longer-be-automatically-added-to-the-default-shipping-profile" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026-10バージョンのGraphQL Admin APIより、配送業者サービス(Carrier Service)の作成時に、一般配送プロファイルへの自動追加が行われなくなります。この破壊的変更により、配送業者サービス作成後は、マーチャント自身が管理画面で手動追加するか、APIを使用してプログラム的に配送プロファイルへ追加する必要があります。対応しない場合、新規作成した配送業者サービスの料金がチェックアウト時に表示されません。

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
<span>📅 2026-06-26</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## 発注書から在庫転送が自動作成されるように

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

発注書(Purchase Order)を受領する際に、在庫転送(Transfer)が自動的に作成されるようになりました。これにより、管理画面またはPOSのどちらからでも入荷処理が可能になり、複数回に分かれた納品の追跡、発注内容と入荷実績の紐付け、CSV一括インポート、過去の仕入価格の自動入力などの機能が利用できるようになります。在庫管理業務の効率化と正確性の向上が期待できます。

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
<span>📅 2026-06-22</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## B2Bディスカウントが新規B2Bストアおよび対象の既存ストアでデフォルト有効化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

これまでB2B向けディスカウント機能を有効化するにはサポートへの連絡が必要でしたが、新規B2Bストアではデフォルトで有効化され、アクティブなディスカウントのない既存B2Bストアでも自動的に有効化されるようになりました。ディスカウントの適用対象をB2B顧客と非B2B顧客で分けて管理する場合は、適格性設定でマーケットを指定する必要があります。既存のディスカウントは特定のマーケットを指定しない限り、B2Bと非B2Bの両方の顧客に適用されます。

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
<span>📅 2026-06-23</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## Storefront MCP のカートツールが非推奨化され、UCP Cart MCP への移行が必要に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/storefront-mcp-cart-tools-are-being-deprecated-in-favour-of-ucp-cart-mcp" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Storefront MCP サーバーの `get_cart` と `update_cart` ツールが非推奨となり、UCP に準拠した Cart MCP ツールへの移行が必要になります。新しいエンドポイント（`https://{shop-domain}/api/ucp/mcp`）では、`create_cart`、`get_cart`、`update_cart`、`cancel_cart` の4つのツールが提供されます。非推奨ツールは2026年8月31日まで維持されますが、早急な移行対応が推奨されます。

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
<span>📅 2026-06-24</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## GraphQL Admin API 2026-10で`DraftOrderDiscountNotAppliedWarning.priceRule`フィールドが削除されます

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/remove-pricerule-from-draft-order-discount-warning" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin API バージョン2026-10から、`DraftOrderDiscountNotAppliedWarning`オブジェクトの非推奨だった`priceRule`フィールドが削除されます。このフィールドを使用しているアプリは、代わりに`discountTitle`と`discountCode`フィールドを使用するようクエリを更新する必要があります。この変更により、レガシーな`PriceRule`オブジェクトも公開スキーマから完全に削除されます。

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
<span>📅 2026-06-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #7

## POSのスタッフ帰属機能の改善

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/staff-attribution-improvements-in-pos" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify POSのスタッフ帰属機能が改善され、7月6日以降、ログイン中のスタッフに自動的に売上が帰属されるようになります。スタッフピッカーのUIが刷新され、手動での帰属作業が高速化されたほか、POS Analyticsに新しいスタッフ帰属レポートが追加され、コミッションや業績管理がより簡単になります。設定は未カスタマイズの店舗で自動的に有効化されますが、既存の設定には影響しません。

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
<span>📅 2026-06-22</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## ShopifyがEU輸入関税€3の徴収に対応開始

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/new-3-eu-import-customs-duty-arrives-july-1" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年7月1日より、EU域外からEU域内への€150以下の注文に対して、関税分類ライン毎に€3の定額関税が適用されます。Shopify Managed MarketsおよびShopifyの輸入税・関税計算機能では、この関税が自動的に計算・表示・徴収されるため、設定変更は不要です。日本からEU顧客に発送するマーチャントに影響があります。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-06-26</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## 下書き注文のカスタム行項目割引が提示通貨を使用するように改善

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/improvement-to-draft-order-custom-discount-currency" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

下書き注文の行項目に追加されるカスタム割引が、ショップのデフォルト通貨ではなく、注文の提示通貨（顧客が見る通貨）で表示されるようになりました。これにより、ショップのデフォルト通貨と異なる通貨でチェックアウトする顧客に対して、割引金額がより分かりやすくなります。多通貨対応を行っているストアでの下書き注文作成時のユーザビリティが向上します。

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
<span>📅 2026-06-24</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## チェックアウトのメールフィールド:新しい保存インジケーターとツールチップ

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/checkout-email-field-new-saved-indicator-and-tooltip" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

チェックアウト画面のメールアドレス入力欄に、新しい保存インジケーターとツールチップが追加されました。購入者がメールアドレスを入力すると、注文確認やカート保存リマインダーに使用される旨を説明するツールチップが表示され、入力後には「saved」ラベルが表示されます。これにより購入者は情報が保存されたことを視覚的に確認でき、信頼感の向上につながります。

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
<span>📅 2026-06-22</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #4

## OrderオブジェクトにcheckoutTokenフィールドが追加されました

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">9pt</div>
<div class="score-bar">■■■■■■■■■□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/new-checkouttoken-field-added-to-the-order-object" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin APIのOrderオブジェクトに、新しくcheckoutTokenフィールドが追加されました。このフィールドは注文作成時に使用されたチェックアウトに関連するトークンを返すもので、REST Admin APIの既存のcheckout_tokenフィールドと同じ値を取得できます。GraphQL APIとREST APIの機能の整合性が向上しました。

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
<span>📅 2026-05-15</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第26週（6/22-6/28）

全 **11件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>