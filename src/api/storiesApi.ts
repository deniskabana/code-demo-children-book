import StoriesMock from '@/mocks/storiesList.json'
import { axiosInstance } from './axios'
import { API_ROUTES } from './constants'

export const storiesApi = {
  getStoriesList: async () =>
    (await axiosInstance.get<typeof StoriesMock>(`${API_ROUTES.Stories}`)).data,
}
