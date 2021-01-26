import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Heading, Text } from '@chakra-ui/react';

import Page from '../components/page';

const NotFoundPage: FC<PageProps> = () => (
  <Page
    meta={{
      title: '404',
      description: 'Page not found.',
    }}
  >
    <Heading>404</Heading>
    <Text>Page not found.</Text>
  </Page>
);

export default NotFoundPage;
