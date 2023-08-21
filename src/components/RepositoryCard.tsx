import { Card, Flex, Text } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';

import { Repository } from '../types';

export interface RepositoryCardProps extends Repository {}

export default function RepositoryCard({
  title,
  description,
  stars,
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
        <Text weight="bold">{title}</Text>
        <Flex align="center">
          <Text weight="bold">{stars}</Text>
          <IconStarFilled size={16} style={{ paddingBottom: '0.15rem' }} />
        </Flex>
      </Flex>

      <Text color="gray.7" size="sm">
        {description}
      </Text>
    </Card>
  );
}
