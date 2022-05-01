import { Table, Tr, Th } from './Table';
import FeedbackRow from './FeedbackRow';

const FeedbackTable = ({ feedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th width="50px">{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {feedback.map((siteFeedback) => (
          <FeedbackRow key={siteFeedback.id} {...siteFeedback} />
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
