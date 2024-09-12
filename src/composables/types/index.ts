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
