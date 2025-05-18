# 快速开始

欢迎使用 **@eonova/utils** 工具库！本页将指导你如何快速安装、引入并使用本工具库。

## 安装

推荐使用 [pnpm](https://pnpm.io/zh/) 安装，也支持 npm、yarn 等主流包管理器：

```bash
# 使用 pnpm
pnpm add @eonova/utils

# 或者使用 npm
npm install @eonova/utils --save

# 或者使用 yarn
yarn add @eonova/utils
```

## 引入方式

支持 ESM 及 TypeScript，按需引入更高效：

```ts
// 按需引入
import { flattenArray, formatDate } from '@eonova/utils';

// 也可单独引入子模块
import { trimAll } from '@eonova/utils/string';
```

## 基础用法示例

```ts
import { getArrayMax } from '@eonova/utils/array';

const max = getArrayMax([1, 2, 3]); // 3
```

## 类型支持

本库基于 TypeScript 编写，所有函数均内置类型定义，支持智能提示和类型检查。

---

如需更多 API 说明，请查阅左侧导航或[全部工具函数总览](/guide/all-in-one)。
