/**
 * 获取日期所在季度（1-4）
 * @param date 输入日期
 * @returns 季度数字
 * @doc /guide/date/getQuarter.md
 */
export function getQuarter(date: Date | number | string): number {
  const d = new Date(date);
  const month = d.getMonth() + 1; // 月份0-11转1-12
  return Math.ceil(month / 3);
}
