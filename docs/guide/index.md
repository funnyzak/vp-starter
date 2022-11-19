# Introduction

This is Introduction.

## Table of Contents

[[toc]]

## MD Define

Repo: @@REPO.

Current version: @@VERSION.

## Component

<br/>
<NpmBadge package="pushoo-cli" />

## Image

![avatar](./images/avatar.png)


## Container

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
