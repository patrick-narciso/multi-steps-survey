import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  Stack,
  CheckboxGroup,
} from '@chakra-ui/react';
import { Button, Heading, Checkbox, Input, Text } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { increaseStep, decreaseStep, addFavorites } from '../../surveySlice';

const FavoritesSchema = Yup.object().shape({
  favoriteBook: Yup.string()
    .min(4, 'Too short')
    .required('Please insert your favorite book'),
  favoriteColors: Yup.array()
    .of(Yup.string())
    .required('Please select one color at least'),
});

export default function Favorites() {
  const dispatch = useAppDispatch();
  const { favoriteBook, favoriteColors, step } = useAppSelector(
    (state: RootState) => state.survey
  );
  const formik = useFormik({
    initialValues: {
      favoriteBook,
      favoriteColors,
    },
    validationSchema: FavoritesSchema,
    onSubmit: (values) => {
      dispatch(addFavorites(values));
      dispatch(increaseStep());
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <VStack align="center">
          <Heading mb={4} size="md">
            Step 3 of {step} - Favorites
          </Heading>
        </VStack>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="favoriteBook">Favorite Book</FormLabel>
              <Input
                id="favoriteBook"
                name="favoriteBook"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.favoriteBook}
              />
              {formik.touched.favoriteBook && formik.errors.favoriteBook ? (
                <Text color="red">{formik.errors.favoriteBook}</Text>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="favoriteColors">Favorite Colors</FormLabel>
              <CheckboxGroup value={formik.values.favoriteColors}>
                <Stack spacing={5} direction="row">
                  <FormLabel>
                    <Checkbox
                      id="favoriteColors"
                      name="favoriteColors"
                      colorScheme="red"
                      value="red"
                      onChange={formik.handleChange}
                    >
                      Red
                    </Checkbox>
                  </FormLabel>
                  <FormLabel>
                    <Checkbox
                      id="favoriteColors"
                      name="favoriteColors"
                      onChange={formik.handleChange}
                      value="blue"
                      colorScheme="blue"
                    >
                      Blue
                    </Checkbox>
                  </FormLabel>
                  <FormLabel>
                    <Checkbox
                      id="favoriteColors"
                      name="favoriteColors"
                      colorScheme="yellow"
                      value="yellow"
                      onChange={formik.handleChange}
                    >
                      Yellow
                    </Checkbox>
                  </FormLabel>
                  <FormLabel>
                    <Checkbox
                      id="favoriteColors"
                      name="favoriteColors"
                      onChange={formik.handleChange}
                      value="black"
                      colorScheme="blackAlpha"
                    >
                      Black
                    </Checkbox>
                  </FormLabel>
                </Stack>
              </CheckboxGroup>
              {formik.touched.favoriteColors && formik.errors.favoriteColors ? (
                <Text color="red">{formik.errors.favoriteColors}</Text>
              ) : null}
            </FormControl>
            <Stack spacing={5} direction="row" align="center">
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
