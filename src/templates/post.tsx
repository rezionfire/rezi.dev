import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import {
  Box, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';

import Page from '../components/page';

type Props = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
        spoiler: string;
      };
    }
  };
}

const BlogTemplate: FunctionComponent<Props> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { date, title, spoiler } = frontmatter;
  return (
    <Page meta={{ title, description: spoiler }}>
      <Box mb={8}>
        <Text color={useColorModeValue('gray.600', 'gray.400')} fontWeight={500}>{date}</Text>
        <Heading size="xl" fontWeight={600} lineHeight={1.5}>{title}</Heading>
      </Box>
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
          'pre[class*="language-"]': {
            fontSize: 16,
            lineHeight: 2,
          },
          h2: {
            fontSize: 24,
            mt: 10,
          },
          img: {
            borderRadius: 5,
          },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Page>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        spoiler
      }
    }
  }
`;
