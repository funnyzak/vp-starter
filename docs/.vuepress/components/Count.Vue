<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },

  mounted() {
    console.log(this.count)
  }
}
</script>

<template>
  <div @click="count++">
    Click to increment: {{ count }}
  </div>
</template>
