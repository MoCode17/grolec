import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, and emergency electrical services in Melbourne. Licensed, insured, and trusted by hundreds of clients.",
};

const services = [
  {
    id: "residential",
    title: "Residential",
    tagline: "Your home, done right.",
    description:
      "Whether it's a single power point or a full house rewire, we bring the same level of care and precision to every residential job. We work with Melbourne homeowners, renovators, and builders to deliver clean, code-compliant electrical work.",
    items: [
      {
        label: "Power Points & Switches",
        desc: "New installations, relocations, and upgrades to modern standards.",
      },
      {
        label: "Lighting",
        desc: "LED downlight installations, feature lighting, outdoor, and sensor lighting.",
      },
      {
        label: "Safety Switches (RCDs)",
        desc: "Mandatory compliance testing, upgrades, and new installations.",
      },
      {
        label: "Switchboard Upgrades",
        desc: "Upgrade old fuse boards to modern circuit breakers for safety and capacity.",
      },
      {
        label: "Renovations & New Builds",
        desc: "Full electrical fit-outs for extensions, kitchens, bathrooms, and new homes.",
      },
      {
        label: "Outdoor & Garden",
        desc: "Pergola power, garden lighting, shed connections, and more.",
      },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M6 20L20 6l14 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 17v16a1 1 0 001 1h8v-8h4v8h8a1 1 0 001-1V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "commercial",
    title: "Commercial",
    tagline: "Built for business.",
    description:
      "Melbourne businesses trust Grolec for reliable commercial electrical work. From fit-outs to ongoing maintenance contracts, we understand that downtime costs money — so we work efficiently and to schedule.",
    items: [
      {
        label: "Office & Retail Fit-Outs",
        desc: "Full electrical for new tenancies, shopfits, and office builds.",
      },
      {
        label: "Preventative Maintenance",
        desc: "Scheduled inspections and testing to keep your business compliant.",
      },
      {
        label: "Data & Communications",
        desc: "Structured cabling, NBN, and data point installations.",
      },
      {
        label: "Lighting Upgrades",
        desc: "LED replacements, emergency lighting, and sensor systems.",
      },
      {
        label: "Three-Phase Power",
        desc: "Industrial and commercial three-phase installations and upgrades.",
      },
      {
        label: "Exit & Emergency Lighting",
        desc: "Compliant AS/NZS 2293 testing and installation.",
      },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="10"
          width="32"
          height="24"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M13 10V8a2 2 0 012-2h10a2 2 0 012 2v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 20h32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 20v5h6v-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "Emergency",
    tagline: "When it can't wait.",
    description:
      "Electrical emergencies don't keep business hours. Our emergency team is available 24/7 across Melbourne for urgent fault finding, power restoration, and switchboard issues. Fast response, fixed right.",
    items: [
      {
        label: "24/7 Emergency Callouts",
        desc: "Available any time of day or night across greater Melbourne.",
      },
      {
        label: "Fault Finding",
        desc: "Rapid diagnosis of tripped circuits, shorts, and intermittent faults.",
      },
      {
        label: "Power Outage Restoration",
        desc: "Fast-track restoration of power to your home or business.",
      },
      {
        label: "Switchboard Issues",
        desc: "Blown fuses, tripping breakers, and damaged switchboard components.",
      },
      {
        label: "Storm Damage",
        desc: "Assessing and repairing electrical damage after severe weather.",
      },
      {
        label: "Burning Smells / Sparking",
        desc: "Urgent investigation of potential fire hazards — don't wait.",
      },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4L8 24h12l-3 12 15-24H20L23 4H20z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero (DARK) ── */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(184,78,44,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6">
            Our Services
          </h1>
          <p className="text-snow-dim text-lg max-w-xl leading-relaxed">
            From single-room renovations to full commercial fit-outs — licensed,
            insured, and built on Melbourne know-how.
          </p>
        </div>
      </section>

      {/* ── Category overview cards (LIGHT) ── */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-cream border-b border-edge-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              What We Offer
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide max-w-xl">
            Three areas of expertise.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {services.map(({ id, title, tagline, icon, items }) => (
              <div
                key={id}
                className="service-card p-8 flex flex-col gap-5"
              >
                <div className="w-14 h-14 bg-cream border border-edge-light rounded-sm flex items-center justify-center text-copper shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-heading text-4xl uppercase text-ink leading-none mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-ink-dim leading-relaxed">
                    {tagline}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-copper bg-copper/10 px-3 py-1.5 rounded-sm w-fit font-semibold uppercase tracking-wider">
                  {items.length} services
                </span>
                <Link
                  href={`#${id}`}
                  className="group flex items-center gap-2 text-xs font-semibold text-copper uppercase tracking-widest mt-auto pt-5 border-t border-edge-light"
                >
                  Explore services
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service detail sections (single DARK section, no alternation) ── */}
      <section className="bg-dark border-b border-edge px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {services.map(
            ({ id, title, tagline, description, items, icon }, idx) => (
              <div key={id}>
                {idx > 0 && <div className="border-t border-edge/50" />}

                <div id={id} className="py-20 md:py-24 scroll-mt-24 relative">
                  {/* Faint number watermark */}
                  <span className="font-heading text-[10rem] leading-none text-white/4 absolute top-12 right-0 select-none pointer-events-none hidden lg:block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Block header */}
                  <div className="mb-10 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="block w-8 h-px bg-copper" />
                      <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                        {tagline}
                      </span>
                    </div>
                    <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
                      {title}
                    </h2>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                    <div className="lg:col-span-2 flex flex-col gap-6">
                      <div className="text-copper w-16 h-16 flex items-center justify-center border border-copper/30 rounded-sm bg-dark flex-shrink-0">
                        {icon}
                      </div>
                      <p className="text-snow-dim text-sm leading-relaxed">
                        {description}
                      </p>
                      <Link
                        href="/contact"
                        className="btn-copper text-xs px-7 py-3.5 tracking-widest self-start"
                      >
                        Get a Quote
                      </Link>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {items.map(({ label, desc }) => (
                        <div
                          key={label}
                          className="bg-surface border border-edge hover:border-copper/40 transition-colors p-5 group"
                        >
                          <div className="h-0.5 w-0 group-hover:w-full bg-copper transition-all duration-300 mb-4" />
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper mt-1.5 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold mb-1 text-snow-dim">
                                {label}
                              </p>
                              <p className="text-xs leading-relaxed text-muted">
                                {desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-16 px-6 lg:px-10 bg-copper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-white leading-none tracking-wide">
              Ready to Get Started?
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
