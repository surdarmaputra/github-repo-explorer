import User from './User';

/**
 * GitHub User Response
 * URL: https://api.github.com/search/users?q=<keyword>&per_page=<limit>
 * Generated from: https://app.quicktype.io/
 * */
export default interface UsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
