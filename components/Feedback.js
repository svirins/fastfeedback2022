import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { GitHubIcon, GoogleIcon } from '@/styles/icons';
import { QuestionIcon } from '@chakra-ui/icons';
import { useTheme } from '@/utils/useTheme';

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  const colorMode = useTheme();

  const authorColor = {
    light: 'gray.900',
    dark: 'gray.200'
  };
  const textColor = {
    light: 'gray.800',
    dark: 'gray.300'
  };
  const dividerColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  const ProviderIcon = ({ providerName, ...restProps }) => {
    if (providerName === 'google') {
      return <GoogleIcon {...restProps} />;
    }
    if (providerName === 'github') {
      return <GitHubIcon {...restProps} fill="black" />;
    }
    return <QuestionIcon {...restProps} />;
  };

  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading
          size="sm"
          as="h3"
          mb={0}
          color={authorColor[colorMode]}
          fontWeight="medium"
        >
          {author}
        </Heading>
        {settings?.icons && (
          <ProviderIcon
            providerName={provider.slice(0, -4)}
            size="13px"
            ml="6px"
          />
        )}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
      )}
      <Text color={textColor[colorMode]}>{text}</Text>
      {!isLast && (
        <Divider
          borderColor={dividerColor[colorMode]}
          backgroundColor="gray.200"
          mt={6}
          mb={6}
        />
      )}
    </Box>
  );
};

export default Feedback;
