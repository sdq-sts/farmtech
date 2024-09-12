import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://covid-api.com/api'
})
