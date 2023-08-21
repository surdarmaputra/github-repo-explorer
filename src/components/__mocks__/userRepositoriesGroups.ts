import { UserRepositoriesGroup } from '../../types';

const userRepositoriesGroups: UserRepositoriesGroup[] = [
  {
    username: 'username1',
    repositories: [],
  },
  {
    username: 'username2',
    repositories: [
      {
        title: 'repo 1',
        description: 'repo 1 description',
        stars: 100,
      },
    ],
  },
  {
    username: 'username3',
    repositories: [
      {
        title: 'repo 1',
        description: 'repo 2 description',
        stars: 0,
      },
      {
        title: 'repo 2',
        description: 'repo 3 description',
        stars: 10,
      },
    ],
  },
];

export default userRepositoriesGroups;
