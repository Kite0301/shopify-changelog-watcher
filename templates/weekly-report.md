# Shopify Changelog Weekly Report

**期間:** {{startDate}} - {{endDate}}
**生成日:** {{generatedDate}}

---

## サマリー

今週は **{{totalEntries}}件** の更新があり、そのうち **{{importantEntries}}件** が重要度の高い更新です。

---

## 重要な更新

{{#each importantUpdates}}
### {{title}}

**ソース:** {{source}}
**公開日:** {{publishedAt}}
**重要度スコア:** {{analysis.totalScore}}/20

#### 日本語要約
{{analysis.summarizedJa}}

#### スコア詳細
- マーチャント影響度: {{analysis.scores.merchantImpact}}/5
- パートナー影響度: {{analysis.scores.partnerImpact}}/5
- 日本市場関連性: {{analysis.scores.japanRelevance}}/5
- 技術的重要度: {{analysis.scores.technicalImportance}}/5

**詳細:** [{{link}}]({{link}})

---

{{/each}}

## その他の更新

{{#each otherUpdates}}
- **{{title}}** ({{publishedAt}}) - スコア: {{analysis.totalScore}}/20
  {{analysis.summarizedJa}}
  [詳細]({{link}})

{{/each}}

---

*このレポートは自動生成されています*
