<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'
</script>

<template>
  <div>
    <SearchBar />
    <SearchResultCard country="Brazil" :totalCases="123456" :deaths="12345" :fatalityRate="10" />
  </div>
</template>

<style></style>
