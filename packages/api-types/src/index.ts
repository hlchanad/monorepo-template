export const API_BASE_PATH = "/api" as const;
export const HEALTHCHECK_PATH = "/healthcheck" as const;
export const OPENAPI_PATH = "/openapi" as const;

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
  servers?: Array<{ url: string }>;
  components?: {
    schemas?: Record<string, unknown>;
  };
  paths: Record<string, unknown>;
};

export const OPENAPI_DOCUMENT: OpenApiDocument = {
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
