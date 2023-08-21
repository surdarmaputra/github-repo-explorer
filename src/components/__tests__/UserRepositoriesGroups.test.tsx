import { render, screen, within } from '@testing-library/react';

import userRepositoriesGroups from '../__mocks__/userRepositoriesGroups';
import UserRepositoriesGroups, {
  UserRepositoriesGroupsProps,
} from '../UserRepositoriesGroups';

function setup(props: UserRepositoriesGroupsProps) {
  return render(<UserRepositoriesGroups {...props} />);
}

describe('UserRepositoriesGroups', () => {
  test('render correct amount of group', async () => {
    setup({ groups: userRepositoriesGroups });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    expect(groups.length).toBe(userRepositoriesGroups.length);
  });

  test('render empty repo', async () => {
    setup({ groups: userRepositoriesGroups });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    const groupWithEmptyRepo = within(groups[0]);
    const mockData = userRepositoriesGroups[0];

    groupWithEmptyRepo.getByText(mockData.username);
    groupWithEmptyRepo.getByText(/No repository/);
  });

  test('render single repo', async () => {
    setup({ groups: userRepositoriesGroups });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    const groupWithRepo = within(groups[1]);
    const mockData = userRepositoriesGroups[1];

    groupWithRepo.getByText(mockData.username);
    const repositories = groupWithRepo.getAllByTestId('RepositoryCard');
    expect(repositories.length).toBe(mockData.repositories.length);
    within(repositories[0]).getByText(mockData.repositories[0].title);
    within(repositories[0]).getByText(mockData.repositories[0].description);
    within(repositories[0]).getByText(mockData.repositories[0].stars);
  });

  test('render multiple repo', async () => {
    setup({ groups: userRepositoriesGroups });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    const groupWithRepo = within(groups[2]);
    const mockData = userRepositoriesGroups[2];

    groupWithRepo.getByText(mockData.username);
    const repositories = groupWithRepo.getAllByTestId('RepositoryCard');
    expect(repositories.length).toBe(mockData.repositories.length);
    within(repositories[0]).getByText(mockData.repositories[0].title);
    within(repositories[0]).getByText(mockData.repositories[0].description);
    within(repositories[0]).getByText(mockData.repositories[0].stars);
    within(repositories[1]).getByText(mockData.repositories[1].title);
    within(repositories[1]).getByText(mockData.repositories[1].description);
    within(repositories[1]).getByText(mockData.repositories[1].stars);
  });
});
