import { useEffect, useRef } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Accordion, Alert, Flex, Text, TextProps } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';

import Repository from '@/types/Repository';

import useGetUserRepositories from '../api/useGetUserRepositories';
import GeneralRequestErrorAlert from './Alert/GeneralRequestErrorAlert';
import RepositoryCard from './Card/RepositoryCard';
import RepositoryCardsSkeleton from './Skeleton/RepositoryCardsSkeleton';

const hide = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const StyledHiddenText = styled(Text)<TextProps>`
  animation: ${hide} 3s forwards;
`;

export interface UserRepositoriesGroupProps {
  isActive: boolean;
  username: string;
}

export default function UserRepositoriesGroup({
  isActive,
  username,
}: UserRepositoriesGroupProps) {
  const isPaginating = useRef(false);

  const { ref, entry } = useIntersection({
    root: null,
    threshold: 1,
  });

  const {
    repositories,
    isRepositoriesLoading,
    isRepositoriesValidating,
    refetchRepositories,
    repositoriesError,
    setRepositoriesSize,
    repositoriesSize,
  } = useGetUserRepositories(isActive ? username : '');

  const flattenRepositories: Repository[] | undefined = repositories?.flat();
  const isError = !isRepositoriesLoading && Boolean(repositoriesError);
  const isEmptyResult =
    !isError &&
    !isRepositoriesLoading &&
    Array.isArray(flattenRepositories) &&
    !flattenRepositories.length;
  const hasResult = !isError && Boolean(flattenRepositories?.length);
  const hasReachEndOfPagination =
    !isError &&
    repositories?.length &&
    repositories?.length > 1 &&
    !repositories?.[repositories.length - 1].length;
  const isPaginationObserverVisible =
    hasResult && !isRepositoriesValidating && !hasReachEndOfPagination;

  useEffect(() => {
    if (
      entry?.isIntersecting &&
      !isRepositoriesLoading &&
      !isRepositoriesValidating &&
      !isPaginating.current
    ) {
      setRepositoriesSize(repositoriesSize + 1);
      isPaginating.current = true;
    }
  }, [
    entry?.isIntersecting,
    isRepositoriesLoading,
    isRepositoriesValidating,
    repositoriesSize,
    setRepositoriesSize,
  ]);

  useEffect(() => {
    if (isPaginating.current && !isRepositoriesValidating) {
      isPaginating.current = false;
    }
  }, [isRepositoriesValidating]);

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
          {isRepositoriesLoading && <RepositoryCardsSkeleton />}

          {isEmptyResult && (
            <Alert color="gray" icon={<IconAlertCircle size="1rem" />}>
              <Text color="gray.7">No repository</Text>
            </Alert>
          )}

          {isError && (
            <GeneralRequestErrorAlert onRetry={refetchRepositories} />
          )}

          {hasResult &&
            flattenRepositories?.map(
              ({
                id,
                name,
                description,
                stargazers_count: stargazersCount,
                html_url: url,
              }) => (
                <RepositoryCard
                  description={description}
                  key={id}
                  name={name}
                  stargazersCount={stargazersCount}
                  url={url}
                />
              ),
            )}

          {isPaginationObserverVisible && <div ref={ref}></div>}

          {hasResult && isRepositoriesValidating && <RepositoryCardsSkeleton />}

          {hasReachEndOfPagination && (
            <StyledHiddenText
              align="center"
              color="gray.5"
              mb="-1rem"
              mt="-0.25rem"
              size="xs"
            >
              All data loaded
            </StyledHiddenText>
          )}
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
