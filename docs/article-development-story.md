この記事では私が開発した [Kite0301/shopify-changelog-watcher](https://github.com/Kite0301/shopify-changelog-watcher) を紹介しています。

## 目的（理想の状態）
- 日本のマーチャントおよびアプリ開発者にとって重要なShopifyの更新情報をキャッチアップしたい

## 課題
- ShopifyのChangelog（変更履歴）のRSSを購読してSlackチャンネルに流していたが、読んでいない
- 考えられる要因
	- 記事タイトルおよび本文が英語であり、更にShopify専門用語も含まれているため、読むのに労力がいる→読むのが面倒になる
	- 更新頻度が高い（2025年10月は合計68記事）
	- 全く関係のない内容の記事も多数含まれている（例: インド限定の機能紹介）が、記事を見ないと自分にとって関係のある内容か判断できない

## 解決アイデア
- AIを利用して記事内容を日本語で要約することで、内容確認のハードルを下げる
- 記事の重要度をスコア化する
- 週次でレポート化し、まとめてキャッチアップ・シェアできるようにする

## 作ったもの

### 1. 記事の収集 & 日本語要約 & スコアリング

- 概要
	- Shopifyの更新情報2サイト（下記）のRSS経由で毎朝新着記事を収集
	- 新着記事に関して以下をAIにリクエスト（プロンプトから抜粋）
		- `1. 日本語タイトル: エントリーのタイトルを日本語に翻訳してください。`
		- `2. 日本語要約: このエントリーの内容を日本語で2-3文で要約してください。`
		- `3. スコアリング: 以下の4つの評価軸で1-5点で評価してください。`
	- 実行結果はJSONとしてリポジトリに直接保存
- 利用ツール
	- AI
		- `@anthropic-ai/sdk` （Claude Sonnet 4.5）
		- `@google/genai` （Gemini Flash 2.5）
		- ※ 使い分けているのではなく、両方動かしてアウトプットの差を見てるだけ
	- 実行環境: Github Actions
- 参照
	- プロンプト全体
		- https://github.com/Kite0301/shopify-changelog-watcher/blob/main/src/analyzer/prompt.ts
	- スコアリング
		- https://github.com/Kite0301/shopify-changelog-watcher/blob/main/config/evaluation-criteria.json
		- 以下4項目×5点
			- `日本のマーチャントへの影響度`
			- `日本のパートナー（開発者・代理店）への影響度`
			- `日本市場への関連性`
			- `技術的な重要度`

### 2. 要約&スコアのデータ（JSON）を表示する簡易ページ

https://kite0301.github.io/shopify-changelog-watcher/

- 1で生成したJSON内容を表示する簡易的なWebページを用意
- Github Pages 利用

### 3. 週次レポート

例: https://github.com/Kite0301/shopify-changelog-watcher/blob/main/data/reports/2025-W46-slides.pdf

- 1で生成したJSONをもとに、週次で新着情報をレポート化
- 業務のチームメンバー等に情報をシェアしやすいようにPDFで出力
- 利用ツール
	- Marp（Markdownからスライド生成できるツール）
	- 予めテンプレートを用意してそこに情報を当てはめるだけなので、レポート生成にAIは利用していない
	- （テンプレート自体は Claude Code を用いて作成）

## 今後の展望
- スコアリングの精度向上
	- 自分の運用しているショップや開発しているShopifyアプリに特化したスコアリング
	- 利用するAIモデルの検証（コスト削減も兼ねて）
- Shopify以外の情報源への応用
