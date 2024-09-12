import { ref } from 'vue'
import type { FetchStatus } from '@/utils'
import { api } from '@/services'
import type { Region, RegionsResponse } from './types'

export const useFetchAllRegions = async () => {
  const error = ref('')
  const status = ref<FetchStatus>('IDLE')
  const data = ref<Region[]>([])
  const errorStatus = ref<number>()

  const createAccount = async () => {
    status.value = 'LOADING'

    try {
      const { data: response } = await api.get<RegionsResponse>(`/regions?per_page=1002&order=name`)
      data.value = response.data
      status.value = 'OK'
    } catch (error) {
      status.value = 'ERROR'
    }
  }

  await createAccount()

  return { data, error, status, errorStatus }
}
