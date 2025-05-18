/**
 * 获取数组中的最大值（支持数字数组）
 * @param arr 输入数组
 * @returns 最大值 | undefined（空数组时）
 */
export function getArrayMax(arr: number[]): number | undefined {
  return arr.length ? Math.max(...arr) : undefined;
}
