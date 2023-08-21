import { UserType } from './enums';

/**
 * GitHub User
 * URL: https://api.github.com/search/users?q=<keyword>&per_page=<limit>
 * Generated from: https://app.quicktype.io/
 * */
export default interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: UserType;
  site_admin: boolean;
  score: number;
}
