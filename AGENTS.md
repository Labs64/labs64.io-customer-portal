# AGENTS.md — Labs64.IO :: Customer Portal

Customer-facing portal — Vue 3 frontend SPA. Java backend planned but not yet implemented.

## Repository layout

| Path | Service | Stack | Port |
|------|---------|-------|------|
| `customer-portal-fe/` | Frontend | Vue 3, Vite, Pinia, TypeScript | 8080 (dev) |
| `customer-portal-be/` | Backend | (stub) | — |

## Critical guardrails

1. **Never hardcode credentials or environment-specific URLs** in the bundle. Runtime configuration is `env.json`, mounted as a ConfigMap, so one image serves every environment.
2. **The image stays non-root.** The nginx-based UI image runs as uid 101 (the workspace's documented exception to `l64user`); do not move it back to root.
3. **No backend exists yet.** Do not document or call an API that is not in a published contract.

## Frontend details

- Vue 3 Composition API, Bootstrap 5 + Bootstrap Vue Next.
- E2E: Playwright. Unit: Vitest. Linting: ESLint + Prettier.
- Module federation available (`@originjs/vite-plugin-federation`) but usage TBD.
- Runtime config: `env.json` mounted as ConfigMap in K8s.

## Build, run, test

```bash
cd customer-portal-fe
just build          # npm install + npm run build
just dev-up         # docker compose up
just dev-down       # docker compose down
npm run test:unit -- --run   # Vitest (without --run it stays in watch mode)
npm run test:e2e    # Playwright E2E
npm run lint        # ESLint — rewrites files (--fix): review the diff
npm run type-check  # vue-tsc
```

Local URL: `http://localhost:8080` (see `vite.config.ts` `server.port`).

## Where to make common changes

| Goal | Where |
|------|-------|
| Frontend components | `customer-portal-fe/src/` |
| E2E tests | `customer-portal-fe/e2e/` |
| Vite config | `customer-portal-fe/vite.config.ts` |

## Working rules for every change

- Judge the change against the **Quality bar for every change** in `labs64.io-workspace/AGENTS.md` (stability of the ecosystem, no regression, no network surprises, performance, HA and resilience, testability, maintainability), and say in the pull request how each applies, or why it does not.
- Every pull request is assigned to its author and added to the `Labs64.IO` GitHub Project (`labs64.io-workspace/AGENTS.md`, "Pull requests").
- Before you push: `cd customer-portal-fe && npm run type-check && npm run test:unit -- --run`.
