import { Table, Tr, Th } from './Table';
import FeedbackRow from './FeedbackRow';

const FeedbackTable = ({ allFeedback }) => {
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
        {allFeedback.map((feedback) => (
          <FeedbackRow key={feedback.id} {...feedback} />
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
