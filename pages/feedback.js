import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTable from '@/components/FeedbackTable';
import AllSitesFeedbackTableHeader from '@/components/AllSitesFeedbackTableHeader';
import Page from '@/components/Page';

import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <AllSitesFeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <AllSitesFeedbackTableHeader />
      {data?.feedback.length > 0 ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const MyFeedbackPage = () => (
  <Page name="My Feedback" path="/feedback">
    <MyFeedback />
  </Page>
);

export default MyFeedbackPage;
