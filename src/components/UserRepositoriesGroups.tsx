import { useState } from 'react';

import { Accordion, createStyles, Flex } from '@mantine/core';

import UserRepositoriesGroup from './UserRepositoriesGroup';

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
  usernames: string[];
}

export default function UserRepositoriesGroups({
  usernames = [],
}: UserRepositoriesGroupsProps) {
  const { classes } = useStyles();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  if (!usernames?.length) return null;

  return (
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
  );
}
