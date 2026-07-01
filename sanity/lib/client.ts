import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

/**
 * Shared Sanity client. `stega.studioUrl` enables the click-to-edit overlay:
 * in Draft Mode, string fields are encoded with invisible markers that the
 * <VisualEditing /> overlay turns into "edit" links pointing back to /studio.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    studioUrl: "/studio",
  },
});
