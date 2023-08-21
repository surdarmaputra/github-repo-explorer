import { Accordion, Alert, Flex, Skeleton } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import useGetUserRepositories from '../api/useGetUserRepositories';
import RepositoryCard from './RepositoryCard';

export interface UserRepositoriesGroupProps {
  isActive: boolean;
  username: string;
}

export default function UserRepositoriesGroup({
  isActive,
  username,
}: UserRepositoriesGroupProps) {
  const { repositories, isRepositoriesLoading } = useGetUserRepositories(
    isActive ? username : '',
  );

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

          {!isRepositoriesLoading && !repositories?.length && (
            <Alert color="gray" icon={<IconAlertCircle size="1rem" />}>
              No repository
            </Alert>
          )}

          {repositories.length
            ? repositories.map(({ title, description, stars }) => (
                <RepositoryCard
                  description={description}
                  key={title}
                  stars={stars}
                  title={title}
                />
              ))
            : null}
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
