import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Build a CDN URL for a Sanity image field. Usage: urlFor(image).width(800).url() */
export const urlFor = (source: SanityImageSource) => builder.image(source);
