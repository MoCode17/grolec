"use client";

/**
 * Sanity Studio configuration — mounted at `/studio`.
 *
 * Project ID and dataset come from environment variables (see sanity/env.ts and
 * .env.example). Nothing secret lives in this file.
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema, singletonTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

// Singletons must not be created or deleted by editors.
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // Remove the "create" action for singleton types from global lists.
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => !singletonTypes.has(templateItem.templateId),
        );
      }
      return prev;
    },
    // For singleton documents, only allow content actions (no duplicate/delete).
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(
          ({ action }) =>
            action && singletonActions.has(action),
        );
      }
      return prev;
    },
  },
});
