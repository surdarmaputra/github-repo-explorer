import { useState } from 'react';

import { Alert, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';

import useSearchUsers from '../api/useSearchUsers';
import GeneralRequestErrorAlert from '../components/GeneralRequestErrorAlert';
import UserRepositoriesGroups from '../components/UserRepositoriesGroups';
import UserSearchForm from '../components/UserSearchForm';
import { UserSearchFormValue } from '../types';

export default function Home() {
  const isLargeScreen = useMediaQuery('(min-width: 480px)');
  const [searchFilters, setSearchFilters] = useState<UserSearchFormValue>({
    keyword: '',
  });
  const { users, isUsersLoading, usersError, refetchUsers } = useSearchUsers(
    searchFilters.keyword,
  );
  const usernames = users?.map(({ login }) => login);
  const isError = !isUsersLoading && Boolean(usersError);
  const isEmptyResult =
    !isUsersLoading && !isError && Array.isArray(users) && !users.length;

  return (
    <Flex
      align="center"
      direction="column"
      gap="md"
      justify="center"
      m="0 auto"
      mih={50}
      p={16}
      w={isLargeScreen ? '480px' : '100%'}
      wrap="wrap"
    >
      <UserSearchForm
        isLoading={isUsersLoading}
        onChange={setSearchFilters}
        value={searchFilters}
      />

      {isEmptyResult && (
        <Alert
          color="gray"
          icon={<IconAlertCircle size="1rem" />}
          title="No Result"
          w="100%"
        >
          Please try another username.
        </Alert>
      )}

      {isError && <GeneralRequestErrorAlert onRetry={refetchUsers} />}

      {Boolean(usernames?.length) && (
        <UserRepositoriesGroups usernames={usernames} />
      )}
    </Flex>
  );
}
