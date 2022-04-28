import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import DashboardShell from '@/components/DashboardShell';
import SiteEmptyState from '@/components/SiteEmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';
import Page from '@/components/Page';
import SiteTable from '@/components/SiteTable';
import FreePlanEmptyState from '@/components/FreePlanEmptyState';

const MySites = () => {
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

  if (data.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      {isPaidAccount ? <SiteEmptyState /> : <FreePlanEmptyState />}
    </DashboardShell>
  );
};

const MySitesPage = () => (
  <Page>
    <MySites />
  </Page>
);

export default MySitesPage;
