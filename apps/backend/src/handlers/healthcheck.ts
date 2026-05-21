import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import type { HealthcheckResponse } from "@template/api-types";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const payload: HealthcheckResponse = {
    status: "ok",
    message: "Service is healthy",
    timestamp: new Date().toISOString(),
    stage: process.env.STAGE
  };

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  };
};
