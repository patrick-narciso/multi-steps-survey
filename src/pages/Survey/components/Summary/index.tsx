import { Box, Flex, VStack, Stack, Divider } from '@chakra-ui/react';
import { Button, Heading, Text } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { increaseStep, decreaseStep } from '../../surveySlice';

export default function Summary() {
  const dispatch = useAppDispatch();
  const { name, email, age, gender, favoriteBook, favoriteColors } =
    useAppSelector((state: RootState) => state.survey);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="600px">
      <Box bg="white" p={6} rounded="md">
        <VStack align="center">
          <Heading mb={4} size="md">
            Step 4 of 4 - Summary
          </Heading>
        </VStack>

        <VStack align="flex-start" mb={4}>
          <Heading size="md">Name</Heading>
          <Text>{name || 'Not Informed'}</Text>
          <Divider />
          <Heading size="md">Email</Heading>
          <Text>{email || 'Not Informed'}</Text>
          <Divider />

          <Heading size="md">Age</Heading>
          <Text>{age} years old</Text>
          <Divider />

          <Heading size="md">Gender</Heading>
          <Text>{gender}</Text>
          <Divider />

          <Heading size="md">Favorite Book</Heading>
          <Text>{favoriteBook}</Text>
          <Divider />

          <Heading size="md">Favorite Colors</Heading>
          <Text>{favoriteColors?.toString()}</Text>
          <Divider />
        </VStack>

        <Stack spacing={5} direction="row" align="center">
          <Button
            onClick={() => dispatch(decreaseStep())}
            colorScheme="purple"
            variant="outline"
            width="full"
          >
            Previous
          </Button>
          <Button
            onClick={() => dispatch(increaseStep())}
            colorScheme="purple"
            width="full"
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
