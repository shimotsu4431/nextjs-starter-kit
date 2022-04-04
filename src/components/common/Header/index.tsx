import { Box, Heading, Spacer, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { APP_NAME } from '@/lib/constants'

import ThemeButtonComponent from '../ThemeButton'

const Header: React.FC = () => {
  const textColor = useColorModeValue('black', 'white')

  const buttonStyleProps: any = {
    color: useColorModeValue('gray.50', 'gray.600'),
    bgColor: useColorModeValue('gray.600', 'gray.50'),
    borderRadius: 'xl',
    boxShadow: 'xl',
    _hover: { backgroundColor: useColorModeValue('gray.700', 'gray.200') },
  }

  return (
    <Box p={8} as={'header'} display={'flex'}>
      <Heading color={textColor}>{APP_NAME}</Heading>
      <Spacer />
      <ThemeButtonComponent styleProps={buttonStyleProps} />
    </Box>
  )
}

export default Header
