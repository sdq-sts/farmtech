<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />

  <RouterView class="main-content" />
</template>

<style scoped lang="scss">
.main-content {
  max-width: var(--max-site-width);
  margin: 0 auto;
}
</style>
