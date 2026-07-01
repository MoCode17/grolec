import { stegaClean } from "next-sanity";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyGrolec from "@/components/WhyGrolec";
import EnquiryForm from "@/components/EnquiryForm";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import { safeFetch, sanityFetch } from "@/sanity/lib/live";
import {
  HOME_QUERY,
  SERVICES_QUERY,
  PROJECTS_QUERY,
  TESTIMONIALS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";
import type {
  HomePage,
  Service,
  Project,
  Testimonial,
  SiteSettings,
} from "@/sanity/lib/types";

export default async function HomePage() {
  const [home, services, projects, testimonials, settings] = await Promise.all([
    safeFetch(() => sanityFetch({ query: HOME_QUERY })),
    safeFetch(() => sanityFetch({ query: SERVICES_QUERY })),
    safeFetch(() => sanityFetch({ query: PROJECTS_QUERY })),
    safeFetch(() => sanityFetch({ query: TESTIMONIALS_QUERY })),
    safeFetch(() => sanityFetch({ query: SITE_SETTINGS_QUERY })),
  ]);

  const homeData = home.data as HomePage | null;
  const settingsData = settings.data as SiteSettings | null;

  return (
    <>
      <HeroSection hero={homeData?.hero} />
      <TrustBar items={homeData?.trustBar} />
      <ServicesSection
        intro={homeData?.servicesIntro}
        services={services.data as Service[]}
      />
      <Stats stats={settingsData?.stats} />
      <WhyGrolec why={homeData?.why} />
      <Projects
        intro={homeData?.projectsIntro}
        projects={(projects.data as Project[])?.slice(0, 6)}
      />
      <Testimonials
        intro={homeData?.testimonialsIntro}
        testimonials={testimonials.data as Testimonial[]}
      />
      <EnquiryForm
        phone={settingsData?.phone}
        phoneHref={stegaClean(settingsData?.phoneHref)}
      />
    </>
  );
}
