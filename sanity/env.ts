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

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

if (!projectId && process.env.NODE_ENV !== "production") {
  // Visible during local dev so the missing config is obvious.
  console.warn(
    "[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Add it to .env.local — see .env.example.",
  );
}
