import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

/**
 * Singleton: all editable copy on the homepage. Section ORDER and layout stay
 * in code — the client only fills in the wording, badges, and the Why-Grolec
 * image/value points.
 */
export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "trustBar", title: "Trust Bar" },
    { name: "why", title: "Why Grolec" },
    { name: "intros", title: "Section Intros" },
  ],
  fields: [
    // ---- Hero ----
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          description: 'Small label, e.g. "Melbourne Electricians".',
          type: "string",
        }),
        defineField({
          name: "headingLine1",
          title: "Heading — line 1",
          description: 'e.g. "Powering".',
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "headingLine2",
          title: "Heading — line 2 (accent colour)",
          description: 'Shown in copper, e.g. "Your Ideas.".',
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "subheading",
          title: "Subheading",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "trustBadges",
          title: "Hero trust badges",
          description: "Short badges under the hero (e.g. Licensed & Insured).",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          validation: (rule) => rule.max(4),
        }),
      ],
    }),
    // ---- Trust bar ----
    defineField({
      name: "trustBar",
      title: "Trust bar items",
      type: "array",
      group: "trustBar",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
          ],
          preview: { select: { title: "title", subtitle: "subtitle" } },
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
    // ---- Why Grolec ----
    defineField({
      name: "why",
      title: "Why Grolec",
      type: "object",
      group: "why",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({
          name: "heading",
          title: "Heading",
          description: 'Full heading text, e.g. "No Surprises. Just Solid Electrical Work."',
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text (for accessibility)",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "badgeText",
          title: "Image badge text",
          description: 'e.g. "Melbourne Based — Licensed & insured since day one."',
          type: "string",
        }),
        defineField({
          name: "valuePoints",
          title: "Value points",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "desc",
                  title: "Description",
                  type: "text",
                  rows: 2,
                }),
              ],
              preview: { select: { title: "title", subtitle: "desc" } },
            }),
          ],
          validation: (rule) => rule.max(4),
        }),
      ],
    }),
    // ---- Section intros ----
    defineField({
      name: "servicesIntro",
      title: "Services section intro",
      type: "object",
      group: "intros",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "projectsIntro",
      title: "Projects section intro",
      type: "object",
      group: "intros",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "testimonialsIntro",
      title: "Testimonials section intro",
      type: "object",
      group: "intros",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "ratingValue",
          title: "Headline rating (e.g. 4.9)",
          type: "number",
        }),
        defineField({
          name: "reviewCount",
          title: "Number of reviews",
          type: "number",
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
