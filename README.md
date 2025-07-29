<p align="center"><img src="https://raw.githubusercontent.com/Labs64/.github/refs/heads/master/assets/labs64-io-ecosystem.png"></p>

# Labs64.IO :: Customer Portal
## TODO

![Docker Image Version](https://img.shields.io/docker/v/labs64/auditflow?logo=docker&logoColor=%23E14817&color=%23E14817) - TODO

TODO

## Key Features

* TODO

## 🐳 Docker Support

This project includes a ready-to-use `Dockerfile` for a multi-stage production build using **Node.js** (for building) and **Nginx** (for serving the built files).

### Build and Run the App with Docker

1. Build the frontend assets:

```bash
npm run build
```
2. Build the Docker image (if needed):

```bash
docker build -t customer-portal .
```

3. Start the container using Docker Compose, which mounts the local dist folder into the container:
```bash
docker compose up -d
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Labs64/labs64.io-customer-portal&type=Date)](https://www.star-history.com/#Labs64/labs64.io-customer-portal&Date)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
