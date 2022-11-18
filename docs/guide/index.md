# Introduction

This is Introduction.

Repo: @@REPO.

Current version: @@VERSION.

<NpmBadge package="pushoo-cli" />

Hi，@@AUTHOR.

![avatar](./images/avatar.png)

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
  color: red;
}
</style>
