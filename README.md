<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

All `yarn` commands should be made from the `/client` directory.

## Installation

```
yarn
```

## Development

```
yarn dev
```

This will do two things:

- Start a Next.js app running in development on http://localhost:3000
- Start a graphQL stub server running on http://localhost:3001/graphql

## Testing with Jest

```
yarn test
```

## Visual testing with StoryBook

```
yarn storybook
```

## Add a component

```
yarn generate MyComponentName --dir [component directory]
```

This uses Hygen to generate:

- `MyComponentName.tsx`
- `MyComponentName.module.scss`
- `MyComponentName.stories.tsx`
- `MyComponentName.test.tsx` (add a `--with-test` parameter in the command)
- `index.ts`

It also adds an export to the `index.ts` at the root of the given component directory for easier imports.

## Build the app

```
yarn build
```

And to serve the built app locally, run:

```
yarn start
```

These commands also start up the graphQL stub server, since it's being used to generate the product pages at build time. If it complains that you already have the service running, run:

```
npx kill-port 3001
```

### To do/next steps

- [ ] Auto-generate types from a graphQL schema
- [ ] Cross-browser and responsive testing
- [ ] Add more rigorous unit tests
