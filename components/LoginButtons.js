import { Button, HStack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { GitHubIcon, GoogleIcon } from '@/styles/icons';

const LoginButtons = () => {
  const auth = useAuth();

  return (
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
  );
};

export default LoginButtons;
