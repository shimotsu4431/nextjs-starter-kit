import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { APP_NAME } from '@/lib/constants'

import type { NextPage } from 'next'

const Page1: NextPage = () => {
  return (
    <>
      <Head>
        <title>page1 | {APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Text fontSize="md">This is page1.</Text>
      </Box>
    </>
  )
}

export default Page1
