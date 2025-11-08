/**
 * 日付を ISO 8601 形式の文字列に変換
 */
export function toISOString(date: Date): string {
  return date.toISOString();
}

/**
 * RFC 822 形式の日付文字列をパース
 */
export function parseRFC822Date(dateString: string): Date {
  return new Date(dateString);
}

/**
 * 日付を YYYY-MM-DD 形式に変換
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * 週番号を取得（ISO 8601 week date）
 */
export function getWeekNumber(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

/**
 * 指定日数前の日付を取得
 */
export function getDaysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}
