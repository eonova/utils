# getQuarter：获取日期所在季度

获取日期所在季度（1-4）。

## 参数
- `date: Date | number | string`  输入日期。

## 返回值
- `number`  季度数字（1-4）。

## 示例
```ts
import { getQuarter } from '@eonova/utils/date';

getQuarter('2024-06-01'); // 2
```

## 功能说明
根据输入的日期，返回其对应的季度（1-4）。支持日期对象、时间戳或字符串格式的日期输入。

## 类型定义
```typescript
function getQuarter(date: Date | number | string): number;
