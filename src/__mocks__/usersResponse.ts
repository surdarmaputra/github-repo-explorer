import { UsersResponse, UserType } from '../types';

const usersResponse: UsersResponse = {
  total_count: 130150,
  incomplete_results: false,
  items: [
    {
      login: 'sur',
      id: 8999,
      node_id: 'MDQ6VXNlcjg5OTk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8999?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/sur',
      html_url: 'https://github.com/sur',
      followers_url: 'https://api.github.com/users/sur/followers',
      following_url: 'https://api.github.com/users/sur/following{/other_user}',
      gists_url: 'https://api.github.com/users/sur/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/sur/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/sur/subscriptions',
      organizations_url: 'https://api.github.com/users/sur/orgs',
      repos_url: 'https://api.github.com/users/sur/repos',
      events_url: 'https://api.github.com/users/sur/events{/privacy}',
      received_events_url: 'https://api.github.com/users/sur/received_events',
      type: UserType.User,
      site_admin: false,
      score: 1.0,
    },
    {
      login: 'surma',
      id: 234957,
      node_id: 'MDQ6VXNlcjIzNDk1Nw==',
      avatar_url: 'https://avatars.githubusercontent.com/u/234957?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/surma',
      html_url: 'https://github.com/surma',
      followers_url: 'https://api.github.com/users/surma/followers',
      following_url:
        'https://api.github.com/users/surma/following{/other_user}',
      gists_url: 'https://api.github.com/users/surma/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/surma/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/surma/subscriptions',
      organizations_url: 'https://api.github.com/users/surma/orgs',
      repos_url: 'https://api.github.com/users/surma/repos',
      events_url: 'https://api.github.com/users/surma/events{/privacy}',
      received_events_url: 'https://api.github.com/users/surma/received_events',
      type: UserType.User,
      site_admin: false,
      score: 1.0,
    },
  ],
};

export default usersResponse;
