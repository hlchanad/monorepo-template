export declare const API_BASE_PATH: "/api";
export declare const HEALTHCHECK_PATH: "/healthcheck";
export declare const OPENAPI_PATH: "/openapi";
export type HealthcheckResponse = {
    status: "ok";
    message: string;
    timestamp: string;
    stage?: string;
};
export type OpenApiDocument = {
    openapi: string;
    info: {
        title: string;
        version: string;
    };
    servers?: Array<{
        url: string;
    }>;
    components?: {
        schemas?: Record<string, unknown>;
    };
    paths: Record<string, unknown>;
};
export declare const OPENAPI_DOCUMENT: OpenApiDocument;
