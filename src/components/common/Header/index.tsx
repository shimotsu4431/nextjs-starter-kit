import { Box, Heading, Link as ChakraUiLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

import { APP_NAME } from '@/lib/constants'
import routes from '@/lib/routes'

const Header: React.FC = () => {
  return (
    <Box p={4} as={'header'}>
      <NextLink href={routes.home()} passHref>
        <ChakraUiLink>
          <Heading>{APP_NAME}</Heading>
        </ChakraUiLink>
      </NextLink>
    </Box>
  )
}

export default Header
