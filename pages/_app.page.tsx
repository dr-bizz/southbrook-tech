import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Box, StyledEngineProvider } from '@mui/material'
import createEmotionCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../app/theme'

const emotionCache = createEmotionCache({ key: 'css' })

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Fundraising software built for ministries, missionaries and churches."
        />
        <meta
          name="viewport"
          content="viewport-fit=cover,width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preconnect"
          href={process.env.API_URL}
          crossOrigin="anonymous"
        />
        <link
          href={process.env.NEXT_PUBLIC_MEDIA_FAVICON}
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-touch-icon-ipad-retina-152x152.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                fontFamily: theme.typography.fontFamily
              }}
            >
              <Component {...pageProps} key={router.route} />
            </Box>
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}
