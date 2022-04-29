import useSWR from 'swr';
import { useRouter } from 'next/router';

import DashboardShell from '@/components/DashboardShell';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Page from '@/components/Page';

import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';

const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    fetcher
  );

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
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const SiteFeedbackPage = () => (
  <Page name="Name of site feedback" path="/feedback/${query.siteId}">
    <SiteFeedback />
  </Page>
);

export default SiteFeedbackPage;
