<script setup lang="ts">
import Count from '@components/Count.vue'

import { author } from '@temp/author'
import { logInfo } from '../utils/logger'
import { ref } from 'vue'
const env_value = ref(__GLOBAL_ENV__)

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
  <div :style="{ display: props.name ? 'block' : 'none' }">
    <h3 class="hello-world">Hello, {{ props.name || author }}!</h3>

    Test Global Define Constant: {{ env_value }}

    <Count />
  </div>
</template>

<style scoped>
.hello-world {
  color: #0389c8;
}
</style>
