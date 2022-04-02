import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import { APP_NAME } from '@/lib/constants'
import routes from '@/lib/routes'

const Header: React.FC = () => {
  return (
    <header>
      <Box p={4}>
        <Link href={routes.home()}>
          <a>
            <Heading>{APP_NAME}</Heading>
          </a>
        </Link>
      </Box>
    </header>
  )
}

export default Header
