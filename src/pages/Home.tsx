import { useState } from 'react';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import useSearchUsers from '../api/useSearchUsers';
import UserRepositoriesGroups from '../components/UserRepositoriesGroups';
import UserSearchForm from '../components/UserSearchForm';
import { UserSearchFormValue } from '../types';

export default function Home() {
  const largeScreen = useMediaQuery('(min-width: 480px)');
  const [searchFilters, setSearchFilters] = useState<UserSearchFormValue>({
    keyword: '',
  });
  const { users, isUsersLoading } = useSearchUsers(searchFilters.keyword);
  const usernames = users?.map(({ login }) => login);

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
      <UserSearchForm
        isLoading={isUsersLoading}
        onChange={setSearchFilters}
        value={searchFilters}
      />
      <UserRepositoriesGroups usernames={usernames} />
    </Flex>
  );
}
