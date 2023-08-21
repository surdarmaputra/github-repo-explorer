import useSWR, { SWRResponse } from 'swr';

import { User } from '../types';
import swrFetcher from '../utils/swrFetcher';

interface UseSearchUsersResult {
  users: User[];
  isUsersLoading: SWRResponse['isLoading'];
  usersError: SWRResponse['error'];
}

export default function useSearchUsers(
  keyword: string = '',
): UseSearchUsersResult {
  const url = `https://api.github.com/search/users?q=${keyword}&per_page=5`;
  const { data, error, isLoading } = useSWR(keyword ? url : null, swrFetcher, {
    revalidateOnFocus: false,
  });
  const users: User[] =
    data?.items?.map((user: Record<string, string>) => ({
      id: user.id,
      login: user.login,
    })) || [];

  return {
    users,
    usersError: error,
    isUsersLoading: isLoading,
  };
}
