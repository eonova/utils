# quickSort

对数字数组进行原地快速排序。

## 参数
- `arr: number[]`  需要排序的数组。
- `left: number`  排序起始索引。
- `right: number`  排序结束索引。

## 返回值
- `number[]`  排序后的原数组（原地排序）。

## 示例
```ts
import { quickSort } from '@eonova/utils/array';

const arr = [3, 1, 4, 2];
quickSort(arr, 0, arr.length - 1);
// arr: [1, 2, 3, 4]
``` 
