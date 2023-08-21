import { Card, Flex, Text } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';

export interface RepositoryCardProps {
  title: string;
  description: string;
  stars: number;
}

export default function RepositoryCard({
  title,
  description,
  stars,
}: RepositoryCardProps) {
  return (
    <Card bg="gray.1" px="sm" py="xs" radius="xs" w="100%">
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
