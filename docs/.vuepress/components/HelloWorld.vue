<script setup lang="ts">
import { author } from '@temp/author'
import { logInfo } from '../utils/logger'

logInfo(`Hello，${author}!`)

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: undefined
  }
})
</script>
<template>
  <div class="hello-world" :style="{ display: props.name ? 'block' : 'none' }">
    <h3>Hello, {{ props.name || author }}!</h3>
  </div>
</template>

<style scoped>
.hello-world {
  color: #3eaf7c;
}
</style>
