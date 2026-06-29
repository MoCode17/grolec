import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

/**
 * Singleton: global business details shared across the whole site
 * (contact page, footer, navbar) plus the homepage stats row.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings & Contact",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "contact", title: "Contact", default: true },
    { name: "hours", title: "Business Hours" },
    { name: "stats", title: "Stats" },
  ],
  fields: [
    defineField({
      name: "phone",
      title: "Phone number (display)",
      description: 'Shown to visitors, e.g. "0412 345 678".',
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phoneHref",
      title: "Phone number (dial link)",
      description: 'Used for click-to-call, e.g. "+61412345678".',
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "address",
      title: "Address / service area",
      description: 'e.g. "Melbourne, VIC 3000".',
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed URL",
      description:
        "The src URL from a Google Maps 'Embed a map' iframe. Leave as-is unless the location changes.",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "emergencyText",
      title: "Emergency line text",
      description: 'e.g. "Emergency line open 24/7".',
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "businessHours",
      title: "Business hours",
      type: "array",
      group: "hours",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "day", title: "Day(s)", type: "string" }),
            defineField({ name: "time", title: "Hours", type: "string" }),
          ],
          preview: {
            select: { title: "day", subtitle: "time" },
          },
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats row",
      description: "The animated stat counters (jobs, years, rating, etc.).",
      type: "array",
      group: "stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Number",
              type: "number",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "suffix",
              title: 'Suffix (e.g. "+", "★", "%")',
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "decimals",
              title: "Decimal places",
              type: "number",
              initialValue: 0,
            }),
          ],
          preview: {
            select: { title: "label", value: "value", suffix: "suffix" },
            prepare: ({ title, value, suffix }) => ({
              title,
              subtitle: `${value ?? ""}${suffix ?? ""}`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings & Contact" }),
  },
});
