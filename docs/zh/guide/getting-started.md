# 快速开始

@include(./../../../README.md)


这是快速开始文档。



## 任务列表

- [ ] Plan A
- [x] Plan B

## Hello 组件

<HelloWorld name="Leon" />

## 代码块

```js
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
```

## Vue 模板变量

{{ new Date() }}

## 包含 MD

Below is a demo of including a markdown file:

@include(./common/_timestamp.md)

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

::: center
Paragraph to center
:::

::: right
Right paragraph
:::

## 自定义容器

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
