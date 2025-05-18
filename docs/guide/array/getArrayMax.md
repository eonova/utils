# getArrayMax

获取数组中的最大值（支持数字数组）。

## 参数
- `arr: number[]`  输入的数字数组。

## 返回值
- `number | undefined`  最大值，若数组为空则返回 undefined。

## 示例
```ts
import { getArrayMax } from '@eonova/utils/array';

getArrayMax([1, 5, 3]); // 5
getArrayMax([]); // undefined
``` 
