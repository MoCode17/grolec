import { defineField, defineType } from "sanity";
import { WrenchIcon } from "@sanity/icons";

/**
 * Singleton: the Services page copy. The individual service cards/details come
 * from the reusable "Service" documents (see service.ts), not from here.
 */
export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero" }),
    defineField({
      name: "introEyebrow",
      title: "Intro eyebrow",
      type: "string",
    }),
    defineField({
      name: "introHeading",
      title: "Intro heading",
      description: 'e.g. "Three areas of expertise."',
      type: "string",
    }),
    defineField({
      name: "cta",
      title: "Closing call-to-action",
      type: "ctaBanner",
    }),
  ],
  preview: { prepare: () => ({ title: "Services Page" }) },
});
