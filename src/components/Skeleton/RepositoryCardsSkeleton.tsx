import { Skeleton } from '@mantine/core';

export default function RepositoryCardsSkeleton() {
  return (
    <>
      <Skeleton bg="gray.1" height={64} radius="xs" />
      <Skeleton height={64} radius="xs" />
    </>
  );
}
