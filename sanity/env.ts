/**
 * Sanity environment configuration.
 *
 * All values are read from environment variables so that no project IDs,
 * datasets, or tokens are ever hardcoded. See `.env.example` for the full list.
 *
 * NOTE: We intentionally fall back to safe defaults instead of throwing when a
 * value is missing. This keeps `next build` and Vercel deploys from breaking
 * before the real Sanity project values have been added to the environment.
 * Studio simply won't connect to a real dataset until the values are set.
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// `createClient` throws synchronously if projectId is empty, which would break
// `next build` before real Sanity credentials exist. A syntactically-valid
// placeholder keeps the client constructible; requests simply fail at runtime
// (same as any other missing-config case) instead of at build/import time.
const PLACEHOLDER_PROJECT_ID = "no-project-configured";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || PLACEHOLDER_PROJECT_ID;

if (projectId === PLACEHOLDER_PROJECT_ID) {
  // Also logs in production (e.g. Vercel function logs) so a missing env var
  // on the deployed environment doesn't fail silently with a blank frontend.
  console.warn(
    "[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Add it to .env.local (local dev) or your deployment's environment variables — see .env.example.",
  );
}
