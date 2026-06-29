import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import ProjectsGallery from "@/components/ProjectsGallery";
import { PROJECT_SHOWCASE, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected electrical projects across Melbourne — residential rewires, commercial fit-outs, switchboard upgrades, and emergency callouts. See the Grolec standard, job by job.",
};

const [featured, ...rest] = PROJECT_SHOWCASE;

export default function ProjectsPage() {
  return (
    <>
      {/* ── Page hero (DARK) ── */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,78,44,0.10),transparent_60%)]" />
        {/* Thin copper vertical accent */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Our Work
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6 max-w-3xl">
            Proof in Every
            <br />
            <span className="text-copper">Connection.</span>
          </h1>
          <p className="text-snow-dim text-lg max-w-xl leading-relaxed">
            From heritage rewires to commercial fit-outs and 2am emergency
            callouts — a look at the work Melbourne trusts us with, done right
            and built to last.
          </p>

          {/* Credibility stat strip */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 mt-14 pt-8 border-t border-edge">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-4xl md:text-5xl text-copper leading-none tracking-wide">
                  {"decimals" in stat
                    ? stat.value.toFixed(stat.decimals)
                    : stat.value}
                  {stat.suffix}
                </span>
                <span className="text-[11px] text-muted uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured project (CREAM, asymmetric) ── */}
      <section className="bg-cream py-20 md:py-28 px-6 lg:px-10 border-b border-edge-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Featured Project
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-7 relative aspect-[16/11] overflow-hidden border border-edge-light bg-paper group">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="eager"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 bg-copper px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                {featured.category}
              </span>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-ink-muted text-xs uppercase tracking-widest">
                <span>{featured.location}</span>
                <span className="w-1 h-1 rounded-full bg-copper" />
                <span>{featured.year}</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide">
                {featured.title}
              </h2>
              <p className="text-ink-dim leading-relaxed">
                {featured.description}
              </p>

              {/* Scope highlights */}
              <ul className="flex flex-col gap-2.5 pt-2">
                {featured.scope.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                    <span className="text-sm font-semibold text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-copper text-xs px-7 py-3.5 tracking-widest self-start mt-2"
              >
                Start a Project Like This
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project gallery (CREAM) ── */}
      <section className="bg-cream-alt py-24 md:py-32 px-6 lg:px-10 border-b border-edge-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-copper" />
                <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                  The Portfolio
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide">
                More of Our Work
              </h2>
            </div>
            <p className="text-ink-dim text-sm max-w-xs leading-relaxed">
              Residential, commercial, safety, and emergency jobs delivered
              across greater Melbourne.
            </p>
          </div>

          <ProjectsGallery projects={rest} />
        </div>
      </section>

      {/* ── CTA banner (COPPER) ── */}
      <section className="py-16 px-6 lg:px-10 bg-copper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-white leading-none tracking-wide">
              Got a Project in Mind?
            </h2>
            <p className="text-white/85 text-sm mt-2">
              No obligation quote, usually within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-dark text-white text-sm font-semibold uppercase tracking-widest px-10 py-4 hover:bg-black transition-colors flex-shrink-0"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
