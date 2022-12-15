import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  Stack,
  RadioGroup,
} from '@chakra-ui/react';
import { Button, Heading, Radio, Select, Text } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { addDetails, increaseStep, decreaseStep } from '../../surveySlice';

const DetailsSchema = Yup.object().shape({
  age: Yup.string().required('Please select your age'),
  gender: Yup.string().required('Please select your gender'),
});

export default function Details() {
  const dispatch = useAppDispatch();
  const { age, gender } = useAppSelector((state: RootState) => state.survey);
  const formik = useFormik({
    initialValues: {
      age,
      gender,
    },
    validationSchema: DetailsSchema,
    onSubmit: (values) => {
      dispatch(addDetails(values));
      dispatch(increaseStep());
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <VStack align="center">
          <Heading mb={4} size="md">
            Step 2 of 4 - Details
          </Heading>
        </VStack>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="age">Age</FormLabel>
              <Select
                id="age"
                name="age"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.age}
                placeholder="Select your age"
                mb={formik.errors.age && '3'}
              >
                {Array.from({ length: 100 }, (_, i) => i + 1).map(
                  (ageValue) => (
                    <option key={`${ageValue}-years`} value={ageValue}>
                      {ageValue} years old
                    </option>
                  )
                )}
              </Select>
              {formik.touched.age && formik.errors.age ? (
                <Text color="red">{formik.errors.age}</Text>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <RadioGroup value={formik.values.gender}>
                <Stack spacing={5} direction="row">
                  <FormLabel>
                    <Radio
                      id="gender"
                      name="gender"
                      colorScheme="purple"
                      value="male"
                      onChange={formik.handleChange}
                    >
                      Male
                    </Radio>
                  </FormLabel>
                  <FormLabel>
                    <Radio
                      id="gender"
                      name="gender"
                      onChange={formik.handleChange}
                      value="female"
                      colorScheme="purple"
                    >
                      Female
                    </Radio>
                  </FormLabel>
                </Stack>
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender ? (
                <Text color="red">{formik.errors.gender}</Text>
              ) : null}
            </FormControl>
            <Stack spacing={5} direction="row">
              <Button
                onClick={() => dispatch(decreaseStep())}
                colorScheme="purple"
                variant="outline"
                width="full"
              >
                Previous
              </Button>
              <Button type="submit" colorScheme="purple" width="full">
                Next
              </Button>
            </Stack>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
