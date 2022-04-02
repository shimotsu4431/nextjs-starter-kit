import { Box } from '@chakra-ui/react'
import React from 'react'

const Main: React.FC = ({ children }) => {
  return (
    <Box flexGrow={1} flexShrink={1} flexBasis={0} px={4}>
      <main>{children}</main>
    </Box>
  )
}

export default Main
