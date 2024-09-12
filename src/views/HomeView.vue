<script setup lang="ts">
import SiteHero from '@/components/SiteHero.vue'
import SearchContainer from '@/components/SearchContainer.vue'
import { useFetchAllRegions } from '@/composables/useFetchAllRegions'
import { onMounted, ref } from 'vue'
import type { Region } from '@/composables/types'

const regions = ref<Region[]>([])

onMounted(async () => {
  const { data: regionsData } = await useFetchAllRegions()
  regions.value = regionsData.value
})
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
