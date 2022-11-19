# 介绍


这是示例文字，用来占位。

## Toc目录

[[toc]]

## MD Define

Repo: @@REPO.

Current version: @@VERSION.

## 组件

<br/>
<NpmBadge package="pushoo-cli" />


## 容器

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
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
