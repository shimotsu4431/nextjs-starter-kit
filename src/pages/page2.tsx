import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { APP_NAME } from '@/lib/constants'

import type { NextPage } from 'next'

const Page2: NextPage = () => {
  return (
    <>
      <Head>
        <title>page2 | {APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Text fontSize="md">This is page2.</Text>
      </Box>
    </>
  )
}

export default Page2
