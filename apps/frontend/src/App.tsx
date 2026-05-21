import { useEffect, useState } from "react";
import { api } from "./api";
import { API_BASE_PATH, OPENAPI_PATH } from "@template/api-types";
import type { HealthcheckResponse } from "@template/api-types";

export function App() {
  const [data, setData] = useState<HealthcheckResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const openApiUrl = `${import.meta.env.VITE_API_BASE_URL || API_BASE_PATH}${OPENAPI_PATH}`;

  useEffect(() => {
    api.healthcheck().then(setData).catch((err: Error) => setError(err.message));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 760, margin: "40px auto", padding: "0 16px" }}>
      <h1>Monorepo Template Starter</h1>
      {!data && !error && <p>Loading /healthcheck ...</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      {data && (
        <section>
          <h2>Healthcheck</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </section>
      )}
      <p>
        OpenAPI route: <a href={openApiUrl}>{OPENAPI_PATH}</a>
      </p>
    </main>
  );
}
