import type { Analysis, ChangelogEntry } from '../types/index.js';

/**
 * エントリーの代表となる分析結果を取得（最も新しく分析されたもの）
 * モデルを切り替えても、過去のエントリーは当時のモデルの結果がそのまま使われる
 */
export function getPrimaryAnalysis(entry: ChangelogEntry): Analysis | undefined {
  const analyses = Object.values(entry.analyses ?? {});
  return analyses.sort((a, b) => b.analyzedAt.localeCompare(a.analyzedAt))[0];
}

/**
 * モデルIDを表示名に変換（例: claude-opus-5-5 → Claude Opus 5.5）
 */
export function formatModelName(model: string): string {
  const [vendor, family, ...version] = model.split('-');
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return [capitalize(vendor), capitalize(family ?? ''), version.join('.')].filter(Boolean).join(' ');
}
