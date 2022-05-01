import { useState } from 'react';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';
import { updateFeedback } from '@/lib/db';

import { Box, Code, Switch } from '@chakra-ui/react';

import { Td } from './Table';
import DeleteFeedbackButton from './DeleteFeedbackButton';

const FeedbackRow = ({ id, author, text, route, status }) => {
  const { user } = useAuth();
  const [isChecked, setChecked] = useState(status === 'active');
  const toggleFeedback = async () => {
    setChecked(!isChecked);
    await updateFeedback(id, {
      status: isChecked ? 'pending' : 'active'
    });
    mutate(['/api/feedback', user.token]);
  };
  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{route || '/'}</Code>
      </Td>
      <Td>
        <Switch
          colorScheme="green"
          defaultIsChecked={isChecked}
          onChange={toggleFeedback}
        />
      </Td>
      <Td>
        <DeleteFeedbackButton feedbackId={id} />
      </Td>
    </Box>
  );
};

export default FeedbackRow;
