import { defineField, defineType } from "sanity";

/**
 * Reusable hero block for the About / Services / Projects / Contact page tops.
 * Plain text only — no layout controls, so the client can change wording
 * without affecting the design.
 */
export const pageHero = defineType({
  name: "pageHero",
  title: "Page Hero",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow (small label above the heading)",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "text",
      rows: 3,
    }),
  ],
});
