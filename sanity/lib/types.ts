import type { SanityImageSource } from "@sanity/image-url";

/** Shared shapes for content fetched from Sanity. Kept hand-written and loose
 *  (fields optional) so a partially-filled dataset never crashes rendering. */

export type SanityImage = SanityImageSource & { alt?: string };

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface TitleDesc {
  title?: string;
  desc?: string;
}

export interface LabelDesc {
  label?: string;
  desc?: string;
}

export interface SiteSettings {
  phone?: string;
  phoneHref?: string;
  email?: string;
  address?: string;
  mapEmbedUrl?: string;
  emergencyText?: string;
  businessHours?: { day?: string; time?: string }[];
  stats?: Stat[];
}

export interface PageHero {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
}

export interface HomePage {
  hero?: {
    eyebrow?: string;
    headingLine1?: string;
    headingLine2?: string;
    subheading?: string;
    trustBadges?: string[];
  };
  trustBar?: { title?: string; subtitle?: string }[];
  why?: {
    eyebrow?: string;
    heading?: string;
    image?: SanityImage;
    badgeText?: string;
    valuePoints?: TitleDesc[];
  };
  servicesIntro?: { eyebrow?: string; heading?: string };
  projectsIntro?: { eyebrow?: string; heading?: string };
  testimonialsIntro?: {
    eyebrow?: string;
    heading?: string;
    ratingValue?: number;
    reviewCount?: number;
  };
}

export interface AboutPage {
  hero?: PageHero;
  story?: {
    eyebrow?: string;
    heading?: string;
    paragraphs?: string[];
    image?: SanityImage;
  };
  values?: TitleDesc[];
  credentialsHeading?: string;
  credentials?: string[];
  coverageArea?: string;
  emergencyService?: string;
  cta?: { heading?: string; text?: string };
}

export interface ServicesPage {
  hero?: PageHero;
  introEyebrow?: string;
  introHeading?: string;
  cta?: { heading?: string; text?: string };
}

export interface ProjectsPage {
  hero?: PageHero;
  featuredEyebrow?: string;
  galleryEyebrow?: string;
  galleryHeading?: string;
  galleryText?: string;
  cta?: { heading?: string; text?: string };
}

export interface ContactPage {
  hero?: PageHero;
  findUsHeading?: string;
  findUsText?: string;
  formHeading?: string;
  formSubtext?: string;
}

export interface Service {
  _id: string;
  title?: string;
  slug?: { current?: string };
  icon?: "residential" | "commercial" | "emergency";
  tagline?: string;
  shortDescription?: string;
  homepageFeatures?: string[];
  detailItems?: LabelDesc[];
}

export interface Testimonial {
  _id: string;
  quote?: string;
  name?: string;
  suburb?: string;
  rating?: number;
}

export interface Project {
  _id: string;
  title?: string;
  category?: string;
  image?: SanityImage;
  description?: string;
  location?: string;
  year?: string;
  scope?: string[];
  featured?: boolean;
}
