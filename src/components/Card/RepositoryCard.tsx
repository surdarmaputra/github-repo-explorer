import { Card, Flex, Text } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';

import { Repository } from '@/types';

export interface RepositoryCardProps {
  name: Repository['name'];
  description: Repository['description'];
  stargazersCount: Repository['stargazers_count'];
}

export default function RepositoryCard({
  name,
  description,
  stargazersCount,
}: RepositoryCardProps) {
  return (
    <Card
      bg="gray.1"
      data-testid="RepositoryCard"
      px="sm"
      py="xs"
      radius="xs"
      w="100%"
    >
      <Flex align="center" justify="space-between">
        <Text weight="bold">{name}</Text>
        <Flex align="center">
          <Text weight="bold">{stargazersCount}</Text>
          <IconStarFilled size={16} style={{ paddingBottom: '0.15rem' }} />
        </Flex>
      </Flex>

      <Text color="gray.7" size="sm">
        {description}
      </Text>
    </Card>
  );
}
