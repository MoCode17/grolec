import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  UsersIcon,
  WrenchIcon,
  ImagesIcon,
  ImageIcon,
  EnvelopeIcon,
  CommentIcon,
} from "@sanity/icons";

/**
 * Custom desk structure.
 *
 * Singletons are rendered as a single editable document (the client cannot
 * create or delete additional copies). Collections are rendered as ordinary
 * lists. This is what keeps the client editing content, not site structure.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ---- Pages (singletons) ----
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About Page")
        .icon(UsersIcon)
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Services Page")
        .icon(WrenchIcon)
        .child(
          S.document().schemaType("servicesPage").documentId("servicesPage"),
        ),
      S.listItem()
        .title("Projects Page")
        .icon(ImagesIcon)
        .child(
          S.document().schemaType("projectsPage").documentId("projectsPage"),
        ),
      S.listItem()
        .title("Contact Page")
        .icon(EnvelopeIcon)
        .child(
          S.document().schemaType("contactPage").documentId("contactPage"),
        ),

      S.divider(),

      // ---- Reusable content (collections) ----
      S.listItem()
        .title("Services")
        .icon(WrenchIcon)
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Projects")
        .icon(ImageIcon)
        .child(S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Testimonials")
        .icon(CommentIcon)
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      S.divider(),

      // ---- Global ----
      S.listItem()
        .title("Site Settings & Contact")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
    ]);
