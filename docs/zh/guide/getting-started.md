# 快速开始

以下是一些快速开始的例子。

## Toc 目录

[[toc]]

## 任务列表

- [ ] Plan A
- [x] Plan B

## 代码块

```js
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
```

## MD 变量

Repo: @@REPO.

Current version: @@VERSION.

## Vue 模板变量

{{ new Date() }}

## Vue 组件

<HelloWorld name="Leon" />
<br/>

<NpmBadge package="pushoo-cli" />


## Tab 标签

### 内容 Tab 标签

::: tabs

@tab title 1

content 1

@tab title 2

content 2

@tab:active title 3

content 3

:::

### 代码 Tab 标签

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress@next
```

@tab yarn

```bash
yarn add -D vuepress@next
```

@tab:active npm

```bash
npm i -D vuepress@next
```

:::

## 段落对齐

Paragraphs can be aligned to the left, right, or center.

::: center Paragraph to center :::

::: right Right paragraph :::

## 自定义容器

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: info
Information container
:::

::: note
Note container
:::

::: tip
Tip container
:::

::: warning
Warning container
:::

::: danger
Dangerous container
:::

::: details
Details container
:::

::: info Custom Title

A custom information container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: note Custom Title
A custom note container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: tip Custom Title

A custom tip container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: warning Custom Title

A custom warning container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: danger Custom Title

A custom danger container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: details Custom Title

A custom details container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: info Custom info
:::

::: note Custom note
:::

::: tip Custom tip
:::

::: warning Custom warning
:::

::: danger Custom danger
:::

::: details
This is a details block
:::

## 列表

### 无序列表

- 无序列表项 1
- 无序列表项 2
- 无序列表项 3

## Markdown Vue

<RedDiv>

Current count: {{ count }}

</RedDiv>

<button @click="count++">Tap me!</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: #ff0000;
}
</style>

## 页面数据

<PageData/>
