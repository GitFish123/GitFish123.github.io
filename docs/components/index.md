---
title: timer
toc: content # 锚点目录配置
demo:
  cols: 2
---

## 外部 demo

<code src='../../pages/demo1.tsx'>分栏 1</code>
<code src='../../pages/demo1.tsx'>分栏 2</code>
<code src='../../pages/demo1.tsx'>分栏 3</code>

<!-- skip，下面这条将跳过解析 -->

<code src='../../pages/demo1.tsx' skip>分栏 4</code>

<!-- 加了only，只会渲染这一条内容 -->
<!-- <code src='../../pages/demo1.tsx' only>分栏 5</code> -->

## 原样输出

```jsx | pure
import React from 'react';

export default () => <h1>我不会被渲染为React组件</h1>;
```

## 捕获 fixed 元素

设置 transform

```jsx
/**
 * transform: true
 */

import React from 'react';

export default () => (
  <h1 style={{ position: 'fixed', top: 0, left: 0 }}>我不会飞出去</h1>
);
```

## 设置背景色

```jsx
/**
 * background: '#1677ff'
 */
import React from 'react';

export default () => <h1>我能自定义背景颜色哟~~~</h1>;
```

## 不需要内边距

```jsx
/**
 * compact: true
 */

import React from 'react';

export default () => <>设置 compact：true后，移除所有内边距</>;
```

## 标题与简介

通过设置 title 和 description 来配置 demo 的标题和简介

```jsx
/**
 * title: 这里是标题
 * description: 这里就是自定义配置的，用markdown来编写的 description
 */

import React from 'react';

export default () => <>啥也没有！！</>;
```

## 直接嵌入文档

配置 inline: true 后，不会展示包裹器，直接回嵌入文档中

```jsx
/**
 * inline: true
 */
import React from 'react';

export default () => <h1>这里是嵌入的内容</h1>;
```

## 调试型 demo

设置 debug 为 true，则该 demo 仅在开发环境下展示、且会有一个特殊标记：

```jsx
/**
 * debug: true
 */
import React from 'react';

export default () => <h1>这里是debug的内容</h1>;
```
