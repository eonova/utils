# trimAll

去除字符串所有空格（包括中间）。

## 参数
- `str: string`  输入字符串。

## 返回值
- `string`  去空格后的字符串。

## 示例
```ts
import { trimAll } from '@eonova/utils/string';

trimAll('  a b  c '); // 'abc'
``` 
