import { Flex } from '@mantine/core';

import RepositoryCard from '../components/RepositoryCard';

export default function Home() {
  return (
    <Flex
      align="center"
      direction="column"
      gap="md"
      justify="center"
      mih={50}
      w="100%"
      wrap="wrap"
    >
      <RepositoryCard
        description="Any description"
        stars={45}
        title="Repository 1"
      />
    </Flex>
  );
}
