import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { OPENAPI_DOCUMENT } from "@template/api-types";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const specJson = JSON.stringify(OPENAPI_DOCUMENT);
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OpenAPI Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
    <script>
      window.ui = SwaggerUIBundle({
        spec: ${specJson},
        dom_id: '#swagger-ui'
      });
    </script>
  </body>
</html>`;

  return {
    statusCode: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
    body: html
  };
};
