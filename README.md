# 🏢 Enterprise Scale React App

This project was generated using [Nx](https://nx.dev) a set of Extensible Dev Tools for Monorepos.

This is an example repo for the ideas from the talk [How to Build Large Scale React apps](https://slides.com/bigab/how-to-build-large-scale-react-apps) by [Adam L Barrett](https://twitter.com/adamlbarrett). It is obviously **not** large scale or enterprise, but I hope it helps convey the idea of where the boundaries and contracts can lay in the simple architecture to allow multiple teams to work on the app concurrently with fewer problems.

## Development

### Dev Server

Run `nx serve initiative-management` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build initiative-management` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

Libraries are sharable across libraries and applications. They can be imported from `@enterprise/my-lib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=initiative-management` to generate a new Domain Component.

Run `nx g @nrwl/react:component design-system --project=design-system` to generate a new UI Component.

## Running unit tests

Run `nx test my-project` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e initiative-management` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

