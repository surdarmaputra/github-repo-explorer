import { render, screen } from '@testing-library/react';

import repository from '../__mocks__/repository';
import RepositoryCard, { RepositoryCardProps } from '../RepositoryCard';

function setup(props: RepositoryCardProps) {
  return render(<RepositoryCard {...props} />);
}

describe('RepositoryCard', () => {
  test('render repo information', async () => {
    setup(repository);

    await screen.findByText(repository.title);
    await screen.findByText(repository.description);
    await screen.findByText(repository.stars);
  });
});
