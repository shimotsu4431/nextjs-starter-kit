import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

import { APP_NAME } from '@/lib/constants'

const Header: React.FC = () => {
  return (
    <Box p={8} as={'header'}>
      <Heading>{APP_NAME}</Heading>
    </Box>
  )
}

export default Header
