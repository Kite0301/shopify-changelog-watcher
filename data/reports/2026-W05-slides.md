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

## 2026年第5週
### 1/26-2/1

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
<div class="stat-number">9</div>
<div class="stat-label">超重要<span class="stat-range">12pt以上</span></div>
</div>
<div class="stat-item medium">
<div class="stat-number">2</div>
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
<span class="meta-value">Shopify 4件 / Dev 7件</span>
</div>
</div>

</div>

<div class="summary-right">
<h2 class="toc-heading">📋 目次</h2>
<div class="toc-list">
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">POSUIエクステンションの安定性確保：コールバックのエラーハンドリング強化</span><span class="toc-score">16pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Checkout UI拡張機能がデフォルトで非ブロッキング動作に変更</span><span class="toc-score">15pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">エクステンションを離れることなく、購入者がサブスクリプションの支払い方法を更新可能に</span><span class="toc-score">14pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">テーマに新しい `article_list` 入力設定を追加</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">イベントデータの保持期間が1年に制限されました</span><span class="toc-score">13pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Flow: ストアの送信者メールアドレスを使用したメール送信が可能に</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">チャージバック率の計算方法の更新</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">Admin UI拡張機能によるディスカウント機能の設定強化</span><span class="toc-score">12pt</span></div>
<div class="toc-item high"><span class="toc-icon">🔥</span><span class="toc-title">GraphQL Admin APIの`OrderTransaction`における`receiptJson`の使用非推奨化</span><span class="toc-score">12pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">実店舗ロケーションの分類を制御可能に</span><span class="toc-score">10pt</span></div>
<div class="toc-item medium"><span class="toc-icon">⚠️</span><span class="toc-title">現金支払い時のお釣り自動計算機能</span><span class="toc-score">9pt</span></div>
</div>
</div>

</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #1

## POSUIエクステンションの安定性確保：コールバックのエラーハンドリング強化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">16pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■■□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/ensuring-pos-ui-extension-stability-by-hardening-callback-handling" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

POS 10.19.0以降、エクステンションのコールバック内で未処理のエラーが発生すると、エラーページが表示されるようになります。これまで静かに失敗していたエラーが可視化されるため、開発者はtry/catchブロックで適切な例外処理を実装する必要があります。対応しない場合、マーチャントにエラーページが表示され業務に支障をきたす可能性があります。

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
<span>📅 2026-01-27</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #2

## Checkout UI拡張機能がデフォルトで非ブロッキング動作に変更

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">15pt</div>
<div class="score-bar">■■■■■■■■■■■■■■■□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/checkout-ui-extensions-now-default-to-non-blocking-behavior" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年1月26日より、Checkout UI拡張機能はデフォルトで非ブロッキング動作となり、チェックアウトをブロックするにはマーチャントが「アプリによるチェックアウトのブロックを許可」設定を明示的に有効化する必要があります。拡張機能がブロッキングを必要とする場合は、エディター内で警告を表示し、マーチャントに設定手順を案内する必要があります。今後はCheckout UI拡張機能の代わりに、より安全でパフォーマンスの高いCart and Checkout Validation Functionsの利用が推奨されています。

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
<span class="score-inline-value">4/5</span>
<div class="mini-bar">●●●●○</div>
</div>
</div>

</div>

<div class="metadata-footer">
<span>📅 2026-01-22</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #3

## エクステンションを離れることなく、購入者がサブスクリプションの支払い方法を更新可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">14pt</div>
<div class="score-bar">■■■■■■■■■■■■■■□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/intents-api-for-customer-accounts" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

新しいIntents APIにより、購入者はカスタマーアカウントUIエクステンション内でサブスクリプション契約の支払い方法を直接変更できるようになりました。ネイティブの決済フローが自動的に処理するため、開発者がカード情報を保存・表示する必要がありません。この機能は購入者情報を管理するネイティブワークフローを呼び出せる新しいIntents APIによって実現されています。

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
<span>📅 2026-01-01</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #4

## テーマに新しい `article_list` 入力設定を追加

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/new-articlelist-input-setting-for-themes" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

テーマのセクションとブロックに `article_list` 入力設定が追加されました。この設定により、マーチャントは複数の公開済み記事を選択できるようになり、注目記事セクション、関連コンテンツエリア、記事ギャラリーなどの作成が可能になります。テーマ開発者は、この新しい設定タイプを活用して、より柔軟なブログコンテンツの表示機能を実装できます。

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
<span>📅 2026-01-26</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #5

## イベントデータの保持期間が1年に制限されました

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">13pt</div>
<div class="score-bar">■■■■■■■■■■■■■□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/events-data-now-limited-to-one-year-retention" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Admin GraphQL APIとAdmin REST APIを通じて取得できる「events」データが、1年以前のものにアクセスできなくなりました。この変更はデータ管理の最適化とシステムパフォーマンス向上を目的としています。イベントデータに依存している機能がある場合は、実装の見直しと更新が必要です。

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
<span>📅 2026-01-23</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #6

