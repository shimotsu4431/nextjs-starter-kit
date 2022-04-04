import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

import { APP_NAME } from '@/lib/constants'
import routes from '@/lib/routes'

import type { NextPage } from 'next'

const Sample: NextPage = () => {
  const router = useRouter()

  const textColor = useColorModeValue('black', 'white')

  return (
    <>
      <NextSeo
        title={`sample | ${APP_NAME}`}
        description={'This is sample page.'}
      />

      <Box>
        <Text color={textColor} fontSize="md">
          This is sample page.
        </Text>
        <Box mt={4}>
          <Button
            colorScheme="blue"
            leftIcon={<FiArrowLeft size="1.5rem" />}
            zIndex="overlay"
            borderRadius="xl"
            boxShadow="xl"
            onClick={() => router.push(routes.home())}
          >
            Go Home
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Sample
