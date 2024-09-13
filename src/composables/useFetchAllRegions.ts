import { ref } from 'vue'
import type { FetchStatus } from '@/utils'
import { api } from '@/services'

export type Region = {
  iso: string
  name: string
}

export type RegionsResponse = {
  current_page: number
  first_page_url: string
  last_page_url: string
  next_page_url: string | null
  prev_page_url: string | null
  per_page: string
  last_page: number
  from: number
  path: string
  to: number
  total: number
  data: Region[]
}

export const useFetchAllRegions = async () => {
  const error = ref('')
  const status = ref<FetchStatus>('IDLE')
  const data = ref<Region[]>([])
  const errorStatus = ref<number>()

  const createAccount = async () => {
    status.value = 'LOADING'

    try {
      const { data: response } = await api.get<RegionsResponse>(`/regions?per_page=0&order=name`)
      data.value = response.data
      status.value = 'OK'
    } catch (error) {
      status.value = 'ERROR'
    }
  }

  await createAccount()

  return { data, error, status, errorStatus }
}
