import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

import { APP_NAME } from '@/lib/constants'

const Header: React.FC = () => {
  return (
    <header>
      <Box p={4}>
        <Heading>{APP_NAME}</Heading>
      </Box>
    </header>
  )
}

export default Header
