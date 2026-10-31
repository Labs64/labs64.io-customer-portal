# Labs64.IO :: Customer Portal

**A self-service portal your customers sign in to.**
*Part of the [Labs64.IO Ecosystem](https://labs64.io): the customer-facing single-page app of the platform.*

[![CI](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml/badge.svg)](https://github.com/Labs64/labs64.io-customer-portal/actions/workflows/labs64io-fe-ci.yml)
[![Docker Image Version](https://img.shields.io/docker/v/labs64/customer-portal-ui?label=Docker&logo=docker&logoColor=white&color=1C90ED)](https://hub.docker.com/r/labs64/customer-portal-ui)
[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/labs64io-helm-charts)](https://artifacthub.io/packages/helm/labs64io-helm-charts/customer-portal)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![📖 Documentation](https://img.shields.io/badge/📖-Documentation-AB6543.svg)](https://labs64.io/docs/modules/customer-portal/)

<p align="center"><img src="docs/assets/customer-portal-hero.svg" alt="Customer Portal: An exploded view of the Customer Portal image: a Vue 3 app, static files, unprivileged nginx and any host collapse into one static image, while sign-in happens with OIDC at the gateway edge." width="880"></p>

[**Get started**](https://labs64.io/docs/modules/customer-portal/#quick-start) · [Features](#features) · [Architecture](https://labs64.io/docs/modules/customer-portal/#architecture) · [AI agents](#using-it-with-ai-agents) · [Ecosystem](#the-labs64io-ecosystem) · [Documentation](https://labs64.io/docs/modules/customer-portal/) · [labs64.io](https://labs64.io)

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

## Features

- **Vue 3 SPA**: Composition API, Bootstrap 5 and Bootstrap Vue Next.
- **Module federation**: `@originjs/vite-plugin-federation` is available for composing micro-frontends.
- **Small, safe image**: multi-stage build, served by unprivileged nginx.
- **Tested**: unit tests with Vitest, end-to-end tests with Playwright, linted with ESLint.

## What is here today

| In the repository | Planned |
|---|---|
| Vue 3 + Vite + TypeScript single-page app with a home page and a shopping-cart page | `customer-portal-be`, a Java backend |
| Multi-stage Docker build served by unprivileged nginx | Account, subscription and order views backed by the platform APIs |
| Unit tests (Vitest), end-to-end tests (Playwright), ESLint | Runtime configuration through a mounted file |
| Helm chart and a published `edge` image | A tagged release image |

## Using it with AI agents

Customer Portal is a human-facing app, so agents mostly work on it rather than through it. The [guide for AI agents](https://labs64.io/docs/introduction/ai-agents.html) covers authentication, retries and errors across all modules. Working on this repository with an agent? [`AGENTS.md`](AGENTS.md) and [`CLAUDE.md`](CLAUDE.md) describe the layout, conventions and test commands.

## The Labs64.IO Ecosystem

Customer Portal is one module of the [Labs64.IO Ecosystem](https://labs64.io); [every module is documented here](https://labs64.io/docs/).

| Module | What it does | Link |
|---|---|---|
| **AuditFlow** | Audit-event routing pipeline | [labs64.io-auditflow](https://github.com/Labs64/labs64.io-auditflow) |
| **API Gateway** | Authenticating, policy-enforcing edge for all modules | [labs64.io-authproxy](https://github.com/Labs64/labs64.io-authproxy) |
| **Payment Gateway** | One API over multiple payment providers | [labs64.io-payment-gateway](https://github.com/Labs64/labs64.io-payment-gateway) |
| **Checkout** | Embeddable, brandable checkout | [labs64.io-checkout](https://github.com/Labs64/labs64.io-checkout) |
| **Reporting** | Read-only reports over the events AuditFlow stored | [labs64.io-reporting](https://github.com/Labs64/labs64.io-reporting) |
| **Customer Portal** | Customer self-service UI | [labs64.io-customer-portal](https://github.com/Labs64/labs64.io-customer-portal) |
| **Commons** | Shared Java and Python libraries | [labs64.io-commons](https://github.com/Labs64/labs64.io-commons) |
| **Helm Charts** | Kubernetes deployment for every module | [labs64.io-helm-charts](https://github.com/Labs64/labs64.io-helm-charts) |
| **Workspace** | Dev container and multi-repo tooling | [labs64.io-workspace](https://github.com/Labs64/labs64.io-workspace) |
| **Tests** | Cross-module regression suite | [labs64.io-tests](https://github.com/Labs64/labs64.io-tests) |
| **Docs** | Published documentation | [labs64.io-docs](https://github.com/Labs64/labs64.io-docs) |
| **NetLicensing** | Licensing-as-a-Service: license and entitlement management | [netlicensing.io](https://netlicensing.io) |
| **GuideChimp** | Interactive guided product tours | [labs64.com/guidechimp](https://www.labs64.com/guidechimp/) |

## Contributing

We would love your help. Because the portal is young, shaping what it should do first is as valuable as code: open an issue describing what your customers need. Fork the repository, make your change on a branch, run the checks described in [`AGENTS.md`](AGENTS.md) and open a pull request. Not sure whether an idea fits? Open an issue first and we will talk it through; that is a perfectly good way to start.

## License

Everything in this repository is open source under the [Apache License 2.0](LICENSE): you can use it, change it and ship it commercially. The core of the *Labs64.IO Ecosystem* is free forever; community modules are Apache-2.0 licensed.

---

<p align="center">
  <a href="https://labs64.io"><img alt="Labs64.IO" src="https://labs64.io/docs/assets/images/labs64-logo.png" width="110"></a><br>
  <sub>Made by the <a href="https://labs64.io">Labs64</a> team and community.</sub>
</p>
