import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import {
  Box, Heading, Text,
} from '@chakra-ui/react';

import Page from '../components/page';

const ContactPage: FC<PageProps> = () => (
  <Page meta={{ title: 'Contact', description: 'Get in touch with me.' }}>
    <Box
      sx={{
        a: {
          color: 'blue.500',
          textDecoration: 'underline',
          fontWeight: 600,
          ':hover': {
            textDecoration: 'none',
          },
        },
      }}
    >
      <Heading>Contact</Heading>
      <Text>
        Find me on the internet! I use @rezionfire handle on social medias.
        Here&apos;s some quick links:
        {' '}
        <a href="https://facebook.com/rezionfire" target="_blank" rel="noreferrer">Facebook</a>
        {', '}
        <a href="https://instagram.com/rezionfire" target="_blank" rel="noreferrer">Instagram</a>
        {', '}
        <a href="https://twitter.com/rezionfire" target="_blank" rel="noreferrer">Twitter</a>
        .
      </Text>
      <Text>
        For business inquiries please reach me out on
        {' '}
        <a href="https://linkedin.com/in/rezionfire" target="_blank" rel="noreferrer">LinkedIn</a>
        {' '}
        or through
        {' '}
        <a href="mailto:r@rezi.dev">Email</a>
        .
      </Text>
      <Text>
        Meanwhile you can check out code to this website on
        {' '}
        <a href="https://github.com/rezionfire" target="_blank" rel="noreferrer">Github</a>
        .
      </Text>
    </Box>
  </Page>
);

export default ContactPage;
