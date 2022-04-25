import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import { createCheckoutSession } from '@/lib/db';

const Stripe = () => {
  const { user } = useAuth();
  return (
    <DashboardShell>
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
    </DashboardShell>
  );
};

export default Stripe;
