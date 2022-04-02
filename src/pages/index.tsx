import { Box, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { APP_NAME } from '@/lib/constants'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box p={4} h='calc(100vh)' backgroundColor={`gray.100`}>
          <Heading marginBottom={2}>hello, world!</Heading>
          <Text fontSize='md'>This is {APP_NAME}.</Text>
        </Box>
      </main>
    </>
  )
}

export default Home
