import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from '@chakra-ui/react';

import EditSiteModal from '@/components/EditSiteModal';

const SiteHeader = ({ isSiteOwner, site, siteId, route }) => {
  return (
    <Box mx={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/sites" passHref>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NextLink href={`/site/${siteId}`} passHref>
            <BreadcrumbLink>{site?.name || '-'}</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        {site?.name && route && (
          <BreadcrumbItem>
            <NextLink href={`/site/${siteId}/${route}`} passHref>
              <BreadcrumbLink>{route}</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>{site?.name || '-'}</Heading>
        {isSiteOwner && (
          <EditSiteModal settings={site?.settings} siteId={siteId}>
            Edit Site
          </EditSiteModal>
        )}
      </Flex>
    </Box>
  );
};

export default SiteHeader;
