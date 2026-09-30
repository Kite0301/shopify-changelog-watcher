import { TypeSafeClient, noul, score } from '@typesafe-ai/sdk';
import type { ChangelogEntry, JevDecision } from '../types/index.js';
import { toISOString } from '../utils/date.js';

// 原文が英語のため、質問と評価基準も英語で与える
// （config/evaluation-criteria.json の4軸・5段階と同じ内容）
const QUESTIONS = {
  merchantImpact: score('How much does this change affect merchants in Japan?', [
    'No impact or unrelated',
    'Limited impact',
    'Moderate impact',
    'Major impact',
    'Very large impact; action is mandatory',
  ]),
  partnerImpact: score(
    'How much does this change affect Shopify partners (app developers and agencies) in Japan?',
    [
      'No impact or unrelated',
      'Limited impact',
      'Moderate impact',
      'Major impact',
      'Very large impact; action is mandatory',
    ]
  ),
  japanRelevance: score('How relevant is this change to the Japanese market?', [
    'Not available in Japan or unrelated',
    'Limited availability or use in Japan',
    'Available in Japan',
    'Important for the Japanese market',
    'Specific to Japan or very important there',
  ]),
  technicalImportance: score('How technically significant is this change?', [
    'Minor change',
    'Small improvement',
    'Medium-sized feature addition or change',
    'Important feature addition or breaking change',
    'Critical change affecting the whole platform',
  ]),
  actionRequired: noul(
    'Must merchants or app developers take action (migrate, update code, or change settings) because of this change?'
  ),
  breakingChange: noul(
    'Is this a breaking change or deprecation that will stop existing integrations or workflows from working?'
  ),
};

/**
 * HTMLタグを除いたプレーンテキストに変換
 */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export class JevClassifier {
  private client = new TypeSafeClient();

  /**
   * Jevでエントリーを評価（スコアは1-5に揃える）
   */
  async decide(entry: ChangelogEntry): Promise<JevDecision> {
    const { answers, model, usage } = await this.client.systemOne({
      state: {
        title: entry.title,
        source: entry.source,
        categories: entry.category,
        content: toPlainText(entry.description),
      },
      questions: QUESTIONS,
    });

    // Jevのスコアは0始まりなので+1して1-5に揃える
    const toScore = (a: { score: number; confidence: number }) => ({
      score: a.score + 1,
      confidence: a.confidence,
    });
    const scores = {
      merchantImpact: toScore(answers.merchantImpact),
      partnerImpact: toScore(answers.partnerImpact),
      japanRelevance: toScore(answers.japanRelevance),
      technicalImportance: toScore(answers.technicalImportance),
    };

    return {
      model,
      scores,
      totalScore: Object.values(scores).reduce((sum, s) => sum + s.score, 0),
      actionRequired: answers.actionRequired.noul,
      breakingChange: answers.breakingChange.noul,
      decidedAt: toISOString(new Date()),
      tokenUsage: { input: usage.input_tokens, output: usage.output_tokens },
    };
  }
}
