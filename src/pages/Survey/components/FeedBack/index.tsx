import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

export default function Feedback() {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="100vh"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for submitting your data.
      </AlertDescription>
    </Alert>
  );
}
