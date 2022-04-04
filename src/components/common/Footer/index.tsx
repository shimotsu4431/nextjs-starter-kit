import { Center, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  const date = new Date()
  const year = date.getFullYear()

  const textColor = useColorModeValue('black', 'white')

  return (
    <Center p={8} as={'footer'}>
      <Text color={textColor} fontSize={'sm'}>
        since {year}
      </Text>
    </Center>
  )
}

export default Footer
