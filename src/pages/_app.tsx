import '@/styles/globals.css'

import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '@/pages/common/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Airplanes</title>
        <meta name="description" content="Airplanes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
