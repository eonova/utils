/**
 * 合并两个数组
 * @param arr1 T
 * @param arr2 T
 * @returns
 */
export function concatArray(arr1: Array<unknown>, arr2: Array<unknown>): Array<unknown> {
  const result = [...arr1];
  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
