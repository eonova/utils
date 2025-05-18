/**
 * 格式化日期
 * @param date 日期对象或时间戳
 * @param format 格式化模板，例如 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date | number | string, format: string = 'YYYY-MM-DD'): string {
  // 检查输入的日期是否有效
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    return '';
  }

  const year = d.getFullYear().toString();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const seconds = d.getSeconds().toString().padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * 获取两个日期之间的天数差
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns 天数差
 */
export function getDaysDiff(date1: Date | number | string, date2: Date | number | string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  // 检查输入的日期是否有效
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    return 0;
  }

  // 重置时间部分，只比较日期
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  // 计算毫秒差并转换为天数
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * 向日期添加指定的时间
 * @param date 原始日期
 * @param amount 要添加的数量
 * @param unit 时间单位：'year'|'month'|'day'|'hour'|'minute'|'second'
 * @returns 新的日期对象
 */
export function addTime(
  date: Date | number | string,
  amount: number,
  unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
): Date {
  const d = new Date(date);
  // 检查输入的日期是否有效
  if (isNaN(d.getTime())) {
    return new Date(NaN);
  }

  switch (unit) {
    case 'year':
      d.setFullYear(d.getFullYear() + amount);
      break;
    case 'month':
      d.setMonth(d.getMonth() + amount);
      break;
    case 'day':
      d.setDate(d.getDate() + amount);
      break;
    case 'hour':
      d.setHours(d.getHours() + amount);
      break;
    case 'minute':
      d.setMinutes(d.getMinutes() + amount);
      break;
    case 'second':
      d.setSeconds(d.getSeconds() + amount);
      break;
  }

  return d;
}

/**
 * 判断是否为闰年
 * @param year 年份
 * @returns 是否为闰年
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 获取指定月份的天数
 * @param year 年份
 * @param month 月份（1-12）
 * @returns 天数
 */
export function getDaysInMonth(year: number, month: number): number {
  // 检查输入的月份是否在有效范围内
  if (month < 1 || month > 12) {
    return 0;
  }
  return new Date(year, month, 0).getDate();
}

/**
 * 获取日期是一年中的第几周
 * @param date 日期
 * @returns 周数
 */
export function getWeekOfYear(date: Date | number | string): number {
  const d = new Date(date);
  // 检查输入的日期是否有效
  if (isNaN(d.getTime())) {
    return 0;
  }
  d.setHours(0, 0, 0, 0);

  // 设置为一年的第一天
  const firstDayOfYear = new Date(d.getFullYear(), 0, 1);

  // 计算从年初到给定日期的天数
  const dayOfYear = Math.floor((d.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000));

  // 计算周数（向上取整）
  return Math.ceil((dayOfYear + firstDayOfYear.getDay() + 1) / 7);
}

/**
 * 检查日期是否有效
 * @param year 年份
 * @param month 月份（1-12）
 * @param day 日期
 * @returns 是否有效
 */
export function isValidDate(year: number, month: number, day: number): boolean {
  // 简单检查输入值是否在合理范围内
  if (year < 1 || month < 1 || month > 12 || day < 1) {
    return false;
  }
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day;
}

/**
 * 获取相对时间描述（如：刚刚、5分钟前、1小时前等）
 * @param date 日期
 * @param now 当前时间，默认为现在
 * @returns 相对时间描述
 */
// 删除多余的函数声明
// export function getRelativeTimeDescription(...): string;
export * from './getQuarter';  // 新增导出（需添加在文件末尾）
export * from './getDayOfWeek';// 新增导出
export function getRelativeTimeDescription(
  date: Date | number | string,
  now: Date | number | string = new Date()
): string {
  const d = new Date(date);
  const n = new Date(now);
  // 检查输入的日期是否有效
  if (isNaN(d.getTime()) || isNaN(n.getTime())) {
    return '';
  }
  const diff = n.getTime() - d.getTime();

  // 转换为秒
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return '刚刚';
  }

  // 转换为分钟
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}分钟前`;
  }

  // 转换为小时
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}小时前`;
  }

  // 转换为天
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days}天前`;
  }

  // 转换为月
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months}个月前`;
  }

  // 转换为年
  const years = Math.floor(months / 12);
  return `${years}年前`;
}
