import { Box, Button, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FiArrowRight } from 'react-icons/fi'

import { APP_NAME } from '@/lib/constants'
import routes from '@/lib/routes'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Text fontSize="md">This is {APP_NAME}.</Text>
        <Box mt={4}>
          <Button
            colorScheme="teal"
            rightIcon={<FiArrowRight size="1.5rem" />}
            zIndex="overlay"
            borderRadius="xl"
            boxShadow="xl"
            onClick={() => router.push(routes.sample())}
          >
            Go Sample Page
          </Button>
        </Box>
      </>
    </>
  )
}

export default Home
