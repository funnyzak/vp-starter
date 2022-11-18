<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}
</script>
<template>
  <div>
    <h3>Count: {{ count }}</h3>
    <button @click="add">Add</button>
  </div>
</template>
