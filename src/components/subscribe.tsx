import React, { FC } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Box, Heading, Input, Button, Text, Flex, Stack, useToast, useColorModeValue,
} from '@chakra-ui/react';

type Values = {
  email: string;
};

const Subscribe: FC = () => {
  const initialValues = { email: '' };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email field is required'),
  });

  const toast = useToast();

  const onSubmit = async (values: Values): Promise<void> => {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      body: JSON.stringify({
        ...values,
        tags: [
          'rezi.dev',
        ],
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      },
      method: 'POST',
    });

    if (response.status === 201) {
      toast({
        status: 'success',
        title: 'Congrats! You\'re a subscriber now.',
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    if (response.status === 400) {
      const errors = await response.json();
      formik.setErrors({ email: errors[0] });

      return;
    }

    toast({
      status: 'error',
      title: 'Even I don\'t have a clue what went wrong. Just let me know and I\'ll try to fix it.',
      duration: 10000,
      isClosable: true,
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box>
      <Flex
        flexDirection="column"
        border="1px solid"
        borderColor="gray.100"
        borderRadius="4px"
        padding={4}
      >
        <Stack direction="column" spacing={4}>
          <Heading>Newsletter</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            I&apos;ll just notify you when there&apos;s a new article or somethings
            interesting happening around me or in the world or idk... Won&apos;t spam you thought,
            pinky swear!
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={2}>
              <Input
                name="email"
                placeholder="user@mail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors?.email && formik.touched.email && (
                <Text color="red.400">{formik.errors?.email}</Text>
              )}
              <Button
                type="submit"
                isLoading={formik.isSubmitting}
                colorScheme="blue"
              >
                Subscribe
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Subscribe;
