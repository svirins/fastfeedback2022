import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import SiteEmptyState from '@/components/SiteEmptyState';

import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';
import Page from '@/components/Page';

import SiteTable from '@/components/SiteTable';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import FreePlanEmptyState from '../components/FreePlanEmptyState';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
  const isPaidAccount = user?.stripeRole !== 'free';

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (data?.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  if (user?.stripeRole === 'free')
    return (
      <DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        {isPaidAccount ? <SiteEmptyState /> : <FreePlanEmptyState />}
      </DashboardShell>
    );
};

const DashboardPage = () => (
  <Page name="Dashboard" path="/dashboard">
    <Dashboard />
  </Page>
);

export default DashboardPage;
