import type { Analyzer } from './interface.js';
import { ClaudeAnalyzer } from './claude.js';
import { GeminiAnalyzer } from './gemini.js';

/**
 * すべてのアナライザーを作成（Claude + Gemini）
 */
export function createAllAnalyzers(): Analyzer[] {
  return [new ClaudeAnalyzer(), new GeminiAnalyzer()];
}

/**
 * 特定のアナライザーを作成
 */
export function createAnalyzer(modelName: 'claude' | 'gemini'): Analyzer {
  switch (modelName) {
    case 'claude':
      return new ClaudeAnalyzer();
    case 'gemini':
      return new GeminiAnalyzer();
    default:
      throw new Error(`Unknown model: ${modelName}`);
  }
}
