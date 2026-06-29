import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

/**
 * Singleton: the Contact page copy. The actual phone/email/hours come from
 * "Site Settings & Contact" (siteSettings) so they only need to be edited once.
 */
export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero" }),
    defineField({
      name: "findUsHeading",
      title: '"Find Us" heading',
      type: "string",
    }),
    defineField({
      name: "findUsText",
      title: '"Find Us" supporting text',
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "formHeading",
      title: "Enquiry form heading",
      type: "string",
    }),
    defineField({
      name: "formSubtext",
      title: "Enquiry form subtext",
      type: "text",
      rows: 2,
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
