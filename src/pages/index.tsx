import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import {
  Box, Heading, Stack, Text, useColorModeValue,
} from '@chakra-ui/react';

import Page from '../components/page';

type Edges = {
  node: {
    frontmatter: {
      slug: string;
      title: string;
      spoiler: string;
    }
  }
};

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Edges[];
    }
  };
};

const IndexPage: FC<Props> = ({ data }) => (
  <Page
    meta={{
      title: 'JS/TS Engineer',
      description: 'Blog about things I know. Mainly about web with JS/TS.',
    }}
  >
    <Box>
      <Heading size="xl" mb={4}>Blog</Heading>
      <Stack direction="column" spacing={6}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { frontmatter } = node;
          const { slug, title, spoiler } = frontmatter;

          return (
            <Link to={slug} key={title}>
              <Stack direction="column" spacing={2}>
                <Heading size="md" fontWeight={600} lineHeight={1.5}>
                  {title}
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')} fontWeight={500}>{spoiler}</Text>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </Box>
  </Page>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
            title
            spoiler
          }
        }
      }
    }
  }
`;
