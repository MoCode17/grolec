import { defineArrayMember, defineField, defineType } from "sanity";
import { WrenchIcon } from "@sanity/icons";

/**
 * Collection: one document per service (Residential / Commercial / Emergency).
 * Feeds BOTH the homepage service cards and the detailed Services page.
 *
 * The "icon" field is a fixed preset list — the client picks one, they can't
 * upload or break the inline SVG used in the design.
 */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Home (Residential)", value: "residential" },
          { title: "Building (Commercial)", value: "commercial" },
          { title: "Bolt (Emergency)", value: "emergency" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Short description (homepage card)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "homepageFeatures",
      title: "Homepage card features",
      description: "The short bullet list shown on the homepage service card.",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "detailItems",
      title: "Detailed items (Services page)",
      description: "The fuller label + description list on the Services page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: { select: { title: "label", subtitle: "desc" } },
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "tagline" },
  },
});
