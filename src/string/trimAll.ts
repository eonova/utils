/**
 * 去除字符串所有空格（包括中间）
 * @param str 输入字符串
 * @returns 去空格后的字符串
 */
export function trimAll(str: string): string {
  return str.replace(/\s+/g, '');
}
