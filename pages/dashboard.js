import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import SiteEmptyState from '@/components/SiteEmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';
import Page from '@/components/Page';

import SiteTable from '@/components/SiteTable';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <SiteEmptyState />}
    </DashboardShell>
  );
};

const DashboardPage = () => (
  <Page name="Dashboard" path="/dashboard">
    <Dashboard />
  </Page>
);

export default DashboardPage;
