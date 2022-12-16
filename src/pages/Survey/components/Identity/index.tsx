import { useFormik } from 'formik';
import { Box, Flex, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { Button, Heading, Input } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { addIdentity, increaseStep } from '../../surveySlice';

export default function Identity() {
  const { name, email } = useAppSelector((state: RootState) => state.survey);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name,
      email,
    },
    onSubmit: (values) => {
      dispatch(addIdentity(values));
      dispatch(increaseStep());
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="600px">
      <Box bg="white" p={6} rounded="md">
        <VStack align="center">
          <Heading mb={4} size="md">
            Step 1 of 4 - Identity
          </Heading>
        </VStack>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Next
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
