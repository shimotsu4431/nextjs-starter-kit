import {
  ListItem,
  Text,
  UnorderedList,
  Link as ChakraUiLink,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

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

      <>
        <Text fontSize="md">This is {APP_NAME}.</Text>
        <UnorderedList mt={4}>
          <ListItem>
            <NextLink href={routes.page1()} passHref>
              <ChakraUiLink>page1</ChakraUiLink>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href={routes.page2()} passHref>
              <ChakraUiLink>page2</ChakraUiLink>
            </NextLink>
          </ListItem>
        </UnorderedList>
      </>
    </>
  )
}

export default Home
