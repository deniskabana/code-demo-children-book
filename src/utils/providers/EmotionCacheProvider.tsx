import { CacheProvider, EmotionCache } from '@emotion/react'

type Props = {
  children: React.ReactNode
  emotionCache: EmotionCache
}

export const EmotionCacheProvider = ({ children, emotionCache }: Props) => {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>
}
