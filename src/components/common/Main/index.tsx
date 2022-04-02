import { Box } from '@chakra-ui/react'
import React from 'react'

const Main: React.FC = ({ children }) => {
  return (
    <Box flexGrow={1} flexShrink={1} flexBasis={0}>
      {children}
    </Box>
  )
}

export default Main
