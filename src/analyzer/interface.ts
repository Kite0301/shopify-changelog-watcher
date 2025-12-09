import { ChangelogEntry } from '../types/index.js';

export interface AnalysisResult {
  titleJa?: string;
  summarizedJa: string;
  scores: {
    merchantImpact: number;
    partnerImpact: number;
    japanRelevance: number;
    technicalImportance: number;
  };
  totalScore: number;
  analyzedAt: string;
  model: string;
  tokenUsage?: {
    input: number;
    output: number;
  };
  estimatedCost?: number;
}

export interface Analyzer {
  /**
   * Analyze a changelog entry and return structured analysis
   */
  analyzeEntry(entry: ChangelogEntry): Promise<AnalysisResult>;

  /**
   * Get the model name/identifier
   */
  getModelName(): string;
}
