import type { ChangelogEntry, Priority } from '../types/index.js';
import type { Profiles } from './config.js';
import { getPrimaryAnalysis } from './analysis.js';

// しきい値（公式ラベルとの突き合わせで確率の目盛りがおおむね正しいことを確認済み）
const ACTION_NOW = 0.8;
const ACTION_CHECK = 0.5;
const RELEVANT = 0.5;
const MAYBE_RELEVANT = 0.3;
const STRONGLY_RELEVANT = 0.7;
const HIGH_IMPACT_SCORE = 12;

/**
 * 立場ごとの優先度を計算する
 * - 対応が必要か: 公式の「Action required」ラベルがあればそれ、なければJevの確率
 * - 関係度: 領域ごとの確率の最大値 ×（除外条件に当てはまらない確率）×（必要なら日本に適用される確率）
 * - 「要対応」は広い領域（broad）を除いた具体的な領域での関係度で判定する
 */
export function computePriority(
  entry: ChangelogEntry,
  profiles: Profiles
): Record<string, Priority> | undefined {
  const jev = entry.jev;
  if (!jev?.relevance || jev.appliesInJapan === undefined) return undefined;

  const action =
    entry.officialActionRequired !== undefined
      ? Number(entry.officialActionRequired)
      : jev.actionRequired;
  const impact = getPrimaryAnalysis(entry)?.totalScore ?? 0;

  const result: Record<string, Priority> = {};
  for (const [key, profile] of Object.entries(profiles.profiles)) {
    const r = jev.relevance[key];
    if (!r) continue;

    const notExcluded = Object.keys(profile.excludes)
      .map((ex) => r.excludes?.[ex] ?? 0)
      .reduce((p, ex) => p * (1 - ex), 1);
    const scale = notExcluded * (profile.requireJapan ? jev.appliesInJapan : 1);
    const maxOf = (areas: string[]) => Math.max(0, ...areas.map((a) => r.areas[a] ?? 0));
    const areaKeys = Object.keys(profile.areas);
    // 関係度（広い領域も含む）と、「要対応」の判定に使う具体的な領域だけの関係度
    const relevance = maxOf(areaKeys) * scale;
    const specificRelevance = maxOf(areaKeys.filter((a) => !profile.areas[a].broad)) * scale;

    // 別の立場向けの changelog の記事は「注目」までにとどめる
    const level =
      action >= ACTION_NOW &&
      specificRelevance >= RELEVANT &&
      entry.source === profile.primarySource
        ? 'now'
        : (action >= ACTION_CHECK && relevance >= MAYBE_RELEVANT) ||
            (action >= ACTION_NOW && relevance >= RELEVANT) ||
            (relevance >= STRONGLY_RELEVANT && impact >= HIGH_IMPACT_SCORE)
          ? 'check'
          : 'info';

    result[key] = {
      level,
      action,
      relevance,
      areas: Object.entries(r.areas)
        .filter(([, p]) => p >= RELEVANT)
        .sort(([, a], [, b]) => b - a)
        .map(([area]) => profile.areas[area]?.label ?? area),
      outOfScope: relevance < MAYBE_RELEVANT,
    };
  }
  return result;
}
