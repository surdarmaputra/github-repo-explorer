import useSWR, { SWRResponse } from 'swr';

import { Repository } from '../types';
import swrFetcher from '../utils/swrFetcher';

interface UseGetUserRepositoriesResult {
  repositories: Repository[] | undefined;
  isRepositoriesLoading: SWRResponse['isLoading'];
  repositoriesError: SWRResponse['error'];
  refetchRepositories: SWRResponse['mutate'];
}

export default function useGetUserRepositories(
  username: string = '',
): UseGetUserRepositoriesResult {
  const url = `https://api.github.com/users/${username}/repos`;

  const { data, error, isLoading, mutate } = useSWR<Repository[]>(
    username ? url : null,
    swrFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  return {
    repositories: data,
    repositoriesError: error,
    isRepositoriesLoading: isLoading,
    refetchRepositories: mutate,
  };
}
