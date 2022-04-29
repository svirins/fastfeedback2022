import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box,
  Link
} from '@chakra-ui/react';

const AllSitesFeedbackTableHeader = () => (
  <Box>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Feedback</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading size="lg" mb={8}>
        All Feedback
      </Heading>
    </Flex>
  </Box>
);

export default AllSitesFeedbackTableHeader;