## Flow: ストアの送信者メールアドレスを使用したメール送信が可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/flow-send-emails-using-your-sender-email-address" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify Flowの「内部メール送信」アクションで、送信元アドレスが「flow@shopify.com」からストアの送信者メールアドレスに変更されます。新規設定は即座に、既存のワークフローも近日中に自動更新されます。独自ドメインを使用している場合は、スパム判定を防ぐために送信者メールアドレスの認証設定が必要になる場合があります。

### 📊 詳細スコア

<div class="scores-inline">
<div class="score-inline-item">
<span class="score-inline-label">マーチャント影響度</span>
<span class="score-inline-value">3/5</span>
<div class="mini-bar">●●●○○</div>
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
<span>📅 2026-01-31</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #7

## チャージバック率の計算方法の更新

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/updates-to-chargeback-rates" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

2026年1月28日より、チャージバック率の計算方法が更新され、VisaのRDR(Rapid Dispute Resolution)などのプログラムを通じて解決された紛争も含まれるようになります。これにより、より正確なチャージバックリスクの把握が可能となり、管理画面、分析レポート、通知全体で一貫した指標が提供されます。レポートではRDRと標準チャージバックを種類別にフィルタリングして分析できるようになります。

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
<span>📅 2026-01-28</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #8

## Admin UI拡張機能によるディスカウント機能の設定強化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/enhanced-discount-function-configuration-with-admin-ui-extensions" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

ディスカウント機能のAdmin UI拡張機能が強化され、選択されたディスカウント方法の取得やディスカウントクラス（商品、注文、配送）の管理が可能になりました。これにより、自動ディスカウントとコードディスカウントで異なるUIを表示したり、必要なディスカウントクラスのみを有効化して競合を減らすなど、管理画面上でのディスカウント設定体験をカスタマイズできるようになります。2026-01 APIバージョンから利用可能で、非破壊的変更として提供されます。

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
<span>📅 2026-01-06</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# 🔥 超重要更新 #9

## GraphQL Admin APIの`OrderTransaction`における`receiptJson`の使用非推奨化

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge high">12pt</div>
<div class="score-bar">■■■■■■■■■■■■□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://shopify.dev/changelog/discouraging-use-of-receiptjson-on-ordertransaction-in-the-graphql-admin-api" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

GraphQL Admin APIの`OrderTransaction.receiptJson`フィールドの使用が非推奨となりました。このフィールドはゲートウェイによって定義され、構造が不安定で予告なく変更される可能性があるため、本番環境のアプリでの依存を停止することが推奨されています。構造が型付けされておらず、予期しないアプリの障害につながる恐れがあります。

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
<span>📅 2025-12-10</span>
<span>🔗 Developer Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #1

## 実店舗ロケーションの分類を制御可能に

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">10pt</div>
<div class="score-bar">■■■■■■■■■■□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/control-how-your-retail-locations-are-classified" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

Shopify管理画面のロケーション設定に「実店舗」トグルが追加され、POSアクティビティから推測されるだけでなく、明示的に実店舗を定義できるようになりました。これにより、顧客向け店舗とポップアップや倉庫などのPOS専用ロケーションを明確に区別でき、Shopアプリでのロケーション表示や分析レポートの精度が向上します。デフォルトで有効になっているため、ロケーション名の見直しが推奨されます。

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
<span>📅 2026-01-28</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: detail -->

# ⚠️ 重要更新 #2

## 現金支払い時のお釣り自動計算機能

<div class="score-and-link-container">
<div class="score-container">
<div class="score-badge medium">9pt</div>
<div class="score-bar">■■■■■■■■■□□□□□□□□□□□</div>
</div>
<div class="article-link-container">
<a href="https://changelog.shopify.com/posts/change-due-calculator-for-cash-payments" target="_blank" class="article-link">📄 元記事を読む</a>
</div>
</div>

<div class="detail-content">

### 📝 AI分析サマリー

クイック販売で現金決済を行う際、顧客から受け取った金額を入力するだけでお釣りが自動計算されるようになりました。少額硬貨が廃止された市場向けに現金の端数処理にも対応しており、端数処理後の金額に基づいてお釣りを計算します。iOS・Android版のShopify POSアプリで利用可能で、お釣り額はレシートや注文確認書にも表示されます。

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
<span>📅 2026-01-27</span>
<span>🔗 Shopify Changelog</span>
</div>

---

<!-- _class: closing -->

# まとめ

<div class="closing-summary">

## 2026年第5週（1/26-2/1）

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