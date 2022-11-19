<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  package: {
    type: String,
    required: true
  },
  mini: {
    type: Boolean,
    required: false,
    default: true
  }
})

const badgeLink = computed(() => `https://www.npmjs.com/package/${props.package}`)
const badgeImg = computed(
  () => `https://nodei.co/npm/${props.package}.png?downloads=true&compact=true&mini=${props.mini}`
)
</script>

<template>
  <a class="npm-badge" :href="badgeLink" :title="package" target="_blank" rel="noopener noreferrer">
    <img :src="badgeImg" :alt="package" />
  </a>
</template>

<style scoped>
.npm-badge {
  margin-right: 0.5rem;
}
</style>
