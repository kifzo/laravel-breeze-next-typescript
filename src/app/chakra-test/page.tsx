'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Link as ChakraLink,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

// LinkButtonの型を適切に定義
interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
}

const LinkButton = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkButtonProps>) => (
  <Button as={NextLink} href={href} {...props}>
    {children}
  </Button>
)

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background={formBackGround}
        p={12}
        rounded={6}
        as="form"
        aria-labelledby="login-heading">
        <Heading mb={6} id="login-heading">
          ChakraUI TEST
        </Heading>
        <Input
          placeholder="sample@sample.com"
          variant="filled"
          mb={3}
          type="email"
          aria-label="メールアドレス"
        />
        <Input
          placeholder="********"
          variant="filled"
          mb={6}
          type="password"
          aria-label="パスワード"
        />
        <Button mb={6} colorScheme="teal" type="submit">
          Log in
        </Button>
        <HStack spacing={4} mt={6}>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          <LinkButton href="/">Back to Home</LinkButton>
        </HStack>
        <Box mt={4}>
          <Text fontSize="sm">
            Don&apos;t have an account?{' '}
            <ChakraLink as={NextLink} color="teal.500" href="/register">
              Sign up
            </ChakraLink>
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
