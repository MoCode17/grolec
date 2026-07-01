import type { Metadata } from "next";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import { type ReactNode } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { safeFetch, sanityFetch } from "@/sanity/lib/live";
import {
  SERVICES_PAGE_QUERY,
  SERVICES_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";
import type { ServicesPage, Service, SiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, and emergency electrical services in Melbourne. Licensed, insured, and trusted by hundreds of clients.",
};

const serviceIcons: Record<string, ReactNode> = {
  residential: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M6 20L20 6l14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 17v16a1 1 0 001 1h8v-8h4v8h8a1 1 0 001-1V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  commercial: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="10" width="32" height="24" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M13 10V8a2 2 0 012-2h10a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 20h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 20v5h6v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  emergency: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 4L8 24h12l-3 12 15-24H20L23 4H20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default async function ServicesPage() {
  const [pageRes, servicesRes, settingsRes] = await Promise.all([
    safeFetch(() => sanityFetch({ query: SERVICES_PAGE_QUERY })),
    safeFetch(() => sanityFetch({ query: SERVICES_QUERY })),
    safeFetch(() => sanityFetch({ query: SITE_SETTINGS_QUERY })),
  ]);
  const page = pageRes.data as ServicesPage | null;
  const services = (servicesRes.data as Service[]) ?? [];
  const s = settingsRes.data as SiteSettings | null;

  return (
    <>
      {/* ── Page hero (DARK) ── */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(184,78,44,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              {page?.hero?.eyebrow}
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6">
            {page?.hero?.heading}
          </h1>
          <p className="text-snow-dim text-lg max-w-xl leading-relaxed">
            {page?.hero?.subtext}
          </p>
        </div>
      </section>

      {/* ── Category overview cards (LIGHT) ── */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-cream border-b border-edge-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              {page?.introEyebrow}
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide max-w-xl">
            {page?.introHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {services.map((service) => {
              const anchor = service.slug?.current ?? service.icon ?? service._id;
              return (
                <div key={service._id} className="service-card p-8 flex flex-col gap-5">
                  <div className="w-14 h-14 bg-cream border border-edge-light rounded-sm flex items-center justify-center text-copper shrink-0">
                    {serviceIcons[service.icon ?? "residential"]}
                  </div>
                  <div>
                    <h3 className="font-heading text-4xl uppercase text-ink leading-none mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-dim leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-copper bg-copper/10 px-3 py-1.5 rounded-sm w-fit font-semibold uppercase tracking-wider">
                    {(service.detailItems ?? []).length} services
                  </span>
                  <Link
                    href={`#${anchor}`}
                    className="group flex items-center gap-2 text-xs font-semibold text-copper uppercase tracking-widest mt-auto pt-5 border-t border-edge-light"
                  >
                    Explore services
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service detail sections ── */}
      <section className="bg-dark border-b border-edge px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const anchor = service.slug?.current ?? service.icon ?? service._id;
            return (
              <div key={service._id}>
                {idx > 0 && <div className="border-t border-edge/50" />}

                <div id={anchor} className="py-20 md:py-24 scroll-mt-24 relative">
                  <span className="font-heading text-[10rem] leading-none text-white/4 absolute top-12 right-0 select-none pointer-events-none hidden lg:block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="mb-10 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="block w-8 h-px bg-copper" />
                      <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                        {service.tagline}
                      </span>
                    </div>
                    <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
                      {service.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                    <div className="lg:col-span-2 flex flex-col gap-6">
                      <div className="text-copper w-16 h-16 flex items-center justify-center border border-copper/30 rounded-sm bg-dark flex-shrink-0">
                        {serviceIcons[service.icon ?? "residential"]}
                      </div>
                      <p className="text-snow-dim text-sm leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <Link href="/contact" className="btn-copper text-xs px-7 py-3.5 tracking-widest self-start">
                        Get a Quote
                      </Link>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(service.detailItems ?? []).map(({ label, desc }, i) => (
                        <div key={i} className="bg-surface border border-edge hover:border-copper/40 transition-colors p-5 group">
                          <div className="h-0.5 w-0 group-hover:w-full bg-copper transition-all duration-300 mb-4" />
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper mt-1.5 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold mb-1 text-snow-dim">{label}</p>
                              <p className="text-xs leading-relaxed text-muted">{desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-16 px-6 lg:px-10 bg-copper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-white leading-none tracking-wide">
              {page?.cta?.heading}
            </h2>
            <p className="text-white/85 text-sm mt-2">{page?.cta?.text}</p>
          </div>
          <Link
            href="/contact"
            className="bg-dark text-white text-sm font-semibold uppercase tracking-widest px-10 py-4 hover:bg-black transition-colors flex-shrink-0"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <EnquiryForm
        phone={s?.phone}
        phoneHref={stegaClean(s?.phoneHref)}
      />
    </>
  );
}
