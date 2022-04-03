import { Box } from '@chakra-ui/react'
import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        minH={'calc(100vh)'}
        backgroundColor={'gray.50'}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
