const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * 日付（YYYY-MM-DD）が本文に明記されているか
 * "2027-03-01" / "March 1, 2027" / "Mar 1st" / "1 March 2027" などの表記を探す。
 * 年が書かれていない場合は月日が一致すれば明記とみなす
 */
export function isDateMentioned(text: string, isoDate: string): boolean {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  if (text.includes(isoDate)) return true;

  const [, year, month, day] = match;
  const monthName = MONTHS[Number(month) - 1];
  if (!monthName) return false;
  const monthPattern = `(?:${monthName}|${monthName.slice(0, 3)}\\.?)`;
  const dayPattern = `0?${Number(day)}(?:st|nd|rd|th)?`;
  const yearPattern = `(?:,?\\s*(\\d{4}))?`;

  const patterns = [
    new RegExp(`\\b${monthPattern}\\s+${dayPattern}\\b${yearPattern}`, 'gi'), // March 1, 2027
    new RegExp(`\\b${dayPattern}\\s+${monthPattern}\\b${yearPattern}`, 'gi'), // 1 March 2027
  ];
  return patterns.some((pattern) =>
    [...text.matchAll(pattern)].some((m) => m[1] === undefined || m[1] === year)
  );
}
