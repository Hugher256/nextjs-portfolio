import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re loking for was not found.</Text>
      <Box my={6} align="center">
        <Link href="/">
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default NotFound;
