/**
 * Be careful when editing this file.
 * This is from MUI Next.js example: https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-pages-router-ts/pages/_document.tsx
 */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { AppType } from 'next/app'
import { lightTheme } from '@/styles/theme'
import createEmotionCache from '@/utils/createEmotionCache'
import { FontPrimary } from '@/styles'
import { MyAppProps } from './_app'

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[]
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en">
      {/* Set font-size by using next/font, e.g. roboto.className */}
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={lightTheme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body className={FontPrimary.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}