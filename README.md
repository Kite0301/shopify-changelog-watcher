# Shopify Changelog Watcher

Shopify公式のchangelogを自動収集し、AI分析により日本のマーチャントおよびパートナーにとって重要な情報を抽出・レポート化するツールです。

## 機能

- 複数のShopify changelog（通常版・開発者版）からRSS経由で自動収集
- Claude AIによる日本語要約と重要度評価
- 週次レポートの自動生成
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
│   ├── entries.json        # 収集した全エントリー
│   └── reports/            # 週次レポート
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

1. GitHubリポジトリの Settings > Secrets and variables > Actions で `ANTHROPIC_API_KEY` を設定
2. ワークフローが自動的に実行されます：
   - 日次: RSS取得 + AI分析（毎日9:00 JST）
   - 週次: レポート生成（毎週月曜10:00 JST）

## 評価基準

AIは以下の4つの軸で各エントリーを1-5点で評価します：

- **マーチャント影響度**: 日本のマーチャントへの影響
- **パートナー影響度**: 開発者・代理店への影響
- **日本市場関連性**: 日本での利用可能性・重要性
- **技術的重要度**: 破壊的変更や重要な機能追加の有無

合計スコア8点以上のエントリーが週次レポートに含まれます。

## ライセンス

MIT

## 免責事項

このプロジェクトは個人の学習・情報収集を目的としたものです。Shopify公式とは関係ありません。
