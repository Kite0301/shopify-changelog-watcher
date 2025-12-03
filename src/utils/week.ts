import { formatDate, getWeekNumber } from './date.js';

/**
 * 週番号から年と週を抽出
 * @param weekNumber ISO 8601週番号（例: "2025-W47"）
 * @returns {year, week}
 */
export function parseWeekNumber(weekNumber: string): { year: number; week: number } {
  const match = weekNumber.match(/^(\d{4})-W(\d{2})$/);
  if (!match) {
    throw new Error(`Invalid week number format: ${weekNumber}. Expected format: YYYY-Www`);
  }
  return {
    year: parseInt(match[1], 10),
    week: parseInt(match[2], 10),
  };
}

/**
 * 指定した週の月曜日の日付を取得（ISO 8601準拠）
 * @param year 年
 * @param week 週番号
 * @returns 月曜日の日付
 */
export function getMonday(year: number, week: number): Date {
  // ISO 8601: 週は月曜日始まり、年の第1週は木曜日を含む週
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const dayOfWeek = jan4.getUTCDay() || 7; // 日曜日を7に変換
  const weekStart = new Date(jan4);
  weekStart.setUTCDate(jan4.getUTCDate() - dayOfWeek + 1 + (week - 1) * 7);
  return weekStart;
}

/**
 * 指定した週の日曜日の日付を取得
 * @param year 年
 * @param week 週番号
 * @returns 日曜日の日付
 */
export function getSunday(year: number, week: number): Date {
  const monday = getMonday(year, week);
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  return sunday;
}

/**
 * 週番号から開始日と終了日を取得
 * @param weekNumber ISO 8601週番号（例: "2025-W47"）
 * @returns {startDate, endDate} YYYY-MM-DD形式
 */
export function getWeekRange(weekNumber: string): { startDate: string; endDate: string } {
  const { year, week } = parseWeekNumber(weekNumber);
  const monday = getMonday(year, week);
  const sunday = getSunday(year, week);

  return {
    startDate: formatDate(monday),
    endDate: formatDate(sunday),
  };
}

/**
 * 前週の週番号を取得
 * @param weekNumber 現在の週番号（指定なしの場合は今週）
 * @returns 前週の週番号
 */
export function getPreviousWeek(weekNumber?: string): string {
  let date: Date;

  if (weekNumber) {
    const { year, week } = parseWeekNumber(weekNumber);
    date = getMonday(year, week);
  } else {
    date = new Date();
  }

  // 7日前の日付を取得
  date.setDate(date.getDate() - 7);
  return getWeekNumber(date);
}

/**
 * 週番号を人間が読みやすい形式に変換
 * @param weekNumber ISO 8601週番号（例: "2025-W47"）
 * @returns "2025年第47週"
 */
export function formatWeekNumber(weekNumber: string): string {
  const { year, week } = parseWeekNumber(weekNumber);
  return `${year}年第${week}週`;
}

/**
 * 週番号から日付範囲を人間が読みやすい形式で取得
 * @param weekNumber ISO 8601週番号（例: "2025-W47"）
 * @returns "11/18-11/24"
 */
export function formatWeekRange(weekNumber: string): string {
  const { startDate, endDate } = getWeekRange(weekNumber);

  // YYYY-MM-DD から MM/DD 形式に変換
  const formatShortDate = (dateStr: string): string => {
    const [, month, day] = dateStr.split('-');
    return `${parseInt(month)}/${parseInt(day)}`;
  };

  return `${formatShortDate(startDate)}-${formatShortDate(endDate)}`;
}
