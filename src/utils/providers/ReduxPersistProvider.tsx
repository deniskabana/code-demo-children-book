import { persistor } from '@/redux'
import { PersistGate } from 'redux-persist/integration/react'

type Props = {
  children: React.ReactNode
}

export const ReduxPersistProvider = ({ children }: Props) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  )
}
