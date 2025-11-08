import fs from 'fs/promises';
import path from 'path';

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
export function generateScoreDescription(
  name: string,
  definition: ScaleDefinition
): string {
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
