import { defineQuery } from "next-sanity";

// ---- Singletons ----
export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]`,
);

export const HOME_QUERY = defineQuery(`*[_type == "homePage"][0]`);

export const ABOUT_QUERY = defineQuery(`*[_type == "aboutPage"][0]`);

export const SERVICES_PAGE_QUERY = defineQuery(
  `*[_type == "servicesPage"][0]`,
);

export const PROJECTS_PAGE_QUERY = defineQuery(
  `*[_type == "projectsPage"][0]`,
);

export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "contactPage"][0]`);

// ---- Collections (ordered) ----
export const SERVICES_QUERY = defineQuery(
  `*[_type == "service"] | order(order asc)`,
);

export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"] | order(order asc)`,
);

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order asc)`,
);
