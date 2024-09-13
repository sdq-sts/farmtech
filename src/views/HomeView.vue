<script setup lang="ts">
import SiteHero from '@/components/SiteHero.vue'
import SearchContainer from '@/components/SearchContainer.vue'
</script>

<template>
  <main>
    <SiteHero />
    <SearchContainer class="search-container" />
  </main>
</template>

<style scoped>
.search-container {
  transform: translateY(-4rem);
  width: 65%;
  margin: 0 auto;
}
</style>
