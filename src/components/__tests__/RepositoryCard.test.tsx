import { render, screen } from '@testing-library/react';

import RepositoryCard, { RepositoryCardProps } from '../RepositoryCard';

function setup(props: RepositoryCardProps) {
  return render(<RepositoryCard {...props} />);
}

describe('RepositoryCard', () => {
  test('render repo information', async () => {
    const props = {
      title: 'Any title',
      description: 'Any description',
      stars: 4,
    };
    setup(props);

    await screen.findByText(props.title);
    await screen.findByText(props.description);
    await screen.findByText(props.stars);
  });
});
