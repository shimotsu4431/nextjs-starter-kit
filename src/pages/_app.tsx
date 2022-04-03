import { ChakraProvider } from '@chakra-ui/react'

import Layout from '@/components/common/Layout'

import customTheme from '../styles/theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
