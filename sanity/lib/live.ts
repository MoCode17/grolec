import { defineLive } from "next-sanity/live";

import { client } from "./client";

/**
 * Live content + draft preview wiring.
 *
 * `sanityFetch` automatically serves published content normally, and draft
 * content when Next.js Draft Mode is enabled (used by the Presentation tool).
 * `<SanityLive />` (rendered once in the layout) keeps pages in sync with
 * content changes without a manual refresh.
 *
 * The read token is only needed to view drafts; published content works
 * without it, so the build never depends on it being set.
 */
const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});

/**
 * Wraps a sanityFetch call so a transient Sanity outage (or missing/invalid
 * project config) degrades to empty content instead of failing the whole page
 * render / build. Components already handle `data` being null/undefined.
 */
export async function safeFetch<R>(
  fetcher: () => Promise<{ data: R }>,
): Promise<{ data: R | null }> {
  try {
    return await fetcher();
  } catch (err) {
    console.error("[sanity] fetch failed, rendering without this content:", err);
    return { data: null };
  }
}
