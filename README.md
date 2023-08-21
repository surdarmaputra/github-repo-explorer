# GitHub Repo Explorer

A simple GitHub repositories explorer to list down repositories for certain users. Bootstrapped with Vite, React and TypeScript.

## Getting Started

### Prerequisites

- Node v18
- Yarn

Clone the repository:

```bash
# using SSH
git clone git@github.com:surdarmaputra/github-repo-explorer.git

# or using HTTPS
git clone https://github.com/surdarmaputra/github-repo-explorer.git
```

Install dependencies:

```bash
cd github-repo-explorer
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to see the result.

The page is auto-updated as you edit the file.

Execute unit and integration test:

```bash
# Run all tests
yarn test

# Run specific tests
yarn test src/components/__tests__/UserRepositoriesGroups.test.tsx

# Run specific tests and watch for changes
yarn test --watch src/components/__tests__/UserRepositoriesGroups.test.tsx

```

## Project Convention

- File naming convention:
  - `PascalCase` for component, interface, type and enum.
  - `camelCase` for other files including hook, utils and API hook.
- API calls should be wrapped using [SWR](https://swr.vercel.app/) and located in `src/api` directory with the following convention:
  - Written as a hook with file name prefix `use*`.
  - Return at least 4 properties: the resulting data, loading, error and refetch function.
- Test files are located under `__tests__` directory on the same level as the item being tested.
- Use [msw](https://mswjs.io/) for API testing with mocked responses configured in `src/__msw__/handlers.ts`.
- Create one file for one type or interface in `src/types` directory to prevent bloated types files in the future. Put the enum in `src/types/enums.ts`.
- Every changes should be using pull requests into `main` branch to validate lint rules and tests before merging.

## References

- [Vite documentation](https://vitejs.dev/) - learn about Vite features and API.
- [Deploy to Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - create a new deployment on Vercel.
