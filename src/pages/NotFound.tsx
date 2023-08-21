import { useNavigate } from 'react-router-dom';

import { Button, Flex, Text } from '@mantine/core';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex align="center" direction="column" justify="center" mt="40%" w="100%">
      <Text color="blue.7" size={64} weight="bolder">
        404
      </Text>
      <Text color="gray.7" size="xl">
        Page not found
      </Text>
      <Button mt="xl" onClick={() => navigate('/', { replace: true })}>
        Back to Home
      </Button>
    </Flex>
  );
}
