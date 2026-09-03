// Server-only access to runtime bindings.
// Vercel port: there are no Cloudflare bindings here — process.env stands in so
// the inquiry form's server function compiles and gracefully reports that the
// database is not connected (showcase copy), instead of crashing.
import type {
  D1Database,
  DurableObjectNamespace,
  KVNamespace,
  R2Bucket,
} from "@cloudflare/workers-types";

type AppEnv = {
  DB?: D1Database;
  STORAGE?: R2Bucket;
  KV?: KVNamespace;
  CONTAINER?: DurableObjectNamespace;
  HF_ENV?: string;
  APP_SLUG?: string;
};

export function bindings(): AppEnv {
  return process.env as unknown as AppEnv;
}