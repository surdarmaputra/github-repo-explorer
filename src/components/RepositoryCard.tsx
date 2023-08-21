import { Card, Flex, Text } from '@mantine/core';

import StarIcon from './Icon/StarIcon';

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
      <Flex justify="space-between">
        <Text weight="bold">{title}</Text>
        <Flex>
          <Text weight="bold">{stars}</Text>
          <StarIcon w={18} />
        </Flex>
      </Flex>

      <Text color="gray.7" size="sm">
        {description}
      </Text>
    </Card>
  );
}
