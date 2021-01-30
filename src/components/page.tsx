import {
  Box, Button, Flex, Container, Spacer, IconButton, useColorMode,
} from '@chakra-ui/react';
import {
  SunIcon, MoonIcon, ChevronRightIcon, HamburgerIcon, CloseIcon,
} from '@chakra-ui/icons';
import React, { FC, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Subscribe from './subscribe';

type Meta = {
  title: string;
  description: string;
};

type Props = {
  meta: Meta
};

const Page: FC<Props> = ({ meta, children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <Helmet>
        <title>
          {meta.title}
          {' '}
          - rezionfire
        </title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Container maxW="6xl">
        <Flex mt={10} mb={14}>
          <Box>
            {!showMenu && (
              <Link to="/">
                <Button variant="ghost" leftIcon={<ChevronRightIcon />} ml={-4}>
                  rezionfire
                </Button>
              </Link>
            )}
            {showMenu && (
              <Box d={['block', 'block', 'none']}>
                <Link to="/">
                  <Button variant="ghost">Blog</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost">Contact</Button>
                </Link>
              </Box>
            )}
          </Box>
          <Spacer />
          <Flex gridGap={4}>
            <Box d={['none', 'none', 'flex']} gridGap={4}>
              <Link to="/">
                <Button variant="ghost">Blog</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
            </Box>
            <IconButton
              aria-label="Toggle menu"
              icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              background="none"
              d={['block', 'block', 'none']}
            />
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
      <Container py={0} mt={20}>
        {children}
        <Box my={20}>
          <Subscribe />
        </Box>
      </Container>
    </>
  );
};

export default Page;
