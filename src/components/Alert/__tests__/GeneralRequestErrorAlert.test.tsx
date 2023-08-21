import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GeneralRequestErrorAlert, {
  GeneralRequestErrorAlertProps,
} from '../GeneralRequestErrorAlert';

function setup(props: GeneralRequestErrorAlertProps) {
  return render(<GeneralRequestErrorAlert {...props} />);
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('GeneralRequestErrorAlert', () => {
  test('show message', async () => {
    setup({ onRetry: jest.fn() });
    await screen.findByText(/Oops, something wrong!/);
    await screen.findByText(
      /Your request cannot be processed. Please try again in a moment./,
    );
  });

  test('click retry', async () => {
    const handleRetry = jest.fn();
    setup({ onRetry: handleRetry });

    const view = userEvent.setup();
    await view.click(await screen.findByRole('button', { name: /Retry/ }));
    await waitFor(() => expect(handleRetry).toHaveBeenCalledTimes(1));
  });
});
