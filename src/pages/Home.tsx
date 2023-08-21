import { Button, Flex, Input } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import userRepositoriesGroups from '../components/__mocks__/userRepositoriesGroups';
import UserRepositoriesGroups from '../components/UserRepositoriesGroups';

export default function Home() {
  const largeScreen = useMediaQuery('(min-width: 480px)');

  return (
    <Flex
      align="center"
      direction="column"
      gap="md"
      justify="center"
      m="0 auto"
      mih={50}
      p={16}
      w={largeScreen ? '480px' : '100%'}
      wrap="wrap"
    >
      <Flex align="center" direction="column" gap="xs" mb="xs" w="100%">
        <Input
          placeholder="Enter username"
          size="md"
          variant="filled"
          w="100%"
        />
        <Button leftIcon={<IconSearch size={16} />} size="md" w="100%">
          Search
        </Button>
      </Flex>
      <UserRepositoriesGroups groups={userRepositoriesGroups} />
    </Flex>
  );
}
