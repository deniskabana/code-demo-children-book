import { EnhancedStore } from '@reduxjs/toolkit'

type ReduxActions = Record<string, (...params: any) => any>
type Actions = Record<string, ReduxActions>

const mapDispatch = (actions: ReduxActions, store: EnhancedStore<any, any, any>) =>
  Object.assign(
    {},
    ...Object.entries(actions).map(([key, action]) => ({
      [key]: (...params: any) => {
        return store.dispatch(action(...params))
      },
    })),
  )

export const mapDispatchToActions = <T = Actions>(actions: T, store: EnhancedStore) => {
  const result = Object.assign(
    {},
    ...Object.entries(actions as any).map(([reducer, reducerActions]) => ({
      [reducer]: mapDispatch(reducerActions as any, store),
    })),
  )

  return result as T
}
