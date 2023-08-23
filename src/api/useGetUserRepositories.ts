import { SWRResponse } from 'swr';
import useSWRInfinite, { SWRInfiniteResponse } from 'swr/infinite';

import Repository from '@/types/Repository';

import swrFetcher from '../utils/swrFetcher';

interface UseGetUserRepositoriesResult {
  repositories: Repository[][] | undefined;
  isRepositoriesLoading: SWRResponse['isLoading'];
  isRepositoriesValidating: SWRResponse['isValidating'];
  repositoriesError: SWRResponse['error'];
  refetchRepositories: SWRResponse['mutate'];
  repositoriesSize: SWRInfiniteResponse['size'];
  setRepositoriesSize: SWRInfiniteResponse['setSize'];
}

export default function useGetUserRepositories(
  username: string = '',
): UseGetUserRepositoriesResult {
  const getKey = (pageIndex: number, previousPageData: Repository[]) => {
    if (!username || (pageIndex > 0 && !previousPageData?.length)) return null;
    return `https://api.github.com/users/${username}/repos?page=${
      pageIndex + 1
    }`;
  };

  const { data, error, isLoading, isValidating, mutate, size, setSize } =
    useSWRInfinite<Repository[]>(getKey, swrFetcher, {
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    });

  return {
    repositories: data,
    repositoriesError: error,
    isRepositoriesLoading: isLoading,
    isRepositoriesValidating: isValidating,
    refetchRepositories: mutate,
    repositoriesSize: size,
    setRepositoriesSize: setSize,
  };
}
