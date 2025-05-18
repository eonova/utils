/**
 * 扁平化多维数组
 * @param arr 输入数组
 * @param depth 扁平化深度（默认完全展开）
 * @returns 扁平化后的一维数组
 */
export function flattenArray<T>(arr: T[], depth: number = Infinity): T[] {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      return acc.concat(flattenArray(val, depth - 1));
    }
    return acc.concat(val);
  }, [] as T[]);
}
