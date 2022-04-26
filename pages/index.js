import Head from 'next/head';
import { Box, Button, Flex, Text, Link, HStack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { getAllFeedback } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import FeedbackLink from '@/components/FeedbackLink';

import { LogoIcon, GitHubIcon, GoogleIcon } from '@/styles/icons';

const SITE_ID = '358DMknATBHPgIxiNSrE';

export async function getStaticProps(context) {
  const { feedback } = await getAllFeedback(SITE_ID);

  return {
    props: {
      allFeedback: feedback
    },
    revalidate: 1
  };
}

const Home = ({ allFeedback }) => {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
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
          <LogoIcon boxSize="24" mb={2} />
          <Text mb={4} fontSize="lg" py={6}>
            <Text as="span" fontWeight="bold" display="inline">
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
              maxW="200px"
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
            <HStack mt={4} spacing="24px">
              <Button
                fontWeight="medium"
                backgroundColor="gray.900"
                color="white"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
                onClick={() => auth.signinWithGitHub()}
                leftIcon={<GitHubIcon />}
              >
                Sign In with GitHub
              </Button>
              <Button
                fontWeight="medium"
                backgroundColor="white"
                variant="outline"
                color="gray.900"
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)'
                }}
                onClick={() => auth.signinWithGoogle()}
                leftIcon={<GoogleIcon />}
              >
                Sign In with Google
              </Button>
            </HStack>
          )}
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
      >
        <FeedbackLink siteId={SITE_ID} />
        {allFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  );
};

export default Home;
