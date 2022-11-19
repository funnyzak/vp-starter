---
title: Getting Started
date: 2022-11-16
description: VP Starter is a VuePress template with i18n support, built-in PWA, and more.
head:
  - - meta
    - name: page-name
      content: getting-started
  - [meta, { name: say, content: hi }]
routeMeta: { name: funnyzak, content: vuepress }
---

# Getting started

This is getting started.

## Table of Contents

[[toc]]

## Task List

- [ ] Plan A
- [x] Plan B

## Hello

<HelloWorld name="Leon" />

## MD Define

Repo: @@REPO.

Current version: @@VERSION.

## Component

<br/>
<NpmBadge package="pushoo-cli" />

## Image

![avatar](./images/avatar.png)

## Code Block Demo

```js
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
```

## Vue Template Variable

{{ new Date() }}

## Include MD

Below is a demo of including a markdown file:

@include(./common/\_timestamp.md)

## Tab

### Content Tab

::: tabs

@tab title 1

content 1

@tab title 2

content 2

@tab:active title 3

content 3

:::

### Code Tab

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

## Align

Paragraphs can be aligned to the left, right, or center.

::: center
Paragraph to center
:::

::: right
Right paragraph
:::

## Custom Container

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
const a = 1
```

:::

::: note Custom Title
A custom note container with `code`, [link](#demo).

```js
const a = 1
```

:::

::: tip Custom Title

A custom tip container with `code`, [link](#demo).

```js
const a = 1
```

:::

::: warning Custom Title

A custom warning container with `code`, [link](#demo).

```js
const a = 1
```

:::

::: danger Custom Title

A custom danger container with `code`, [link](#demo).

```js
const a = 1
```

:::

::: details Custom Title

A custom details container with `code`, [link](#demo).

```js
const a = 1
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

## MD Vue

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

## Page Datas

<PageData/>
