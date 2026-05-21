export const API_BASE_PATH = "/api";
export const HEALTHCHECK_PATH = "/healthcheck";
export const OPENAPI_PATH = "/openapi";
export const OPENAPI_DOCUMENT = {
    openapi: "3.1.0",
    info: {
        title: "Template API",
        version: "0.1.0"
    },
    servers: [{ url: "/" }],
    components: {
        schemas: {
            HealthcheckResponse: {
                type: "object",
                required: ["status", "message", "timestamp"],
                properties: {
                    status: { type: "string", enum: ["ok"] },
                    message: { type: "string" },
                    timestamp: { type: "string", format: "date-time" },
                    stage: { type: "string" }
                }
            }
        }
    },
    paths: {
        [`${API_BASE_PATH}${HEALTHCHECK_PATH}`]: {
            get: {
                summary: "Health check",
                responses: {
                    "200": {
                        description: "Service is healthy",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/HealthcheckResponse"
                                }
                            }
                        }
                    }
                }
            }
        },
    }
};
