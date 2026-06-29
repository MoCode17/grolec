import { defineField, defineType } from "sanity";

/**
 * Reusable call-to-action banner (heading + supporting line). The button link
 * itself is intentionally NOT editable here — it stays hardcoded in the
 * component so the client can't break navigation.
 */
export const ctaBanner = defineType({
  name: "ctaBanner",
  title: "Call-to-action Banner",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Supporting text",
      type: "text",
      rows: 2,
    }),
  ],
});
