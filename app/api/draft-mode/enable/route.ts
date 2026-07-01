import { defineEnableDraftMode } from "next-sanity/draft-mode";

import { client } from "@/sanity/lib/client";

/**
 * Enables Draft Mode for the Presentation tool's live preview. next-sanity
 * validates the preview request against the read token, sets the draft cookie,
 * and redirects to the page being previewed.
 */
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
