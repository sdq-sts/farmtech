import { ref } from 'vue'
import { type FetchStatus } from '@/utils'
import { api } from '@/services'
import type { Region } from './useFetchAllRegions'

export type ReportTotalResponse = {
  data: {
    date: string
    last_update: string
    confirmed: number
    confirmed_diff: number
    deaths: number
    deaths_diff: number
    recovered: number
    recovered_diff: number
    active: number
    active_diff: number
    fatality_rate: number
  }
}

export type ReportsTotalWithName = ReportTotalResponse['data'] & { name: string }

export const useFetchReportsTotal = async ({ iso, name }: Region) => {
  const LAST_UPDATED_DATE = '2023-03-09'
  const error = ref('')
  const status = ref<FetchStatus>('IDLE')
  const data = ref<ReportTotalResponse['data'] & { name: string }>()
  const errorStatus = ref<number>()

  const createAccount = async () => {
    status.value = 'LOADING'

    try {
      const { data: response } = await api.get<ReportTotalResponse>(
        `/reports/total?date=${LAST_UPDATED_DATE}&iso=${iso}`
      )
      data.value = { ...response.data, name }
      status.value = 'OK'
    } catch (error) {
      status.value = 'ERROR'
    }
  }

  await createAccount()

  return { data, error, status, errorStatus }
}
