import { Box } from '@chakra-ui/react'
import React from 'react'

import Footer from '../Footer'
import Main from '../Main'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} minH={'calc(100vh)'}>
        <Main>{children}</Main>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
