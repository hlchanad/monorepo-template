import { API_BASE_PATH, HEALTHCHECK_PATH, OPENAPI_PATH } from "@template/api-types";
const baseUrl = import.meta.env.VITE_API_BASE_URL || API_BASE_PATH;
async function getJson(path) {
    const response = await fetch(`${baseUrl}${path}`);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return (await response.json());
}
export const api = {
    healthcheck: () => getJson(HEALTHCHECK_PATH),
    openapi: () => getJson(OPENAPI_PATH)
};
