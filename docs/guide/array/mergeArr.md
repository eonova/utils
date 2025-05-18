# mergeArr

合并两个数组，去重。

## 参数
- `arr1: Array<unknown>`  第一个数组。
- `arr2: Array<unknown>`  第二个数组。

## 返回值
- `Array<unknown>`  合并去重后的新数组。

## 示例
```ts
import { concatArray } from '@eonova/utils/array';

concatArray([1, 2], [2, 3]); // [1, 2, 3]
``` 
