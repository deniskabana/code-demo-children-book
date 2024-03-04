import { createSlice } from '@reduxjs/toolkit'

type UISliceState = {
  usesDarkMode: boolean
}

const initialState: UISliceState = {
  usesDarkMode: false,
}

export const uiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    setDarkMode: (state: UISliceState, action: { payload: boolean }) => {
      state.usesDarkMode = action.payload
    },
  },
})
