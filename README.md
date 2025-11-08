# Shopify Changelog Watcher

Shopify公式のchangelogを自動収集し、AI分析により日本のマーチャントおよびパートナーにとって重要な情報を抽出・レポート化するツールです。

## 機能

- 複数のShopify changelog（通常版・開発者版）からRSS経由で自動収集
- Claude AIによる日本語要約と重要度評価
- GitHub Pagesによる収集データの可視化
- 週次レポートの自動生成（※未実装）
- GitHub Actionsによる完全自動化

## 対象リソース

- [Shopify Changelog](https://changelog.shopify.com) - マーチャント向け機能更新
- [Developer Changelog](https://shopify.dev/changelog) - API・開発者向け更新

## プロジェクト構成

```
shopify-changelog-watcher/
├── .github/
│   └── workflows/          # GitHub Actionsワークフロー
├── config/
│   └── evaluation-criteria.json  # AI評価基準
├── data/
│   ├── entries.json        # 収集した全エントリー（2025/10/01以降）
│   ├── entries-archive-2025-09.json  # アーカイブ（2025/09以前）
│   └── reports/            # 週次レポート
├── public/                 # GitHub Pages用
│   ├── index.html          # ビューアページ
│   ├── styles.css          # スタイルシート
│   └── app.js              # JavaScriptロジック
├── src/
│   ├── fetcher/            # RSS取得モジュール
│   ├── analyzer/           # AI分析モジュール
│   ├── reporter/           # レポート生成モジュール
│   ├── types/              # TypeScript型定義
│   ├── utils/              # ユーティリティ
│   └── scripts/            # 実行スクリプト
└── templates/
    └── weekly-report.md    # レポートテンプレート
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env` を作成し、APIキーを設定してください。

```bash
cp .env.example .env
```

`.env` ファイルを編集：

```env
ANTHROPIC_API_KEY=your_actual_api_key_here
```

Anthropic APIキーは [こちら](https://console.anthropic.com/) から取得できます。

### 3. ビルド

```bash
npm run build
```

## 使い方

### 手動実行

```bash
# RSS取得
npm run fetch

# AI分析
npm run analyze

# 週次レポート生成
npm run report
```

### GitHub Actionsでの自動実行

#### 1. GitHub Secretsの設定

GitHubリポジトリの **Settings > Secrets and variables > Actions** で以下のシークレットを設定：

- `ANTHROPIC_API_KEY` - Anthropic APIキー（AI分析用）
- `SLACK_WEBHOOK_URL` - Slack Incoming Webhook URL（通知用）

#### 2. 自動実行スケジュール

- **日次**: RSS取得 + データ更新（毎日9:00 JST）
  - 新規エントリーがあればSlack通知
  - 自動的に `data/entries.json` を更新してコミット
- **週次**: レポート生成（毎週月曜10:00 JST）※未実装

#### 3. 手動実行

GitHubリポジトリの **Actions** タブから "Daily RSS Fetch" を選択し、"Run workflow" で実行可能

## データビューア（GitHub Pages）

収集・分析されたデータは GitHub Pages で閲覧できます。

### 機能

- **検索**: タイトルや日本語要約で絞り込み
- **フィルター**: ソース別、スコア範囲別でフィルタリング
- **ソート**: 日付順、スコア順での並び替え
- **色分け**: スコアに応じた視覚的な重要度表示
  - 赤: 高スコア（12+）
  - オレンジ: 中スコア（8-11）
  - グレー: 低スコア（-7）
- **NEWバッジ**: 3日以内の新着記事を表示

### GitHub Pages の公開方法

GitHub Actions を使って自動デプロイされます。

#### 初回セットアップ

1. GitHubリポジトリの **Settings** > **Pages** に移動
2. **Build and deployment** セクションで以下を設定：
   - Source: `GitHub Actions` を選択
3. 変更は自動保存されます

#### 自動デプロイ

- `public/` 配下のファイルが更新されたときに自動デプロイ
- 手動実行も可能：Actions タブから "Deploy to GitHub Pages" を実行

公開URL: `https://kite0301.github.io/shopify-changelog-watcher/`

**注意**: `data/entries.json` が更新されても再デプロイは不要です。ビューアは実行時に最新のJSONを読み込みます。

## 評価基準

AIは以下の4つの軸で各エントリーを1-5点で評価します（`config/evaluation-criteria.json` で定義）：

- **マーチャント影響度**: 日本のマーチャントへの影響
- **パートナー影響度**: 開発者・代理店への影響
- **日本市場関連性**: 日本での利用可能性・重要性
- **技術的重要度**: 破壊的変更や重要な機能追加の有無

合計スコア8点以上のエントリーが週次レポートに含まれます。

## コスト管理

- AI分析は2025/10/01以降のエントリーのみが対象（コスト削減のため）
- 古いエントリーは `data/entries-archive-2025-09.json` にアーカイブ
- 推定月間コスト: 約$0.40（Claude Sonnet 4.5使用）
  - 入力トークン: $3/1M
  - 出力トークン: $15/1M

## ライセンス

MIT

## 免責事項

このプロジェクトは個人の学習・情報収集を目的としたものです。Shopify公式とは関係ありません。
