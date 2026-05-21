import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { api } from "./api";
import { API_BASE_PATH, OPENAPI_PATH } from "@template/api-types";
export function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const openApiUrl = `${import.meta.env.VITE_API_BASE_URL || API_BASE_PATH}${OPENAPI_PATH}`;
    useEffect(() => {
        api.healthcheck().then(setData).catch((err) => setError(err.message));
    }, []);
    return (_jsxs("main", { style: { fontFamily: "sans-serif", maxWidth: 760, margin: "40px auto", padding: "0 16px" }, children: [_jsx("h1", { children: "Monorepo Template Starter" }), !data && !error && _jsx("p", { children: "Loading /healthcheck ..." }), error && _jsxs("p", { style: { color: "crimson" }, children: ["Error: ", error] }), data && (_jsxs("section", { children: [_jsx("h2", { children: "Healthcheck" }), _jsx("pre", { children: JSON.stringify(data, null, 2) })] })), _jsxs("p", { children: ["OpenAPI route: ", _jsx("a", { href: openApiUrl, children: OPENAPI_PATH })] })] }));
}
