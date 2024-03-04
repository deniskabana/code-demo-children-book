import { useState } from 'react'
import { GlobalAppProvider } from '@/utils/GlobalAppProvider'
import createEmotionCache from '@/utils/createEmotionCache'
import { QueryClient } from '@tanstack/react-query'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export const TestAppProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize React Query client
  const [queryClient] = useState(() => new QueryClient())

  return (
    <GlobalAppProvider emotionCache={clientSideEmotionCache} queryClient={queryClient}>
      {children}
    </GlobalAppProvider>
  )
}
