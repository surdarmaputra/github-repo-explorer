import { rest } from 'msw';

import userRepositoriesResponse from '../__mocks__/userRepositoriesResponse';

const handlers = [
  rest.get(
    'https://api.github.com/users/userwithoutrepo/repos',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json([]));
    },
  ),
  rest.get('https://api.github.com/users/*/repos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(userRepositoriesResponse));
  }),
];

export default handlers;
