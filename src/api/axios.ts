import axios, { AxiosInstance } from 'axios'
import { ACCEPT_HEADER } from './constants'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { Accept: ACCEPT_HEADER },
  timeout: 1000,
})
