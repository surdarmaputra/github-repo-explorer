import 'cross-fetch/polyfill';

import server from './src/__msw__/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
