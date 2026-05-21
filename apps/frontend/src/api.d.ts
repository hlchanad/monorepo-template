import { type HealthcheckResponse, type OpenApiDocument } from "@template/api-types";
export declare const api: {
    healthcheck: () => Promise<HealthcheckResponse>;
    openapi: () => Promise<OpenApiDocument>;
};
