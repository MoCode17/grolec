import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * Collection: a portfolio project. Used by the homepage "Recent Work" grid and
 * the Projects page (featured + gallery). Images are uploaded into Sanity so
 * the client can swap them without touching code.
 */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: 'e.g. "Residential", "Commercial".',
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "scope",
      title: "Scope of work",
      description: "Bullet points shown on the featured project.",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "featured",
      title: "Featured project?",
      description: "If on, this shows as the large featured project. Use on one project.",
      type: "boolean",
      initialValue: false,
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
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
