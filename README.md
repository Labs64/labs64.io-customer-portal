# Labs64.IO :: Customer Portal

**A self-service portal your customers sign in to.**
*Part of the [Labs64.IO Ecosystem](https://labs64.io): the customer-facing single-page app of the platform.*

[![CI](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml/badge.svg)](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml)
[![Docker Image Version](https://img.shields.io/docker/v/labs64/customer-portal-ui?label=Docker&logo=docker&logoColor=white&color=1C90ED)](https://hub.docker.com/r/labs64/customer-portal-ui)
[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/labs64io-helm-charts)](https://artifacthub.io/packages/helm/labs64io-helm-charts/customer-portal)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![📖 Documentation](https://img.shields.io/badge/📖-Documentation-AB6543.svg)](https://labs64.io/docs/modules/customer-portal/)

<p align="center"><img src="docs/assets/customer-portal-hero.svg" alt="Customer Portal: An exploded view of the Customer Portal image: a Vue 3 app, static files, unprivileged nginx and any host collapse into one static image, while sign-in happens with OIDC at the gateway edge." width="880"></p>

[Why Customer Portal?](#why-customer-portal) · [Documentation](https://labs64.io/docs/modules/customer-portal/) · [Build and test](#build-and-test) · [Ecosystem](#the-labs64io-ecosystem) · [labs64.io](https://labs64.io)

> [!NOTE]
> Customer Portal is currently a front-end shell: a Vue 3 single-page app with a home page and a shopping-cart page. A Java backend is planned but not implemented, and the published image is available under the `edge` tag.

## Why Customer Portal?

Customers want to manage their account without writing to support, and the page that lets them should be deployed and secured like the rest of your platform. Customer Portal is the front-end shell for that.

1. **One static image.** A multi-stage build produces files served by unprivileged nginx, so it runs on any cluster or static host.
2. **Fits the edge.** Authentication is handled at the API gateway (OIDC/JWT); the app itself is static files.
3. **Built to be composed.** Module federation support lets micro-frontends plug into the portal.

**A good fit if**

- You are on the Labs64.IO platform and want a customer-facing app that deploys the same way as the services.
- You prefer a static, cache-friendly front end with authentication handled at the gateway.
- You want a Vue 3 starting point you can extend, with unit and end-to-end tests already wired.

**Probably not what you need if**

- You need a finished self-service product today: this is a shell with a home page and a cart page, and the backend is planned.
- You need server-side rendering or a CMS.

## Documentation

Install, configure and operate Customer Portal in the **[Customer Portal documentation](https://labs64.io/docs/modules/customer-portal/)**.

[Quick Start](https://labs64.io/docs/modules/customer-portal/#quick-start) · [Configuration](https://labs64.io/docs/modules/customer-portal/#configuration)

New to Labs64.IO? The [Quickstart](https://labs64.io/docs/getting-started/quickstart.html) puts the platform on any Kubernetes cluster in about five minutes.

## Build and test

```bash
cd customer-portal-fe
npm install
npm run dev          # hot-reload dev server (:8080)
npm run test:unit    # Vitest
npm run test:e2e     # Playwright
npm run lint         # ESLint
```

Needs Node and npm (Docker for the image). Working on the code with an AI agent? [`AGENTS.md`](AGENTS.md) and [`CLAUDE.md`](CLAUDE.md) describe the layout, conventions and checks.

## The Labs64.IO Ecosystem

This repository is part of the [Labs64.IO Ecosystem](https://labs64.io): open-source building blocks for secure commerce platforms. Every module is documented at [labs64.io/docs](https://labs64.io/docs/).

| Module | What it does |
|---|---|
| [**AuditFlow**](https://github.com/Labs64/labs64.io-auditflow) | Publish once, route anywhere, lose nothing |
| [**Auth Gateway**](https://github.com/Labs64/labs64.io-authproxy) | One authenticated edge for every module |
| [**Payment Gateway**](https://github.com/Labs64/labs64.io-payment-gateway) | One API across multiple payment providers |
| [**Checkout**](https://github.com/Labs64/labs64.io-checkout) | Whitelabel checkout and order workflow |
| [**Customer Portal**](https://github.com/Labs64/labs64.io-customer-portal) | Self-service portal for your customers |

Built on [Commons](https://github.com/Labs64/labs64.io-commons), deployed with [Helm Charts](https://github.com/Labs64/labs64.io-helm-charts), developed in the [Workspace](https://github.com/Labs64/labs64.io-workspace), verified by [Tests](https://github.com/Labs64/labs64.io-tests) and documented in [Docs](https://github.com/Labs64/labs64.io-docs). Also from Labs64: [NetLicensing](https://netlicensing.io) for licensing-as-a-service and [GuideChimp](https://www.labs64.com/guidechimp/) for guided product tours.

## Contributing

We would love your help. Because the portal is young, shaping what it should do first is as valuable as code: open an issue describing what your customers need. Fork the repository, make your change on a branch, run the checks described in [`AGENTS.md`](AGENTS.md) and open a pull request. Not sure whether an idea fits? Open an issue first.

## License

Open source under the [Apache License 2.0](LICENSE): use it, change it and ship it commercially.

---

<p align="center">
  <a href="https://labs64.io"><img alt="Labs64.IO" src="https://labs64.io/docs/assets/images/labs64-logo.png" width="110"></a><br>
  <sub>Made by the <a href="https://labs64.io">Labs64</a> team and community.</sub>
</p>
