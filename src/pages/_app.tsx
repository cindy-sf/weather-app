import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import Layout from '@components/Layout'

import { GlobalStyle } from '@styles/global'
import { theme } from '@styles/theme'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp

