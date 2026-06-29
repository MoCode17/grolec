import { defineField, defineType } from "sanity";
import { CommentIcon } from "@sanity/icons";

/** Collection: a customer testimonial / review. */
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Customer name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "suburb",
      title: "Suburb",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Star rating",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5).integer(),
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
    select: { title: "name", subtitle: "suburb" },
  },
});
