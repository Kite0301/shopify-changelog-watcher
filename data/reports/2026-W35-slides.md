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

## 2026年第35週
### 8/24-8/30

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
<div class="stat-number">0</div>
<div class="stat-label">通常<span class="stat-range">8pt未満</span></div>
</div>
</div>

<div class="summary-meta">
<div class="meta-item">
<span class="meta-label">総更新数</span>
<span class="meta-value">9件</span>
</div>
<div class="meta-item">
<span class="meta-label">情報源</span>
<span class="meta-value">Shopify 2件 / Dev 7件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">スクリプトタグが非推奨となり、2027年3月1日に動作停止</span><span class="toc-score">17pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">有効期限付きオフラインアクセストークンのリフレッシュ処理の信頼性向上</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Eventsに4つの新しいトピックが追加されました</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Shopify Theme CLI v3.83.x以前でのパスワード保護ストアの開発フローが非推奨化</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">PHPとPythonで公式Shopifyアプリパッケージが利用可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">トライアルプランストアでOxygenが利用可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">チェックアウトでログイン顧客の最後に使用した決済方法がデフォルト選択されるように</span><span class="toc-score">11pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">GitHubコミットに最後にテーマを編集したユーザー名が記録されるように</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">米国の税計算精度が配送拠点に基づいて向上</span><span class="toc-score">8pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## スクリプトタグが非推奨となり、2027年3月1日に動作停止

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">17pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■■□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/online-store-script-tags-deprecation" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年10月1日からスクリプトタグの新規作成・更新が不可となり、2027年3月1日にはストアフロントでのスクリプトタグの動作が完全に停止します。アプリ開発者は、スクリプトタグをテーマアプリエクステンションのアプリ埋め込みブロックまたはWebピクセルに移行する必要があります。全てのAPIバージョンに適用される非推奨化のため、バージョン固定による延期はできません。

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
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
<div class="score-inline-item">
<span class="score-inline-label">技術的重要度</span>
<span class="score-inline-value">5/5</span>
<div class="mini-bar">●●●●●</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-08-24</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## 有効期限付きオフラインアクセストークンのリフレッシュ処理の信頼性向上

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/more-resilient-refreshes-for-expiring-offline-access-tokens" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

有効期限付きオフラインアクセストークンのリフレッシュ時に、新しいトークンの使用が開始されるまで古いリフレッシュトークンが有効なまま保持されるようになりました。これによりネットワーク障害やデータベース書き込みエラーなどでトークンの保存に失敗した場合でも、マーチャントに再度アプリを開いてもらうことなく復旧できます。既存のアプリは移行作業不要で、自動的にこの改善の恩恵を受けられます。

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
<span>📅 2026-08-28</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## Eventsに4つの新しいトピックが追加されました

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/four-additional-topics-are-now-available-for-events" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Eventsで、Metaobject、MetafieldDefinition、MetaobjectDefinition、InventoryTransferの4つの新しいトピックが利用可能になりました。アプリはこれらのイベントを購読することで、カスタムコンテンツやデータ定義、在庫移動のワークフローの変更に直接反応できるようになり、特定のフィールドの変更のみをターゲットにしたトリガーが設定可能になります。現在はunstable APIバージョンの開発者プレビュー段階です。

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
<span>📅 2026-08-26</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## Shopify Theme CLI v3.83.x以前でのパスワード保護ストアの開発フローが非推奨化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/password-protected-shop-dev-flows-on-shopify-theme-cli-v3-83-x-and-older-to-be-deprecated" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年10月1日より、パスワード保護されたストアフロントでのテーマ開発には、Shopify CLI v3.84.0以降が必須となります。v3.83.x以前のバージョンでは、`shopify theme dev`などのコマンドが使用できなくなるため、パスワード保護ストアでテーマ開発を行っている開発者は、期日までに最新バージョンへのアップグレードが必要です。影響を受けるのは旧バージョンのCLIを使用している開発者のみで、最新版（v4.7.0推奨）へのアップグレードで対応可能です。

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
<span>📅 2026-08-27</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## PHPとPythonで公式Shopifyアプリパッケージが利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/build-shopify-apps-in-php-and-python-with-new-official-packages" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopifyが、PHPとPython向けの公式オープンソースアプリ開発パッケージ（shopify-app-phpとshopifyapp）のバージョン1.0をリリースしました。これらのパッケージは、リクエスト検証、トークン交換、Admin GraphQLリクエストなどのフレームワーク非依存のプリミティブ機能を提供します。既存のshopify-api-phpとshopify_python_apiライブラリは非推奨となりますが、既存アプリは引き続き動作し、即座の対応は不要です。

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
<span>📅 2026-08-26</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## トライアルプランストアでOxygenが利用可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/oxygen-is-now-available-on-trial-plan-stores" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Hydrogenストアフロントを、トライアルプランストアからOxygenにデプロイできるようになりました。以前は有料プラン契約が必要でしたが、この変更により無料トライアル期間中でもOxygenホスティングを試せます。ただし、トライアルプランストアでは公開環境が含まれないため、デプロイURLには常にストアログインが必要です。

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
<span>📅 2026-08-25</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## チェックアウトでログイン顧客の最後に使用した決済方法がデフォルト選択されるように

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">11pt</div>
<div class="score-bar">■■■■■■■■■■■□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/checkout-now-defaults-to-last-used-payment-method-for-signed-in-customers" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ログイン中の顧客が以前使用した決済方法をチェックアウト時に自動的に選択する機能が追加されました。この機能はD2CおよびB2Bチェックアウトで保存済み決済方法が有効化されている場合にのみ動作します。リピート購入時の決済手続きがよりスムーズになり、コンバージョン率の向上が期待できます。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-08-21</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## GitHubコミットに最後にテーマを編集したユーザー名が記録されるように

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/github-commits-now-name-the-last-theme-editor" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify管理画面でテーマを編集した際、GitHubの連携ブランチへのコミットメッセージに、最後に編集したユーザーの名前が記載されるようになりました。コミットの作成者は引き続きShopify Botですが、コミットの本文に編集者の名前が平文で含まれます。約10秒以内の編集は1つのコミットにまとめられ、最後に保存したユーザーの名前が記録されます。

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
<span class="score-inline-value">2/5</span>
<div class="mini-bar">●●○○○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-08-26</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #3

## 米国の税計算精度が配送拠点に基づいて向上

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">8pt</div>
<div class="score-bar">■■■■■■■■□□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/shopify-tax-is-now-compatible-with-order-routing" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

米国向け配送注文の税計算が改善され、オーダールーティング設定で選択された配送元拠点に基づいて税額が計算されるようになりました。複数拠点から出荷するマーチャントは、実際の出荷場所を反映したより正確な税計算と記録が可能になります。店舗受取注文では受取場所に基づいて税が計算されます。

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
<span>📅 2026-08-24</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第35週（8/24-8/30）

全 **9件** の更新を確認・分析しました

</div>

<div class="closing-details">

### 📚 詳細情報

完全なレポートはこちらで確認できます

**Web版**: [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)

</div>

<div class="thank-you">
ご確認ありがとうございました 🙏
</div>