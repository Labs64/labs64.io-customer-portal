<p align="center"><img src="https://raw.githubusercontent.com/Labs64/.github/refs/heads/master/assets/labs64-io-ecosystem.png"></p>

# Labs64.IO :: Customer Portal

[![CI](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml/badge.svg)](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml)
[![Docker Image Version](https://img.shields.io/docker/v/labs64/customer-portal-ui?logo=docker&logoColor=white&color=1C90ED)](https://hub.docker.com/r/labs64/customer-portal-ui)
[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/labs64io-helm-charts)](https://artifacthub.io/packages/helm/labs64io-helm-charts/customer-portal)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![📖 Documentation](https://img.shields.io/badge/📖-Documentation-AB6543.svg)](https://labs64.io/docs/index.html)

Self-service portal for Labs64.IO end-users — a Vue 3 single-page app for managing
accounts, subscriptions, and their interactions with the ecosystem's services.
Authentication is handled at the edge via the Traefik auth-proxy (OIDC/JWT). A Java
backend is planned but not yet implemented; see [`AGENTS.md`](AGENTS.md) for the
current layout and developer guide.

## Key Features

- Vue 3 (Composition API) SPA with Bootstrap 5 + Bootstrap Vue Next.
- Runtime configuration injected via a mounted `env.json` ConfigMap — the same image runs in every environment.
- Module federation support (`@originjs/vite-plugin-federation`) for composing micro-frontends.
- Multi-stage Docker build (Node for building, Nginx for serving).

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

## License

The core of the *Labs64.IO Ecosystem* is entirely open source and free forever. Community modules are licensed under [Apache License 2.0](LICENSE).
