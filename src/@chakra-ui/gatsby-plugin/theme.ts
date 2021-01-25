import { extendTheme, useColorModeValue } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    heading: "'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    body: "'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  styles: {
    global: {
      'h1,h2,h3,h4,h5,h6': {
        fontWeight: 600,
      },
      p: {
        color: () => useColorModeValue('gray.600', 'gray.400'),
        fontWeight: 500,
        lineHeight: 1.75,
        my: 5,
      },
      ul: { p: 6 },
      ol: { p: 6 },
      li: {
        // color: 'gray.800',
        color: () => useColorModeValue('gray.800', 'gray.100'),
        fontWeight: 600,
        '::marker': {
          // color: 'gray.200',
          color: () => useColorModeValue('gray.200', 'gray.700'),
          fontSize: '20px',
        },
      },
      strong: {
        color: () => useColorModeValue('gray.800', 'gray.200'),
        fontWeight: 600,
      },
      table: {
        p: 0,
        mx: 0,
        my: 6,
        w: '100%',
        tableLayout: 'fixed',
        th: {
          borderWidth: '1px',
          borderColor: 'gray.200',
          color: () => useColorModeValue('gray.800', 'gray.100'),
          fontWeight: 600,
          p: 2,
        },
        td: {
          borderWidth: '1px',
          borderColor: 'gray.200',
          color: () => useColorModeValue('gray.800', 'gray.100'),
          p: 2,
        },
      },
    },
  },
});
