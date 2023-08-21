import { useState } from 'react';

import { Alert, Flex, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';

import UserSearchFormValue from '@/types/form/UserSearchFormValue';

import useSearchUsers from '../api/useSearchUsers';
import GeneralRequestErrorAlert from '../components/Alert/GeneralRequestErrorAlert';
import UserSearchForm from '../components/Form/UserSearchForm';
import UserRepositoriesGroups from '../components/UserRepositoriesGroups';

export default function Home() {
  const isLargeScreen = useMediaQuery('(min-width: 480px)');
  const [searchFilters, setSearchFilters] = useState<UserSearchFormValue>({
    keyword: '',
  });
  const { users, isUsersLoading, usersError, refetchUsers } = useSearchUsers(
    searchFilters.keyword,
  );

  const usernames = users?.map(({ login }) => login) || [];
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
      <Title align="center" size="h1">
        <Text color="blue.8" display="inline" size="md">
          GitHub Repo
        </Text>
        <Text color="gray.8" display="inline" size="md">
          &nbsp;Explorer
        </Text>
      </Title>

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
          <Text color="gray.6">
            Nothing found for &quot;{searchFilters?.keyword}&quot;. Please try
            another username.
          </Text>
        </Alert>
      )}

      {isError && <GeneralRequestErrorAlert onRetry={refetchUsers} />}

      {Boolean(usernames?.length) && (
        <UserRepositoriesGroups
          keyword={searchFilters?.keyword}
          usernames={usernames}
        />
      )}
    </Flex>
  );
}
