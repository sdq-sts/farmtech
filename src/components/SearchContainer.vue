<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'
import { useFetchAllRegions } from '@/composables/useFetchAllRegions'
import { useFetchReportsTotal } from '@/composables/useFetchReportsTotal'
import { debounce } from '@/utils'
import type { Region } from '@/composables/useFetchAllRegions'
import type { ReportsTotalWithName } from '@/composables/useFetchReportsTotal'

const DEBOUNCE_TIME = 500
const ITEMS_PER_LOAD = 8

const regions = ref<Region[]>([])
const filteredRegions = ref<Region[]>([])
const reportsTotalList = ref<ReportsTotalWithName[]>([])
const itemsLoaded = ref(0)
const observerTarget = ref<HTMLElement | null>(null)
const isLoading = ref(false)

let observer: IntersectionObserver

const pendingTransitions = ref(0)
const isTransitioning = computed(() => pendingTransitions.value > 0)

const search = debounce(async (query: string) => {
  await handleSearch(query)
}, DEBOUNCE_TIME)

const handleSearch = async (query: string) => {
  filteredRegions.value = filterRegions(query)
  resetData()
  await loadInitialReports()
  setupIntersectionObserver()
}

const filterRegions = (query: string) => {
  return regions.value.filter((region: Region) =>
    region.name.toLowerCase().includes(query.toLowerCase())
  )
}

const resetData = () => {
  itemsLoaded.value = 0
  reportsTotalList.value = []
  isLoading.value = false

  if (observer) {
    observer.disconnect()
  }
}

const loadInitialReports = async () => {
  const initialRegions = getRegionsSlice()
  await loadReportsTotal(initialRegions)
}

const getRegionsSlice = () => {
  return filteredRegions.value.slice(itemsLoaded.value, itemsLoaded.value + ITEMS_PER_LOAD)
}

const loadReportsTotal = async (regionsSlice: Region[]) => {
  isLoading.value = true
  const newReports = await fetchReportsData(regionsSlice)
  addNewReports(newReports)
  itemsLoaded.value += regionsSlice.length
  isLoading.value = false
  await checkIfMoreDataNeeded()
}

const fetchReportsData = async (regionsSlice: Region[]) => {
  const promises = regionsSlice.map((region) =>
    useFetchReportsTotal({ iso: region.iso, name: region.name })
  )
  const responses = await Promise.all(promises)
  return responses.map(({ data }) => data?.value).filter(Boolean) as ReportsTotalWithName[]
}

const addNewReports = (newReports: ReportsTotalWithName[]) => {
  newReports.forEach((newReport) => {
    if (!reportsTotalList.value.some((report) => report.name === newReport.name)) {
      reportsTotalList.value.push(newReport)
    }
  })
}

const checkIfMoreDataNeeded = async () => {
  await nextTick()

  if (!observerTarget.value) return

  const rect = observerTarget.value.getBoundingClientRect()
  if (rect.top > window.innerHeight) return

  if (itemsLoaded.value >= filteredRegions.value.length) return

  const nextRegions = getRegionsSlice()

  await loadReportsTotal(nextRegions)
}

const setupIntersectionObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  observer = new IntersectionObserver(handleIntersection)
  if (observerTarget.value) observer.observe(observerTarget.value)
}

const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
  const [firstEntry] = entries

  if (firstEntry.isIntersecting && itemsLoaded.value < filteredRegions.value.length) {
    const nextRegions = getRegionsSlice()
    await loadReportsTotal(nextRegions)
  }
}

const initializeData = async () => {
  await fetchAllRegions()

  filteredRegions.value = regions.value

  await loadInitialReports()
  setupIntersectionObserver()
}

const fetchAllRegions = async () => {
  const { data: regionsData } = await useFetchAllRegions()
  regions.value = regionsData.value
}

const reportsWithIndex = computed(() =>
  reportsTotalList.value.map((report, index) => ({
    ...report,
    fixedIndex: index
  }))
)

function onBeforeEnter() {
  pendingTransitions.value++
}

function onAfterEnter() {
  pendingTransitions.value--
}

function onBeforeLeave() {
  pendingTransitions.value++
}

function onAfterLeave() {
  pendingTransitions.value--
}

onMounted(async () => {
  await initializeData()
})
</script>

<template>
  <div>
    <SearchBar @search="search" />

    <TransitionGroup
      name="fade"
      tag="div"
      class="cards-container"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @after-leave="onAfterLeave"
    >
      <SearchResultCard
        v-for="report in reportsWithIndex"
        :key="report.name"
        :style="{ transitionDelay: `${report.fixedIndex * 50}ms` }"
        :country="report.name"
        :totalCases="report.confirmed"
        :deaths="report.deaths"
        :fatalityRate="report.fatality_rate"
      />
    </TransitionGroup>

    <div ref="observerTarget" style="height: 1px"></div>

    <div v-if="!isTransitioning">
      <div v-if="isLoading" class="loading-spinner">Carregando...</div>
      <div v-else-if="!reportsTotalList.length" class="no-content">Nenhum conteúdo encontrado.</div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: column;
}

.loading-spinner,
.no-content {
  text-align: center;
  padding: 10px;
  font-size: 16px;
  color: #6d6868bb;
  margin-top: 2rem;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
