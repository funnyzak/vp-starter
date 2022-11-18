<script setup lang="ts">
import { usePages } from '@temp/pages'
const pages = usePages()
</script>

<template>
  <ul>
    <li v-for="page in pages" :key="page">
      <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      <span v-if="page.frontmatter.date"> [ {{ new Date(page.frontmatter.date).toLocaleString() }} ] </span>
    </li>
  </ul>
</template>
