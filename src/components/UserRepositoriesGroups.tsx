import { useState } from 'react';

import { Accordion, createStyles, Flex, Stack, Text } from '@mantine/core';

import UserRepositoriesGroup from './UserRepositoriesGroup';

const useStyles = createStyles((theme) => ({
  item: {
    border: 'none',
  },
  control: {
    backgroundColor: theme.colors.gray[1],
    borderRadius: theme.radius.sm,
  },
  content: {
    backgroundColor: theme.colors.white,
  },
}));

export interface UserRepositoriesGroupsProps {
  keyword: string;
  usernames: string[];
}

export default function UserRepositoriesGroups({
  keyword = '',
  usernames = [],
}: UserRepositoriesGroupsProps) {
  const { classes } = useStyles();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  if (!usernames?.length) return null;

  return (
    <Stack spacing="xs" w="100%">
      <Text color="gray.7" size="sm">
        Showing users for &quot;{keyword}&quot;
      </Text>
      <Accordion
        classNames={classes}
        onChange={setActiveAccordion}
        value={activeAccordion}
        w="100%"
      >
        <Flex direction="column" gap="sm">
          {usernames.map((username) => (
            <UserRepositoriesGroup
              isActive={activeAccordion === username}
              key={username}
              username={username}
            />
          ))}
        </Flex>
      </Accordion>
    </Stack>
  );
}
