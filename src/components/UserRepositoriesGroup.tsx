import { Accordion, Alert, Flex, Skeleton } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import useGetUserRepositories from '../api/useGetUserRepositories';
import GeneralRequestErrorAlert from './GeneralRequestErrorAlert';
import RepositoryCard from './RepositoryCard';

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
              No repository
            </Alert>
          )}

          {isError && (
            <GeneralRequestErrorAlert onRetry={refetchRepositories} />
          )}

          {Boolean(repositories?.length) &&
            repositories.map(({ title, description, stars }) => (
              <RepositoryCard
                description={description}
                key={title}
                stars={stars}
                title={title}
              />
            ))}
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
