import Head from 'next/head';
import { Button, Flex, Text, Stack, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { LogoIcon, GitHubIcon, GoogleIcon } from '@/styles/icons';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <LogoIcon boxSize="64px" mb={2} />
      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline" fontSize="xl">
          Fast Feedback
        </Text>
        {' is being built as part of '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {auth.user ? (
        <Button
          href="/dashboard"
          mt={4}
          size="lg"
          fontWeight="medium"
          backgroundColor="white"
          variant="outline"
          color="gray.900"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
          as="a"
        >
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            mt={4}
            size="lg"
            fontWeight="medium"
            backgroundColor="gray.900"
            color="white"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
            onClick={(e) => auth.signinWithGitHub()}
            leftIcon={<GitHubIcon />}
          >
            Sign In with GitHub
          </Button>
          <Button
            mt={4}
            size="lg"
            fontWeight="medium"
            backgroundColor="white"
            variant="outline"
            color="gray.900"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
            onClick={(e) => auth.signinWithGoogle()}
            leftIcon={<GoogleIcon />}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Home;
