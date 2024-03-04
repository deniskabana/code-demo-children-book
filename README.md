&nbsp;

<div align="center">

# Next.js 14 - Code demo (Children book)

</div>

&nbsp;

---

## Getting started

Run Next.js development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
Next.js development server includes hot-reloading, detailed error reporting and source maps.

---

## Important info

- Don't use default export, use named export/import.

- Use PascalCase for React component name, file and folder expample `src/components/MyComponent/MyComponent.tsx`

- Always use **useCallback** for callbacks in React components and hooks.
  _Don't worry about using useCallback too often - it has negligible performance impact._

- Use **useMemo** for memoizing **computed values** on which a resource heavy task is run or a potential risk in the future.

- Let Prettier, ESLint and TypeScript do the work for you. Github Copilot is a good tool to use as well.

- Don't use `index.ts` files to re-export other imports.

&nbsp;

[Husky](https://typicode.github.io/husky/#/) is used to run Prettier and ESLint on every commit.

- Before committing, code style check and formatting is performed.
- Before pushing, a static type check is performed, all code is linted and unit tests are run.

[Yarn version 4.x (stable)](https://yarnpkg.com/) with `node_modules` is used as the package manager.

---

## Package.json scripts

```bash
yarn build         # Build the app for production
yarn dev           # Run Next.js development server
yarn health-check  # Code linting, unit testing, static type checking
yarn lint          # Run ESLint
yarn start         # Run Next.js production server
yarn test          # Run unit tests
yarn ts-check      # Run static type checking
```

---

## Requirements

- [Node.js](https://nodejs.org/en/) >=20.6.0
- [Yarn](https://yarnpkg.com/) ^4.1.0

### Recommendations

- [VSCode](https://code.visualstudio.com/) is _recommended_ as the IDE. The project includes a set of recommended extensions. They can be found in `.vscode/extensions.json` file if not installed automatically.
- [Github Copilot](https://copilot.github.com/) is a _recommended_ AI pair programmer tool.

---

## Learn More

- All `README.md` files in all of the sub-folders inside `src/` folder:
  [API](./src/api/README.md), [Assets readme](./src/assets/README.md), [Components](./src/components/README.md), [Hooks](./src/hooks/README.md), [Languages](./src/languages/README.md), [Modules](./src/modules/README.md), [Pages](./src/pages/README.md), [Redux](./src/redux/README.md), [Styles](./src/styles/README.md), [Types](./src/types/README.md), [Utils](./src/utils/README.md) and [Views](./src/views/README.md).

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
