# AGENTS.md — Labs64.IO :: Customer Portal

Guidance for AI agents working in this repository. Read this before making changes.

## What this project is

Customer-facing portal for the Labs64.IO ecosystem. Currently a Vue 3 frontend SPA; Java backend is planned but not yet implemented.

## Repository layout

| Path | Service | Stack | Port | Role |
|------|---------|-------|------|------|
| `customer-portal-fe/` | Frontend | Vue 3, Vite 7, Pinia, TypeScript | 5173 (dev), 80 (nginx) | Customer portal UI |
| `customer-portal-be/` | Backend | (stub — just a justfile) | — | Placeholder |

## Critical guardrails

1. **Never hardcode credentials.** Use environment variables or Kubernetes Secrets.
2. **Preserve non-root user `l64user`** (uid/gid 1064) in all Dockerfiles.
3. **Each repo has its own git history** — do not cross-commit between repositories.

## Frontend (`customer-portal-fe`) details

- **Vue 3** with Composition API, TypeScript, Vite 7, Pinia state management.
- **UI**: Bootstrap 5 + Bootstrap Vue Next.
- **E2E tests**: Cypress (config: `cypress.config.ts`).
- **Unit tests**: Vitest.
- **Linting**: ESLint + Prettier.
- **Module federation**: `@originjs/vite-plugin-federation` (available but usage TBD).
- **Runtime config**: `env.json` mounted as ConfigMap in Kubernetes.

### Dockerfile

- Multi-stage: Node.js builder → `nginx:alpine` runtime
- Custom `nginx.conf` for SPA routing
- Exposes port 80

## Build, run, test

```bash
cd customer-portal-fe
just build              # npm install + npm run build
just dev-up             # docker compose up
just dev-down           # docker compose down
```

Other commands via npm:
```bash
npm run test:unit       # Vitest unit tests
npm run test:e2e:dev    # Cypress E2E (dev server)
npm run test:e2e        # Cypress E2E (production build)
npm run lint            # ESLint
```

Local URLs: frontend `http://localhost:5173`.

## Conventions

- **Vue 3** with Composition API, TypeScript, Vite 7, Pinia.
- **Unit tests**: Vitest. **E2E**: Cypress.
- **Bootstrap 5** + Bootstrap Vue Next for UI components.
- All Dockerfiles run as non-root user `l64user` (uid/gid 1064).

## Where to make common changes

| Goal | Where |
|------|-------|
| Modify frontend components | `customer-portal-fe/src/` |
| Change E2E tests | `customer-portal-fe/cypress/` |
| Modify nginx config | `customer-portal-fe/nginx.conf` |
| Change Vite config | `customer-portal-fe/vite.config.ts` |
