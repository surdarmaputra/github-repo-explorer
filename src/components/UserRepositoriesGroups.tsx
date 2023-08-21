import { Accordion, Alert, createStyles, Flex } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import { UserRepositoriesGroup } from '../types';
import RepositoryCard from './RepositoryCard';

const useStyles = createStyles((theme) => ({
  item: {
    border: 'none',
  },
  control: {
    backgroundColor: theme.colors.gray[1],
  },
  content: {
    backgroundColor: theme.colors.white,
  },
}));

export interface UserRepositoriesGroupsProps {
  groups?: UserRepositoriesGroup[];
}

export default function UserRepositoriesGroups({
  groups = [],
}: UserRepositoriesGroupsProps) {
  const { classes } = useStyles();

  if (!groups?.length) return null;

  return (
    <Accordion classNames={classes} w="100%">
      <Flex direction="column" gap="sm">
        {groups.map(({ repositories, username }) => (
          <Accordion.Item
            data-testid="UserRepositoriesGroup"
            key={username}
            value={username}
          >
            <Accordion.Control>{username}</Accordion.Control>
            <Accordion.Panel>
              <Flex direction="column" gap="sm" mt="xs">
                {repositories.length ? (
                  repositories.map(({ title, description, stars }) => (
                    <RepositoryCard
                      description={description}
                      key={title}
                      stars={stars}
                      title={title}
                    />
                  ))
                ) : (
                  <Alert color="gray" icon={<IconAlertCircle size="1rem" />}>
                    No repository
                  </Alert>
                )}
              </Flex>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Flex>
    </Accordion>
  );
}
