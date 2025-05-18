/**
 * 获取日期的星期几（中文）
 * @param date 输入日期
 * @returns 星期描述（如"星期一"）
 */
export function getDayOfWeek(date: Date | number | string): string {
  const d = new Date(date);
  const weekMap = ['日', '一', '二', '三', '四', '五', '六'];
  return `星期${weekMap[d.getDay()]}`;
}
