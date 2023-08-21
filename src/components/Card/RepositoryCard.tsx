import styled from '@emotion/styled';
import { Anchor, Card, Flex, Text, TextProps } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';

import { Repository } from '@/types';

const StyledNonShrinkText = styled(Text)<TextProps>`
  flex-shrink: 0;
`;

export interface RepositoryCardProps {
  name: Repository['name'];
  description: Repository['description'];
  stargazersCount: Repository['stargazers_count'];
  url: Repository['url'];
}

export default function RepositoryCard({
  name,
  description,
  stargazersCount,
  url,
}: RepositoryCardProps) {
  return (
    <Card
      bg="gray.2"
      data-testid="RepositoryCard"
      px="sm"
      py="sm"
      radius="sm"
      w="100%"
    >
      <Flex align="baseline" justify="space-between">
        <Anchor color="black" href={url} target="_blank">
          <Text pr="sm" weight="bold">
            {name}
          </Text>
        </Anchor>
        <Flex align="center" gap={4}>
          <StyledNonShrinkText weight="bold">
            {stargazersCount}
          </StyledNonShrinkText>
          <IconStarFilled size={20} style={{ paddingBottom: '0.35rem' }} />
        </Flex>
      </Flex>

      {Boolean(description) && (
        <Text color="gray.7" mt={4} pr="xs" size="sm">
          {description}
        </Text>
      )}
    </Card>
  );
}
