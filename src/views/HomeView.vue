<script setup lang="ts">
import SiteHero from '@/components/SiteHero.vue'
import SearchContainer from '@/components/SearchContainer.vue'
</script>

<template>
  <main class="page-view">
    <SiteHero />
    <SearchContainer class="search-container" />
  </main>
</template>

<style lang="scss">
.search-container {
  transform: translateY(-4rem);
  width: 65%;
  margin: 0 auto;
}

.page-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 100vh;
}

@media (max-width: $desktop-small) {
  .page-view {
    padding: 0 2rem;
    max-width: 90%;
  }

  .search-container {
    transform: translateY(-8rem);
    width: 85%;
    margin: 0 auto;
  }
}

@media (max-width: $mobile-medium) {
  .search-container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
