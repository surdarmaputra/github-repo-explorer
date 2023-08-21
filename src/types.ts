export interface Repository {
  title: string;
  description: string;
  stars: number;
}

export interface UserRepositoriesGroup {
  username: string;
  repositories: Repository[];
}
