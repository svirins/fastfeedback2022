import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/core';
import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import DashboardShell from '@/components/DashboardShell';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '../components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);
  console.log(data?.sites);
  if (!data)
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />};
    </DashboardShell>
  );
};

export default Dashboard;
