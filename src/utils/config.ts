import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

interface ScaleDefinition {
  description: string;
  scale: {
    [key: string]: string;
  };
}

interface EvaluationCriteria {
  scoring: {
    merchantImpact: ScaleDefinition;
    partnerImpact: ScaleDefinition;
    japanRelevance: ScaleDefinition;
    technicalImportance: ScaleDefinition;
  };
  thresholds: {
    weeklyReport: {
      minTotalScore: number;
      description: string;
    };
  };
  analysis?: {
    startDate: string;
    description: string;
  };
}

const CONFIG_PATH = path.join(process.cwd(), 'config/evaluation-criteria.json');

let cachedCriteria: EvaluationCriteria | null = null;

/**
 * 評価基準を読み込む
 */
export async function loadEvaluationCriteria(): Promise<EvaluationCriteria> {
  if (cachedCriteria) {
    return cachedCriteria;
  }

  const content = await fs.readFile(CONFIG_PATH, 'utf-8');
  cachedCriteria = JSON.parse(content) as EvaluationCriteria;
  return cachedCriteria;
}

/**
 * 評価軸のプロンプト文字列を生成
 */
export function generateScoreDescription(name: string, definition: ScaleDefinition): string {
  const scaleLines = Object.entries(definition.scale)
    .map(([score, desc]) => `  - ${score}: ${desc}`)
    .join('\n');

  return `- **${name}** (${definition.description}):\n${scaleLines}`;
}

/**
 * 週次レポートの最小スコアを取得
 */
export async function getWeeklyReportMinScore(): Promise<number> {
  const criteria = await loadEvaluationCriteria();
  return criteria.thresholds.weeklyReport.minTotalScore;
}

const ProfilesSchema = z.object({
  version: z.number(),
  profiles: z.record(
    z.string(),
    z.object({
      label: z.string(),
      summary: z.string(),
      requireJapan: z.boolean(),
      areas: z.record(z.string(), z.object({ label: z.string(), question: z.string() })),
    })
  ),
});

export type Profiles = z.infer<typeof ProfilesSchema>;

/**
 * 立場ごとの判定設定を読み込む（config/profiles.json）
 */
export async function loadProfiles(): Promise<Profiles> {
  const content = await fs.readFile(path.join(process.cwd(), 'config/profiles.json'), 'utf-8');
  return ProfilesSchema.parse(JSON.parse(content));
}
