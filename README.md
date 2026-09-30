# Shopify Changelog Watcher

Shopify公式のchangelogを自動収集し、AI分析により日本のマーチャントおよびパートナーにとって重要な情報を抽出・レポート化するツールです。

## 📊 収集データを見る

**👉 [https://Kite0301.github.io/shopify-changelog-watcher/](https://Kite0301.github.io/shopify-changelog-watcher/)**

- 日本語要約付き
- 重要度スコア表示
- 検索・フィルター機能
- 毎日自動更新

---

## 機能

- 複数のShopify changelog（通常版・開発者版）からRSS経由で自動収集
- Claude（Opus 5.5）による日本語タイトル・要約と重要度評価（Structured Outputs で形式を保証）
- [Jev](https://typesafe.ai)（判定専用モデル）による重要度・要対応の判定を記録（評価中。本番のスコアには未使用）
- GitHub Pagesによる収集データの可視化
- 週次レポート（Markdown / Marpスライド / PDF）の自動生成
- GitHub ActionsとSlack通知による完全自動化

## 対象リソース

- [Shopify Changelog](https://changelog.shopify.com) - マーチャント向け機能更新
- [Developer Changelog](https://shopify.dev/changelog) - API・開発者向け更新

## プロジェクト構成

```
shopify-changelog-watcher/
├── .github/workflows/      # GitHub Actions（日次取得・週次レポート・Pagesデプロイ）
├── config/
│   └── evaluation-criteria.json  # AI評価基準・分析対象期間
├── data/
│   ├── entries.json        # 収集した全エントリー（2025/10/01以降）
│   ├── entries-archive-2025-09.json  # アーカイブ（2025/09以前）
│   └── reports/            # 週次レポート（YYYY-Www.md / -slides.md / -slides.pdf）
├── docs/                   # 開発記事など
├── public/                 # GitHub Pages用ビューア（index.html / app.js / styles.css）
├── src/
│   ├── analyzer/           # AI分析（Claude / Jev / 共通プロンプト）
│   ├── fetcher/            # RSS取得
│   ├── reporters/          # 週次レポート生成（Markdown / Marp）
│   ├── scripts/            # 実行スクリプト（npm scripts から呼び出し）
│   ├── types/              # 型定義（zodスキーマ）
│   └── utils/              # ユーティリティ
└── themes/
    └── shopify-changelog.css  # Marpスライド用テーマ
```

## セットアップ

Node.js 22 以上が必要です。

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env` を作成し、APIキーを設定してください。

```bash
cp .env.example .env
```

```env
ANTHROPIC_API_KEY=your_anthropic_api_key
# ANALYSIS_MODEL=claude-sonnet-5-5  # 省略時は claude-opus-5-5
TYPESAFE_API_KEY=your_typesafe_api_key  # Jevの判定を記録する場合のみ
```

Anthropic APIキーは https://console.anthropic.com/ から取得できます。

## 使い方

スクリプトは `tsx` で直接実行するため、ビルドは不要です。

```bash
# RSS取得（新規エントリーを data/entries.json に追加）
npm run fetch

# AI分析（未分析のエントリー。前回失敗したものも再分析）
npm run analyze

# Jevの判定を記録（判定がないエントリーのみ）
npm run decide

# 週次レポート生成（引数なしで前週、例: npm run report:weekly 2026-W39）
npm run report:weekly

# スライドのPDF化
npm run slides:pdf data/reports/2026-W39-slides.md
```

### 開発用

```bash
npm run typecheck        # 型チェック
npm run lint             # ESLint
npm run format           # Prettier
npm run compare:models -- 20 claude-opus-5-5 claude-sonnet-5-5  # 直近20件で複数モデルを比較（保存しない、tmp/ に出力）
npm run compare:jev      # 保存済みのJevの判定とClaudeの分析を突き合わせ（API呼び出しなし）
```

### GitHub Actionsでの自動実行

#### 1. GitHub Secretsの設定

GitHubリポジトリの **Settings > Secrets and variables > Actions** で以下のシークレットを設定：

- `ANTHROPIC_API_KEY` - Anthropic APIキー
- `TYPESAFE_API_KEY` - TypeSafe AI（Jev）APIキー（未設定ならJevの判定はスキップ）
- `SLACK_WEBHOOK_URL` - Slack Incoming Webhook URL（通知用）

#### 2. 自動実行スケジュール

| ワークフロー | タイミング | 内容 |
|---|---|---|
| Daily RSS Fetch | 毎日 9:00 JST | RSS取得 → AI分析 → Jev判定 → `data/entries.json` をコミット → Slack通知 |
| Compare Models | 手動 | 直近の記事を複数モデルで分析して比較（成果物としてMarkdownを保存） |
| Weekly Report Generation | 毎週月曜 9:30 JST | 前週のレポート・スライド・PDFを生成 → `data/reports/` をコミット → Slack通知 |
| Deploy to GitHub Pages | `public/` 更新時 | ビューアをデプロイ |

いずれも **Actions** タブから "Run workflow" で手動実行できます（週次レポートは週番号を指定可能）。

## データビューア（GitHub Pages）

**🔗 https://Kite0301.github.io/shopify-changelog-watcher/**

収集・分析されたデータは GitHub Pages で閲覧できます。

### 機能

- **検索**: タイトルや日本語要約で絞り込み
- **フィルター**: ソース別、スコア範囲別でフィルタリング
- **デフォルトソート**: 収集日（なければ公開日）の新しい順で表示
- **色分け**: スコアに応じた視覚的な重要度表示
  - 赤: 高スコア（12+）
  - オレンジ: 中スコア（8-11）
  - グレー: 低スコア（-7）
- **NEWバッジ**: 収集から3日以内の記事を表示（緑バッジ）
- **日付表示**: 公開日と収集日を両方表示（RSS遅延を可視化）

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

**注意**: `data/entries.json` が更新されても再デプロイは不要です。ビューアは実行時にGitHub rawコンテンツから最新のJSONを読み込みます。

## 評価基準

各モデルが以下の4つの軸で各エントリーを1-5点（合計20点満点）で評価します（`config/evaluation-criteria.json` で定義）：

- **マーチャント影響度**: 日本のマーチャントへの影響
- **パートナー影響度**: 開発者・代理店への影響
- **日本市場関連性**: 日本での利用可能性・重要性
- **技術的重要度**: 破壊的変更や重要な機能追加の有無

週次レポートは各エントリーの最新の分析結果をもとに、超重要（12点以上）・重要（8-11点）・通常（8点未満）に分類します。

## コスト管理

- AI分析は2025/10/01以降のエントリーのみが対象（`config/evaluation-criteria.json` の `analysis.startDate`）
- 古いエントリーは `data/entries-archive-2025-09.json` にアーカイブ
- Claude Opus 5.5: 入力 $4 / 出力 $20（100万トークンあたり）。effort `low` で1エントリーあたり約 $0.01
- モデルはリポジトリ変数 `ANALYSIS_MODEL`（Settings > Secrets and variables > Actions > Variables）で切り替え可能。過去の分析結果は当時のモデルのまま残ります

## ライセンス

MIT

## 免責事項

このプロジェクトは個人の学習・情報収集を目的としたものです。Shopify公式とは関係ありません。
