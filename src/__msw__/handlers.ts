import { rest } from 'msw';

import userRepositoriesResponse from '../__mocks__/userRepositoriesResponse';
import usersResponse from '../__mocks__/usersResponse';

const handlers = [
  rest.get('https://api.github.com/search/users', (req, res, ctx) => {
    if (req.url.toString().includes('usernotfound')) {
      return res(
        ctx.status(200),
        ctx.json({
          ...usersResponse,
          items: [],
          total_count: 0,
        }),
      );
    }

    return res(ctx.status(200), ctx.json(usersResponse));
  }),
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
