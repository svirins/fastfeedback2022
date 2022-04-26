import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import { createCheckoutSession, goToBillingPortal } from '@/lib/db';

const Account = () => {
  const { user } = useAuth();
  return (
    <DashboardShell>
      <HStack mt={4} spacing="24px">
        <Button
          onClick={(e) => createCheckoutSession(user.uid)}
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
        >
          Upgrade to premium
        </Button>
        <Button
          onClick={(e) => goToBillingPortal()}
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
        >
          Customer portal
        </Button>
      </HStack>
    </DashboardShell>
  );
};

export default Account;
