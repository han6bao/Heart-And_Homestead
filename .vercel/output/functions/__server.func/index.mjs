import server from "./server.js";
const entry = server && typeof server.fetch === "function" ? server : { fetch: server };
export default async function handler(req, res) {
  try {
    const url = new URL(req.url || "/", "http://" + (req.headers.host || "localhost"));
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(", ") : v);
    const method = req.method || "GET";
    const body = method === "GET" || method === "HEAD" ? undefined : req;
    const response = await entry.fetch(new Request(url, { method, headers, body }), process.env, { waitUntil() {} });
    res.statusCode = response.status;
    response.headers.forEach((v, k) => res.setHeader(k, v));
    if (response.body) {
      const reader = response.body.getReader();
      res.flushHeaders?.();
      for (;;) { const { done, value } = await reader.read(); if (done) break; res.write(value); }
      res.end();
    } else { res.end(await response.text()); }
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
