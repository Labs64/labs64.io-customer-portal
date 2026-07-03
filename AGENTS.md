# AGENTS.md — Labs64.IO :: Customer Portal

Customer-facing portal — Vue 3 frontend SPA. Java backend planned but not yet implemented.

## Repository layout

| Path | Service | Stack | Port |
|------|---------|-------|------|
| `customer-portal-fe/` | Frontend | Vue 3, Vite 7, Pinia, TypeScript | 5173 (dev) |
| `customer-portal-be/` | Backend | (stub) | — |

## Frontend details

- Vue 3 Composition API, Bootstrap 5 + Bootstrap Vue Next.
- E2E: Cypress. Unit: Vitest. Linting: ESLint + Prettier.
- Module federation available (`@originjs/vite-plugin-federation`) but usage TBD.
- Runtime config: `env.json` mounted as ConfigMap in K8s.

## Build, run, test

```bash
cd customer-portal-fe
just build          # npm install + npm run build
just dev-up         # docker compose up
just dev-down       # docker compose down
npm run test:unit   # Vitest
npm run test:e2e    # Cypress E2E
npm run lint        # ESLint
```

Local URL: `http://localhost:5173`.

## Where to make common changes

| Goal | Where |
|------|-------|
| Frontend components | `customer-portal-fe/src/` |
| E2E tests | `customer-portal-fe/cypress/` |
| Vite config | `customer-portal-fe/vite.config.ts` |
