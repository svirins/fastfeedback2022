import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { Table, Tr, Th, Td } from './Table';
import DeleteSiteButton from './DeleteSiteButton';

// TODO: implement delete site logic

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Site Name</Th>
            <Th>Url</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr" key={site.url}>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link fontWeight="medium">{site.name}</Link>
                </NextLink>
              </Td>
              <Td>{site.url}</Td>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
