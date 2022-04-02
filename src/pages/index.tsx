import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

import { APP_NAME } from '@/lib/constants'
import routes from '@/lib/routes'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Text fontSize="md">This is {APP_NAME}.</Text>
        <UnorderedList mt={4}>
          <ListItem>
            <Link href={routes.page1()}>
              <a>page1</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={routes.page2()}>
              <a>page2</a>
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  )
}

export default Home
