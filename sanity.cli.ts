import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity/env";

/**
 * Config for the Sanity CLI (`npx sanity ...`), e.g. deploying GraphQL,
 * importing/exporting datasets, or managing CORS origins.
 */
export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
});
