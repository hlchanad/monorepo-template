import {
  API_BASE_PATH,
  HEALTHCHECK_PATH,
  OPENAPI_PATH,
  type HealthcheckResponse,
  type OpenApiDocument
} from "@template/api-types";

const baseUrl = import.meta.env.VITE_API_BASE_URL || API_BASE_PATH;

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

export const api = {
  healthcheck: () => getJson<HealthcheckResponse>(HEALTHCHECK_PATH),
  openapi: () => getJson<OpenApiDocument>(OPENAPI_PATH)
};
