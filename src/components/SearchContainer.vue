<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'
import { useFetchAllRegions } from '@/composables/useFetchAllRegions'
import type { Region } from '@/composables/useFetchAllRegions'

const regions = ref<Region[]>([])
const filteredRegions = ref<Region[]>([])

const search = (q: string) => {
  filteredRegions.value = filterRegions(q)
}

const filterRegions = (query: string) => {
  return regions.value.filter((region: Region) =>
    region.name.toLowerCase().includes(query.toLowerCase())
  )
}

onMounted(async () => {
  const { data: regionsData } = await useFetchAllRegions()
  regions.value = regionsData.value
})
</script>

<template>
  <div>
    <SearchBar @search="search" />
    <SearchResultCard country="Brazil" :totalCases="123456" :deaths="12345" :fatalityRate="10" />

    {{ filteredRegions }}
  </div>
</template>

<style></style>
