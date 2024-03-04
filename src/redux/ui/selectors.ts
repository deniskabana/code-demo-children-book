import { RootState } from '@/redux'

export const selectUIData = (state: RootState) => {
  return state.ui
}

export const selectDarkMode = (state: RootState) => {
  return state.ui.usesDarkMode
}
