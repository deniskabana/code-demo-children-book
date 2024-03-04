import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { mapDispatchToActions } from './utils'
// Slices
import { uiSlice } from './ui/slice'

const persistConfig = { key: 'root', storage }

export const actions = {
  ui: uiSlice.actions,
}

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ middleware: [thunk], reducer: persistedReducer })
export const persistor = persistStore(store)

export type Store = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const dispatchedActions = mapDispatchToActions<typeof actions>(actions, store)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
