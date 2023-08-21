import useSWR, { SWRResponse } from 'swr';

import { Repository } from '../types';
import swrFetcher from '../utils/swrFetcher';

interface UseGetUserRepositoriesResult {
  repositories: Repository[];
  isRepositoriesLoading: SWRResponse['isLoading'];
  repositoriesError: SWRResponse['error'];
  refetchRepositories: SWRResponse['mutate'];
}

export default function useGetUserRepositories(
  username: string = '',
): UseGetUserRepositoriesResult {
  const url = `https://api.github.com/users/${username}/repos`;

  const { data, error, isLoading, mutate } = useSWR(
    username ? url : null,
    swrFetcher,
    {
      revalidateOnFocus: false,
    },
  );
  const repositories: Repository[] = data?.map(
    (repository: Record<string, string>) => ({
      title: repository.name,
      description: repository.description,
      stars: repository.stargazers_count,
    }),
  );

  return {
    repositories,
    repositoriesError: error,
    isRepositoriesLoading: isLoading,
    refetchRepositories: mutate,
  };
}
