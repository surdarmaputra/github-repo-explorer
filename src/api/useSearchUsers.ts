import useSWR, { SWRResponse } from 'swr';

import User from '@/types/User';
import UsersResponse from '@/types/UserResponse';

import swrFetcher from '../utils/swrFetcher';

interface UseSearchUsersResult {
  users: User[] | undefined;
  isUsersLoading: SWRResponse['isLoading'];
  usersError: SWRResponse['error'];
  refetchUsers: SWRResponse['mutate'];
}

export default function useSearchUsers(
  keyword: string = '',
): UseSearchUsersResult {
  const url = `https://api.github.com/search/users?q=${keyword}&per_page=5`;
  const { data, error, isLoading, mutate } = useSWR<UsersResponse>(
    keyword ? url : null,
    swrFetcher,
    {
      revalidateOnFocus: false,
    },
  );
  const users: UseSearchUsersResult['users'] = data?.items;

  return {
    users,
    usersError: error,
    isUsersLoading: isLoading,
    refetchUsers: mutate,
  };
}
