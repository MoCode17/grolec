import { defineArrayMember, defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

/** Singleton: the About page copy. */
export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "pageHero",
    }),
    defineField({
      name: "story",
      title: "Our Story",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Story paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "values",
      title: "Value cards",
      description: "The Quality / Reliability / Value cards.",
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
    }),
    defineField({
      name: "credentialsHeading",
      title: "Credentials heading",
      type: "string",
    }),
    defineField({
      name: "credentials",
      title: "Credentials list",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "coverageArea",
      title: "Coverage area text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "emergencyService",
      title: "Emergency service text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "cta",
      title: "Closing call-to-action",
      type: "ctaBanner",
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
