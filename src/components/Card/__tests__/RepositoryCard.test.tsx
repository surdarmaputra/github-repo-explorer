import { render, screen } from '@testing-library/react';

import userRepositoriesResponse from '@/__mocks__/userRepositoriesResponse';

import RepositoryCard, { RepositoryCardProps } from '../RepositoryCard';

function setup(props: RepositoryCardProps) {
  return render(<RepositoryCard {...props} />);
}

describe('RepositoryCard', () => {
  test('render repo information', async () => {
    const props = {
      name: userRepositoriesResponse[0].name,
      description: userRepositoriesResponse[0].description,
      stargazersCount: userRepositoriesResponse[0].stargazers_count,
    };
    setup(props);

    await screen.findByText(props.name);
    await screen.findByText(props.description);
    await screen.findByText(props.stargazersCount);
  });
});
