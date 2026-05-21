# Template Monorepo

Lean reusable monorepo template with typed backend/frontend contract, Serverless deployment, LocalStack reference path, and static site hosting.

## Structure

- `apps/backend`: Serverless handlers (`/api/healthcheck`, `/api/openapi`)
- `apps/frontend`: React starter app calling `/api/healthcheck`
- `packages/api-types`: shared route constants and response types
- `packages/tsconfig`: shared TypeScript config
- `packages/eslint-config`: shared lint baseline

## Quickstart

1. `npm install`
2. Local development: `npm run dev`
3. E2E(LocalStack) start: `npm run e2e:start`
4. E2E(LocalStack) deploy: `npm run deploy:e2e`
5. E2E(LocalStack) stop: `npm run e2e:stop`

## Local Dev

- Command: `npm run dev`
- Frontend: `http://127.0.0.1:4001`
- Backend (serverless offline): `http://localhost:4000`
- Healthcheck via frontend proxy: `http://127.0.0.1:4001/api/healthcheck`
- OpenAPI via frontend proxy: `http://127.0.0.1:4001/api/openapi`

## E2E Deployment (LocalStack)

1. Start LocalStack: `npm run e2e:start`
2. Deploy E2E stack: `npm run deploy:e2e`
3. Open frontend website URL
4. Stop LocalStack when done: `npm run e2e:stop`

## E2E URLs

- Backend base URL: `http://localhost:4567/restapis/<api-id>/e2e/_user_request_/api`
- Healthcheck: `http://localhost:4567/restapis/<api-id>/e2e/_user_request_/api/healthcheck`
- OpenAPI UI: `http://localhost:4567/restapis/<api-id>/e2e/_user_request_/api/openapi`
- Frontend website: `http://localhost:4567/monorepo-template-e2e-web/index.html`

## GitHub Deploy Requirements

- Workflow: `.github/workflows/deploy.yml` (manual `workflow_dispatch`)
- Required repository secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `SERVERLESS_ACCESS_KEY`
- Required environment config:
  - `serverless-config/env.dev.yml`
  - `serverless-config/env.prod.yml`
- Ensure domain/cert values are valid for your AWS account:
  - `SITE_ALIAS_DOMAIN`
  - `ACM_CERTIFICATE_ARN_GLOBAL`
- Deploy commands used by workflow:
  - `npm run deploy:dev`
  - `npm run deploy:prod`

## Routes

- `GET /api/healthcheck`
- `GET /api/openapi` (Swagger UI webpage)
