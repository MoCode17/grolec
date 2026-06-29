import { type SchemaTypeDefinition } from "sanity";

// Reusable objects
import { pageHero } from "./objects/pageHero";
import { ctaBanner } from "./objects/ctaBanner";

// Singletons (one document each)
import { siteSettings } from "./documents/siteSettings";
import { homePage } from "./documents/homePage";
import { aboutPage } from "./documents/aboutPage";
import { servicesPage } from "./documents/servicesPage";
import { projectsPage } from "./documents/projectsPage";
import { contactPage } from "./documents/contactPage";

// Collections (repeatable documents)
import { service } from "./documents/service";
import { project } from "./documents/project";
import { testimonial } from "./documents/testimonial";

/** Document type names that are singletons (exactly one instance). */
export const singletonTypes = new Set<string>([
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesPage",
  "projectsPage",
  "contactPage",
]);

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // objects
    pageHero,
    ctaBanner,
    // singletons
    siteSettings,
    homePage,
    aboutPage,
    servicesPage,
    projectsPage,
    contactPage,
    // collections
    service,
    project,
    testimonial,
  ],
};
