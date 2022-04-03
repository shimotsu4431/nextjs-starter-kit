import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Center p={8} as={'footer'}>
      <Text>Footer | {year}</Text>
    </Center>
  )
}

export default Footer
