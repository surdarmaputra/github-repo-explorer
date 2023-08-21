import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import userRepositoriesResponse from '../../__mocks__/userRepositoriesResponse';
import UserRepositoriesGroups, {
  UserRepositoriesGroupsProps,
} from '../UserRepositoriesGroups';

const usernamesMock = ['username1', 'userwithoutrepo'];

function setup(props: UserRepositoriesGroupsProps) {
  return render(<UserRepositoriesGroups {...props} />);
}

describe('UserRepositoriesGroups', () => {
  test('render correct amount of group', async () => {
    setup({ usernames: usernamesMock });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    expect(groups.length).toBe(usernamesMock.length);
  });

  test('get repositories when user clicks a group', async () => {
    const view = userEvent.setup();
    setup({ usernames: usernamesMock });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');

    await view.click(screen.getByText(usernamesMock[0]));
    const group = within(groups[0]);
    const repositories = await group.findAllByTestId('RepositoryCard');
    expect(repositories.length).toBe(userRepositoriesResponse.length);
    within(repositories[0]).getByText(userRepositoriesResponse[0].name);
    within(repositories[0]).getByText(userRepositoriesResponse[0].description);
    within(repositories[0]).getByText(
      userRepositoriesResponse[0].stargazers_count,
    );
  });

  test('render empty repo', async () => {
    const view = userEvent.setup();
    setup({ usernames: usernamesMock });
    const groups = await screen.findAllByTestId('UserRepositoriesGroup');

    await view.click(screen.getByText(usernamesMock[1]));
    const group = within(groups[1]);
    await group.findByText(/No repository/);
    expect(group.queryByTestId('RepositoryCard')).toBeFalsy();
  });
});
