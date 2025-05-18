# flattenArray

扁平化多维数组。

## 参数
- `arr: T[]`  输入数组。
- `depth: number = Infinity`  扁平化深度，默认完全展开。

## 返回值
- `T[]`  扁平化后的一维数组。

## 示例
```ts
import { flattenArray } from '@eonova/utils/array';

flattenArray([1, [2, [3, 4]]]); // [1, 2, 3, 4]
flattenArray([1, [2, [3, 4]]], 1); // [1, 2, [3, 4]]
```

## 类型定义
```typescript
function flattenArray<T>(arr: T[], depth: number = Infinity): T[];
