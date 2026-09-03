import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

// Vercel port: plain TanStack Start handler. The router and request manifest
// come from the plugin-injected entries module — no Worker fetch wrapper here.
export default createStartHandler(defaultStreamHandler);