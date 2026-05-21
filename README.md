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
2. Copy env template: `cp .env.example .env`
3. Fill `.env` with your keys (`SERVERLESS_ACCESS_KEY`, AWS creds)
4. Start isolated E2E LocalStack: `npm run e2e:start`
5. E2E(LocalStack) deploy path: `npm run deploy:e2e`
6. Deploy dev: `npm run deploy:dev`

## E2E URLs

- Backend base URL: `http://localhost:4566/restapis/<api-id>/e2e/_user_request_/api`
- Healthcheck: `http://localhost:4566/restapis/<api-id>/e2e/_user_request_/api/healthcheck`
- OpenAPI UI: `http://localhost:4566/restapis/<api-id>/e2e/_user_request_/api/openapi`
- Frontend website: `http://localhost:4566/monorepo-template-e2e-web/index.html`

## Routes

- `GET /api/healthcheck`
- `GET /api/openapi` (Swagger UI webpage)
