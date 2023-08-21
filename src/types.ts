export interface Repository {
  title: string;
  description: string;
  stars: number;
}

export interface User {
  id: number;
  login: string;
}

export interface UserRepositoriesGroup {
  username: string;
  repositories: Repository[];
}
