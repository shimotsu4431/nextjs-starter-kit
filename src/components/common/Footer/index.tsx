import { Center, Text } from '@chakra-ui/react'
import React from 'react'

// 西暦入れる、テスト書く

const Footer: React.FC = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Center p={4}>
        <Text>Footer | {year}</Text>
      </Center>
    </footer>
  )
}

export default Footer
