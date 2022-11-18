<script setup lang="ts">
import { usePages } from '@temp/pages'
import { computed } from 'vue'

const pages = computed(() => {
  return usePages().filter((page: any) => page.title !== null && page.title.length > 0)
})
</script>

<template>
  <ul>
    <li v-for="page in pages" :key="page">
      <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      <span v-if="page.frontmatter.date"> [ {{ new Date(page.frontmatter.date).toLocaleString() }} ] </span>
    </li>
  </ul>
</template>
