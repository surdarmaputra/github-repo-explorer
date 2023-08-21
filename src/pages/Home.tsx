import { Flex } from '@mantine/core';

import userRepositoriesGroups from '../components/__mocks__/userRepositoriesGroups';
import UserRepositoriesGroups from '../components/UserRepositoriesGroups';

export default function Home() {
  return (
    <Flex
      align="center"
      direction="column"
      gap="md"
      justify="center"
      mih={50}
      p={16}
      w="100%"
      wrap="wrap"
    >
      <UserRepositoriesGroups groups={userRepositoriesGroups} />
    </Flex>
  );
}
