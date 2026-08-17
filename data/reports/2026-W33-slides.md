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

## 2026年第33週
### 8/10-8/16

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
<span class="meta-value">Shopify 7件 / Dev 3件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">印刷レシートエディターの機能強化</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">SubscriptionContractCalculation API がアーリーアクセスで利用可能に</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Managed MarketsがDDU（関税元払い）のサポートを終了</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">分析ツールでShopキャンペーンのパフォーマンスを確認可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Shop CampaignsのパフォーマンスデータがShopifyQL経由で取得可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">下書き注文と転送/出荷の在庫が予約済みからコミット済みへ移行</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Managed Markets加盟店向けにCPSC eFiling項目が利用可能に</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">チェックアウトフィールド設定の推奨変更が利用可能に</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Shopify Managed Marketsがカナダとイギリスで利用可能に</span><span class="toc-score">8pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">DHL Expressが英国、ドイツ、フランス、イタリア、スペインで利用可能に</span><span class="toc-score">7pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## 印刷レシートエディターの機能強化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/enhanced-printed-receipt-editor" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify POSの印刷レシート機能が刷新され、販売・返品・交換・ギフト・ギフトカードのすべてのレシートを1つのエディターで管理できるようになりました。新しいコンテンツエディターでは、ブランディング、返品ポリシー、税番号（VAT、GST/QST、ABN）などの組み込みフィールドが利用でき、リアルタイムプレビュー機能も搭載されています。現在Liquidテンプレートをカスタマイズしているストアは2027年1月1日までに新エディターへの移行が必要で、この切り替えは不可逆的となります。

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
<span>📅 2026-08-11</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## SubscriptionContractCalculation API がアーリーアクセスで利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/subscription-contract-calculation-api-now-available-in-early-access" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

サブスクリプション契約の作成・更新のための新しいAPI「SubscriptionContractCalculation」が2026-10バージョンでアーリーアクセス開始。従来の12以上のステップが必要だったSubscriptionDraftワークフローを、計算→ポーリング→コミットの3ステップに簡素化し、Shopifyの統合チェックアウトエンジンを使用することで、バンドル商品対応やFunctions機能との連携が可能になります。既存のSubscriptionDraftオブジェクトは非推奨となるため、サブスクリプション管理アプリを開発しているパートナーは移行が必要です。

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
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-07-27</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## Managed MarketsがDDU（関税元払い）のサポートを終了

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/managed-markets-is-ending-delivered-duty-unpaid-ddu-support" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年8月24日より、Shopify Managed MarketsはDDP（関税込み配送）をサポートする全ての国・地域でDDU（関税受取人払い）のサポートを終了します。DDUを使用している市場は自動的にDDPに移行され、顧客は配送時ではなくチェックアウト時に関税と税金を支払うようになります。配送時の支払いを継続したい場合は、8月24日までにManaged Marketsをオフにする必要があります。

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
<span>📅 2026-08-11</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## 分析ツールでShopキャンペーンのパフォーマンスを確認可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ShopキャンペーンのパフォーマンスデータがShopifyQLを通じて取得可能になりました。広告費用、売上、ROAS、顧客獲得コストなどのデータを、Triple WhaleやNorthbeamなどの分析アプリや、Power BI、Tableauなどのカスタムレポートツールで他のマーケティングチャネルと並べて確認できるようになります。

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
<span>📅 2026-08-10</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## Shop CampaignsのパフォーマンスデータがShopifyQL経由で取得可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/shop-campaigns-shopifyql" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ShopifyQLに新しく`shop_campaign_insights`スキーマが追加され、アナリティクスアプリやレポートアプリが既存の`shopifyqlQuery`フィールドを使ってShop Campaignsのパフォーマンスデータ（広告費、売上、ROAS、平均注文額など）を取得できるようになりました。既存のShopifyQL利用者は新しいスコープやインテグレーション作業なしで利用開始でき、Analytics Web ComponentsやAnnotations APIも同時に導入されています。

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
<span>📅 2026-08-10</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## 下書き注文と転送/出荷の在庫が予約済みからコミット済みへ移行

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/draft-order-and-transfer-shipment-inventory-is-moving-from-reserved-to-committed" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

下書き注文、転送、出荷に関する在庫の保留状態が「予約済み(reserved)」から「コミット済み(committed)」へ統一されます。これは通常注文の在庫表現と整合性を取るための一度限りのデータ移行で、販売可能数量や総在庫数には影響しません。アプリで「reserved」を読み取っている場合は、今後「committed」を参照する必要があります。

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
<span>📅 2026-08-05</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## Managed Markets加盟店向けにCPSC eFiling項目が利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/cpsc-efiling-fields-now-available" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年7月8日より、米国への特定製品の輸入に際して消費者製品安全委員会(CPSC)への電子申告が義務化されました。Managed Marketsを利用して米国に販売するマーチャント向けに、商品情報に適合証明データを構造化して保存できるCPSC eFiling項目が追加され、Global-eを通じてよりスムーズな通関処理が可能になります。日本から米国へ輸出するマーチャントは対象製品の確認と対応が必要です。

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
<span>📅 2026-07-10</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## チェックアウトフィールド設定の推奨変更が利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/recommended-changes-to-checkout-field-settings-are-now-available" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify管理画面のチェックアウト設定ページから、顧客情報設定のパーソナライズされた推奨事項を確認できるようになりました。この推奨事項には、連絡方法をメールのみにする、氏名の必須化、配送先住所の電話番号をオプション収集にするなどが含まれ、より完全な顧客情報を収集してマーケティングの効果を高めることができます。既存ストアの設定は、推奨事項を適用しない限り自動的には変更されません。

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
<span>📅 2026-08-13</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## Shopify Managed Marketsがカナダとイギリスで利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">8pt</div>
<div class="score-bar">■■■■■■■■□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/shopify-managed-markets-now-available-in-canada-and-the-uk" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

国際販売の複雑さを解消するShopify Managed Marketsがカナダとイギリスで利用開始されました。Global-eが国際注文のマーチャントオブレコードとなり、関税込み価格表示、現地通貨決済、自動税務コンプライアンス、割引配送ラベル、毎日の現地通貨払い出しなどが提供されます。現時点では日本のマーチャントは対象外ですが、国際展開を支援する重要な機能として今後の展開が期待されます。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
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
<span>📅 2026-07-15</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## DHL Expressが英国、ドイツ、フランス、イタリア、スペインで利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">7pt</div>
<div class="score-bar">■■■■■■■□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/dhl-express-is-now-available-in-the-uk-germany-france-italy-and-spain" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

DHL Expressが欧州5カ国（英国、ドイツ、フランス、イタリア、スペイン）で利用可能になり、Shopify管理画面から直接配送ラベルを購入できるようになりました。サードパーティアプリやDHLアカウント不要で、国内・国際配送ラベルの購入、自動税関書類生成、DHL On Demand Deliveryなどの機能が利用できます。日本のマーチャントには直接的な影響はありませんが、欧州向け越境ECを展開している場合は関連性があります。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-08-13</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第33週（8/10-8/16）

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