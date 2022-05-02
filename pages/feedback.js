import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Page from '@/components/Page';

import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';

const AllFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data?.feedback.length > 0 ? (
        <FeedbackTable feedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const AllFeedbackPage = () => (
  <Page name="My Feedback" path="/feedback">
    <AllFeedback />
  </Page>
);

export default AllFeedbackPage;
