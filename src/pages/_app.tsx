import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'
import { QueryClient } from '@tanstack/react-query'
import { GlobalAppProvider } from '@/utils/GlobalAppProvider'

// TODO: Delete when using @emotion/react
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  // Initialize React Query client
  const [queryClient] = useState(() => new QueryClient())
  // Initialize Emotion cache
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <GlobalAppProvider queryClient={queryClient} emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </GlobalAppProvider>
  )
}
