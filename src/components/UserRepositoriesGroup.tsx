import { Accordion, Alert, Flex, Skeleton, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import useGetUserRepositories from '../api/useGetUserRepositories';
import GeneralRequestErrorAlert from './Alert/GeneralRequestErrorAlert';
import RepositoryCard from './Card/RepositoryCard';

export interface UserRepositoriesGroupProps {
  isActive: boolean;
  username: string;
}

export default function UserRepositoriesGroup({
  isActive,
  username,
}: UserRepositoriesGroupProps) {
  const {
    repositories,
    isRepositoriesLoading,
    refetchRepositories,
    repositoriesError,
  } = useGetUserRepositories(isActive ? username : '');

  const isError = !isRepositoriesLoading && Boolean(repositoriesError);
  const isEmptyResult =
    !isRepositoriesLoading &&
    !isError &&
    Array.isArray(repositories) &&
    !repositories.length;

  if (!username) return null;

  return (
    <Accordion.Item
      data-testid="UserRepositoriesGroup"
      key={username}
      value={username}
    >
      <Accordion.Control>{username}</Accordion.Control>
      <Accordion.Panel>
        <Flex direction="column" gap="xs" mt="xs">
          {isRepositoriesLoading && (
            <>
              <Skeleton bg="gray.1" height={64} radius="xs" />
              <Skeleton height={64} radius="xs" />
            </>
          )}

          {isEmptyResult && (
            <Alert color="gray" icon={<IconAlertCircle size="1rem" />}>
              <Text color="gray.7">No repository</Text>
            </Alert>
          )}

          {isError && (
            <GeneralRequestErrorAlert onRetry={refetchRepositories} />
          )}

          {Boolean(repositories?.length) &&
            repositories?.map(
              ({
                id,
                name,
                description,
                stargazers_count: stargazersCount,
                html_url: url,
              }) => (
                <RepositoryCard
                  description={description}
                  key={id}
                  name={name}
                  stargazersCount={stargazersCount}
                  url={url}
                />
              ),
            )}
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
