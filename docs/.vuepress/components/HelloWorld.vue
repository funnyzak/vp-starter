<script setup lang="ts">
console.log('hello world!')

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
    <h3>Hello, {{ props.name || 'World' }}!</h3>
  </div>
</template>

<style scoped>
.hello-world {
  color: #3eaf7c;
}
</style>
