import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

/**
 * Singleton: the Projects page copy. The portfolio items themselves come from
 * the reusable "Project" documents (see project.ts).
 */
export const projectsPage = defineType({
  name: "projectsPage",
  title: "Projects Page",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero" }),
    defineField({
      name: "featuredEyebrow",
      title: "Featured project eyebrow",
      type: "string",
    }),
    defineField({
      name: "galleryEyebrow",
      title: "Gallery eyebrow",
      type: "string",
    }),
    defineField({
      name: "galleryHeading",
      title: "Gallery heading",
      type: "string",
    }),
    defineField({
      name: "galleryText",
      title: "Gallery supporting text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "cta",
      title: "Closing call-to-action",
      type: "ctaBanner",
    }),
  ],
  preview: { prepare: () => ({ title: "Projects Page" }) },
});
