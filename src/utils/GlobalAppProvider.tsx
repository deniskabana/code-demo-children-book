import type { EmotionCache } from '@emotion/react'
import type { QueryClient } from '@tanstack/react-query'

import { ReduxProvider } from './providers/ReduxProvider'
import { MuiThemeProvider } from './providers/MuiThemeProvider'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { EmotionCacheProvider } from './providers/EmotionCacheProvider'
import { ReduxPersistProvider } from './providers/ReduxPersistProvider'

type Props = {
  children: React.ReactNode
  emotionCache: EmotionCache
  queryClient: QueryClient
}

export const GlobalAppProvider = ({ children, queryClient, emotionCache }: Props) => {
  return (
    <EmotionCacheProvider emotionCache={emotionCache}>
      <ReduxProvider>
        <ReduxPersistProvider>
          <ReactQueryProvider queryClient={queryClient}>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </ReactQueryProvider>
        </ReduxPersistProvider>
      </ReduxProvider>
    </EmotionCacheProvider>
  )
}
