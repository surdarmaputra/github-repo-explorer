import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserSearchForm, { UserSearchFormProps } from '../UserSearchForm';

function setup(props: UserSearchFormProps) {
  return render(<UserSearchForm {...props} />);
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('UserSearchForm', () => {
  test('emit search keyword', async () => {
    const handleChange = jest.fn();
    const view = userEvent.setup();

    setup({
      value: {
        keyword: '',
      },
      onChange: handleChange,
    });

    const keywordInput = await screen.findByPlaceholderText(/Enter username/);
    await view.type(keywordInput, 'anystring');
    await view.click(screen.getByRole('button', { name: /Search/ }));

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    expect(handleChange).toHaveBeenCalledWith({
      keyword: 'anystring',
    });
  });

  test('prefil data with existing value', async () => {
    const handleChange = jest.fn();
    setup({
      value: {
        keyword: 'anystring',
      },
      onChange: handleChange,
    });
    const keywordInput =
      await screen.findByPlaceholderText<HTMLInputElement>(/Enter username/);
    expect(keywordInput.value).toBe('anystring');
  });
});
