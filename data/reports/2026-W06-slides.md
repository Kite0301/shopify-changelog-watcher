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

## 2026年第6週
### 2/2-2/8

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
<div class="stat-number">4</div>
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
<span class="meta-value">8件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 3件 / Dev 5件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Shopify POSでの在庫移動の出庫・入庫対応</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">チェックアウト完了時にカートのメタフィールドを注文へ自動コピー</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">フルフィルメントごとの支払いリクエスト送信</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">サブスクリプションAPI: 新しい決済エラーコードとエラー分類の追加</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">GiftCardConfigurationオブジェクトにギフトカードのデフォルト有効期限が追加されました</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">テーマアプリ拡張機能のアプリブロック上限が30に増加</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">Shop Minis 2026年1月アップデート</span><span class="toc-score">10pt</span></div>
<div class="toc-item low"><span class="toc-icon">📌</span><span class="toc-title">スタッフ用BalanceまたはCreditカードの自動ロック機能</span><span class="toc-score">7pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## Shopify POSでの在庫移動の出庫・入庫対応

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/fulfilling-transfers-with-shopify-pos" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify POS 10.20で、店舗スタッフがPOSデバイスから直接、拠点間の在庫移動の出庫・入庫作業を完結できるようになりました。管理画面や外部アプリに頼らず、注文タブから出庫作業、商品タブから入庫作業を行い、商品スキャンによる確認やリアルタイムステータス追跡が可能になり、店頭での在庫管理の精度と効率が向上します。スタッフ権限の設定も可能で、Shopifyの在庫管理システムに直接統合されています。

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
<span>📅 2026-02-02</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## チェックアウト完了時にカートのメタフィールドを注文へ自動コピー

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/automatically-copy-cart-metafields-to-orders-at-checkout-completion" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

APIバージョン2026-04から、カートのメタフィールドを注文作成時に自動的に注文メタフィールドへコピーできるようになりました。注文メタフィールド定義でcartToOrderCopyable機能を有効化し、カートメタフィールドと同じnamespaceとkeyを持つ場合に値がコピーされます。カート属性やチェックアウトメタフィールドの代わりに、セキュリティ機能が強化されたカートメタフィールドの使用が推奨されています。

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
<span>📅 2026-01-28</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## フルフィルメントごとの支払いリクエスト送信

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/sending-payment-requests-per-fulfillment" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Plusマーチャント向けに、フルフィルメント（出荷）ごとに支払いリクエストを送信できる機能が追加されました。予約商品やカスタム商品など、出荷時期が異なる商品を扱う際に、各出荷のタイミングで支払いを請求でき、キャッシュフローの管理が容易になります。顧客はカスタマーアカウントまたはメールのリンクから支払いを行うことができます。

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
<span>📅 2026-02-06</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## サブスクリプションAPI: 新しい決済エラーコードとエラー分類の追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/new-payment-error-codes-added-to-subscriptions-apis" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Admin GraphQL APIのサブスクリプション請求試行に、より詳細で一貫性のある新しい決済エラーコードが追加され、エラーの診断が容易になりました。unstable版では新しいエラーコードが利用可能になり、2026-01以前のバージョンでも既存エラーコードへのマッピングが改善され、PAYMENT_METHOD_DECLINEDなどの一般的なエラーがINSUFFICIENT_FUNDSなどのより明示的なコードに分類されるようになりました。なお、2026年1月28日から2月4日にかけて一時的なマッピング問題がありましたが、現在は修正済みです。

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
<span>📅 2026-02-03</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## GiftCardConfigurationオブジェクトにギフトカードのデフォルト有効期限が追加されました

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/giftcardconfiguration-now-includes-default-gift-card-expiration" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin APIを使用して、マーチャントのデフォルトギフトカード有効期限設定を照会できるようになりました。GiftCardConfigurationオブジェクトに新しいexpirationConfigurationフィールドが追加され、有効期限の値と時間単位（日、月、年）を取得できます。自動有効期限が有効な場合、これらの設定を使用して新しいギフトカードのexpiresOn日付を計算できます。

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
<span>📅 2026-02-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## テーマアプリ拡張機能のアプリブロック上限が30に増加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/increasing-the-app-block-limit-to-30-for-theme-app-extensions" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

テーマアプリ拡張機能で利用できるアプリブロックの上限が、従来の25個から30個に引き上げられました。この変更により、開発者はテーマとシームレスに統合する、より包括的なアプリ体験を構築できるようになります。より多くの機能を1つのアプリ拡張機能に組み込むことが可能になり、アプリの柔軟性が向上します。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-02-03</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## Shop Minis 2026年1月アップデート

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/shop-minis-january-2026-update" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shop Minisにおいて、遅延同意ポップアップ機能が導入されました。パートナーがスコープをリクエストする場合、ユーザーにはミニアプリ読み込み前に同意画面が表示され、同意待機中はランディング（スプラッシュ）画面が表示されます。パートナーは良い第一印象を与えるためにスプラッシュ画面をカスタマイズすることが推奨されます。

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
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-02-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 📌 通常更新 #1

## スタッフ用BalanceまたはCreditカードの自動ロック機能

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge low">7pt</div>
<div class="score-bar">■■■■■■■□□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/auto-lock-staff-balance-or-credit-cards" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify BalanceまたはCreditカードにおいて、スタッフカードを特定の日付で自動的にロックできる機能がリリースされました。アカウントオーナーは指定した日付までしかスタッフがカードを使用できないように設定することで、支出管理を効率化できます。この機能により、期間限定のスタッフや予算管理がより容易になります。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
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
<span>📅 2026-02-06</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第6週（2/2-2/8）

全 **8件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>