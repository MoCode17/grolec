import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Grolec Electrical Group — Melbourne's trusted licensed electricians. Quality workmanship, upfront pricing, and reliable service.",
};

const values = [
  {
    title: "Quality",
    desc: "We don't do quick fixes. Every job is done to Australian standards with quality materials and clean finishes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3l2.9 6.26 6.84.56-5.08 4.6 1.62 6.69L14 18.27l-6.28 2.84 1.62-6.69-5.08-4.6 6.84-.56L14 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "We show up when we say we will, communicate clearly, and follow through on every commitment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 8v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Value",
    desc: "Fair, upfront pricing. You'll know exactly what you're paying before we start — no surprises on invoice day.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M9 14l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="6"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const credentials = [
  "Licensed Electrical Contractor — Victoria",
  "Fully Insured (Public Liability & PI)",
  "Registered with Energy Safe Victoria",
  "Victorian Electrical Worker Licence",
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(160,64,42,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Who We Are
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6">
            About Grolec
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Melbourne&apos;s trusted sparky. Built on quality workmanship and
            old-fashioned reliability.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 md:py-32 px-6 lg:px-10 bg-dark border-b border-edge">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-copper" />
              <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                Our Story
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
              Melbourne Born,
              <br />
              <span className="text-copper">Trade Proven.</span>
            </h2>
            <div className="flex flex-col gap-4 text-muted text-sm leading-relaxed max-w-lg">
              <p>
                Grolec Electrical Group was founded with a straightforward
                mission: deliver quality electrical work at honest prices, every
                time. No shortcuts, no hidden costs, no excuses.
              </p>
              <p>
                We&apos;re Melbourne locals. We know the city&apos;s housing
                stock — from the terraces of Fitzroy to the new builds in
                Werribee — and we understand what it takes to work in both
                established homes and commercial environments.
              </p>
              <p>
                Every job we take on, whether it&apos;s a single power point or
                a full commercial fit-out, gets the same level of attention.
                We&apos;re licensed, fully insured, and committed to workmanship
                that lasts.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              alt="Grolec electrician working"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-copper" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-copper" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-copper" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-copper" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 lg:px-10 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-copper" />
              <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                Our Values
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="p-8 bg-dark border border-edge hover:border-copper/30 hover:shadow-[0px_8px_32px_rgba(184, 78, 44, 0.45)] transition-colors flex flex-col gap-5"
              >
                <div className="text-copper w-14 h-14 flex items-center justify-center border border-edge rounded-sm bg-surface">
                  {icon}
                </div>
                <div>
                  <h3 className="font-heading text-3xl uppercase tracking-wide text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 md:py-32 px-6 lg:px-10 bg-dark border-b border-edge">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-copper" />
                <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                  Credentials
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide mb-8">
                Licensed &amp;
                <br />
                <span className="text-copper">Insured.</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {credentials.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-sm bg-copper/10 border border-copper/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 2"
                          stroke="#A0402A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-8 bg-surface border border-edge">
                <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-3">
                  Coverage Area
                </p>
                <h3 className="font-heading text-3xl uppercase text-white mb-3">
                  All of Melbourne & Surrounds
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We service metropolitan Melbourne, inner suburbs, and
                  surrounding regions. Not sure if we cover your area? Give us a
                  call.
                </p>
              </div>
              <div className="p-8 bg-surface border border-edge">
                <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-3">
                  Emergency Service
                </p>
                <h3 className="font-heading text-3xl uppercase text-white mb-3">
                  24/7 Availability
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Electrical emergencies don&apos;t wait for business hours.
                  We&apos;re available around the clock for urgent callouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-white leading-none tracking-wide">
              Work with a Team You Can Trust
            </h2>
            <p className="text-muted text-sm mt-2">
              Get a free, no-obligation quote today.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-copper text-sm px-10 py-4 tracking-widest flex-shrink-0"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
