#!/usr/bin/env bash
# One-click deploy: Heart & Homestead Photography (Vercel showcase copy).
# Usage:
#   ./deploy-vercel.sh            -> deploy to Vercel preview
#   ./deploy-vercel.sh --prod     -> deploy straight to production
set -euo pipefail
cd "$(dirname "$0")"

echo "== Heart & Homestead -> Vercel =="

# 1) Make sure the Vercel CLI exists.
if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found — installing it (one time)..."
  npm install -g vercel
fi

# 2) Make sure we are signed in (opens a browser tab on first run).
if ! vercel whoami >/dev/null 2>&1; then
  echo "Not signed in — open the browser tab that appears and click Allow."
  vercel login
fi

# 3) The prebuilt bundle must exist. If it is missing, it can be regenerated:
#    bun install && bun run build && re-scaffold .vercel/output (see README).
if [ ! -d ".vercel/output" ]; then
  echo "ERROR: .vercel/output not found. Re-download the zip or rebuild (see README-VERCEL.md, Troubleshooting)."
  exit 1
fi

# 4) Deploy. --prebuilt ships the existing bundle without running a build.
FLAGS=( --prebuilt --yes )
if [ "${1:-}" = "--prod" ]; then
  FLAGS+=( --prod )
fi
echo "Deploying${1:+ $1}..."
URL=$(vercel deploy "${FLAGS[@]}" "$PWD" 2>&1 | tail -1)

# bundle works regardless; print a clean result if we captured a URL
if [[ "$URL" == https://* ]]; then
  echo "Live at: $URL"
else
  echo "Deploy command finished. URL above (or check the Vercel dashboard)."
fi