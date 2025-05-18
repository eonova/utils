/**
 * 字符串首字母大写
 * @param str 输入字符串（需至少1个字符）
 * @returns 首字母大写后的字符串
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1);
}
