'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const LinkButton = ({ children, ...props }: any) => (
  <Button as={NextLink} {...props}>
    {children}
  </Button>
)

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackGround} p={12} rounded={6}>
        <Heading mb={6}>ChakraUI TEST</Heading>
        <Input
          placeholder="sample@sample.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <HStack spacing={4} mt={6}>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          <LinkButton href="/">Back to Home</LinkButton>
        </HStack>
        <Box mt={4}>
          <Text fontSize="sm">
            Don&apos;t have an account?{' '}
            <Link color="teal.500" href="/register">
              Sign up
            </Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
