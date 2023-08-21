import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import usersResponse from '@/__mocks__/usersResponse';

import Home from '../Home';

function setup() {
  return render(<Home />);
}

describe('Home', () => {
  test('search user', async () => {
    setup();
    const view = userEvent.setup();

    const keywordInput = await screen.findByPlaceholderText(/Enter username/);
    await view.type(keywordInput, 'anystring');
    await view.click(screen.getByRole('button', { name: /Search/ }));

    const groups = await screen.findAllByTestId('UserRepositoriesGroup');
    expect(groups.length).toBe(usersResponse.items.length);
  });

  test('handle empty result', async () => {
    setup();
    const view = userEvent.setup();

    const keywordInput = await screen.findByPlaceholderText(/Enter username/);
    await view.type(keywordInput, 'usernotfound');
    await view.click(screen.getByRole('button', { name: /Search/ }));

    await screen.findByText(/No Result/);
    expect(screen.queryAllByTestId('UserRepositoriesGroup').length).toBeFalsy();
  });
});
