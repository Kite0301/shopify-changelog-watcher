import { TypeSafeClient, noul, score, type NoulResponse, type Questions } from '@typesafe-ai/sdk';
import type { ChangelogEntry, JevDecision } from '../types/index.js';
import { toISOString } from '../utils/date.js';
import type { Profiles } from '../utils/config.js';

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
  appliesInJapan: noul(
    'Does this change apply to stores based in Japan? Answer no if it is limited to specific other countries or regions.'
  ),
};

/**
 * 立場ごとの関係度を聞く質問を作る（キーは `立場__overall` / `立場__領域`）
 */
function buildRelevanceQuestions(profiles: Profiles): Questions {
  const questions: Questions = {};
  for (const [key, profile] of Object.entries(profiles.profiles)) {
    questions[`${key}__overall`] = noul({
      question: 'Does this change affect this business or require its attention?',
      business: profile.summary,
    });
    for (const [area, { question }] of Object.entries({ ...profile.areas, ...profile.excludes })) {
      questions[`${key}__${area}`] = noul(question);
    }
  }
  return questions;
}

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
  private relevanceQuestions: Questions;

  constructor(private profiles: Profiles) {
    this.relevanceQuestions = buildRelevanceQuestions(profiles);
  }

  /**
   * Jevでエントリーを評価（スコアは1-5に揃える）
   */
  async decide(entry: ChangelogEntry): Promise<JevDecision> {
    const state = {
      title: entry.title,
      source: entry.source,
      categories: entry.category,
      content: toPlainText(entry.description),
    };
    const [{ answers, model, usage }, relevanceResult] = await Promise.all([
      this.client.systemOne({ state, questions: QUESTIONS }),
      this.client.systemOne({ state, questions: this.relevanceQuestions }),
    ]);

    const relevance: NonNullable<JevDecision['relevance']> = {};
    for (const [key, profile] of Object.entries(this.profiles.profiles)) {
      const prob = (name: string) =>
        (relevanceResult.answers[`${key}__${name}`] as NoulResponse).noul;
      relevance[key] = {
        overall: prob('overall'),
        areas: Object.fromEntries(Object.keys(profile.areas).map((area) => [area, prob(area)])),
        excludes: Object.fromEntries(Object.keys(profile.excludes).map((ex) => [ex, prob(ex)])),
      };
    }

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
      appliesInJapan: answers.appliesInJapan.noul,
      relevance,
      profilesVersion: this.profiles.version,
      decidedAt: toISOString(new Date()),
      tokenUsage: {
        input: usage.input_tokens + relevanceResult.usage.input_tokens,
        output: usage.output_tokens + relevanceResult.usage.output_tokens,
      },
    };
  }
}
