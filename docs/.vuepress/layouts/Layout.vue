<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">MIT Licensed | Copyright © 2022 Funnyzak</div>
    </template>
  </ParentLayout>
</template>

<style lang="css" scoped>
.footer {
  text-align: center;
  margin: 0 auto;
}
</style>
