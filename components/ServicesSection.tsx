"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    id: "residential",
    title: "Residential",
    description:
      "From power points to full home rewires — reliable electrical solutions for your home, done cleanly and on schedule.",
    features: [
      "Power points & lighting",
      "Safety switches & switchboards",
      "Renovation & new builds",
      "Outdoor & garden lighting",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 16L16 4l12 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13v12a1 1 0 001 1h6v-6h4v6h6a1 1 0 001-1V13"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Trusted by Melbourne businesses for fit-outs, maintenance, and data cabling. We work around your schedule.",
    features: [
      "Office & retail fit-outs",
      "Preventative maintenance",
      "Data & communications cabling",
      "Lighting upgrades & controls",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="3"
          y="8"
          width="26"
          height="20"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M10 8V6a2 2 0 012-2h8a2 2 0 012 2v2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M3 16h26"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M13 16v4h6v-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "Emergency",
    description:
      "When the power goes out, we respond fast. 24/7 emergency callouts across Melbourne — no job too urgent.",
    features: [
      "24/7 emergency callouts",
      "Fault finding & diagnosis",
      "Switchboard issues",
      "Power outage restoration",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3l-11 18h11l-2 8 13-20H16l2-6z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".service-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-10 bg-dark"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
            Electrical Services
            <br />
            <span className="text-muted">Built for Melbourne</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, title, description, features, icon }) => (
            <div
              key={id}
              id={id}
              className="service-card service-reveal reveal flex flex-col p-8 gap-6"
            >
              {/* Icon */}
              <div className="text-copper w-14 h-14 flex items-center justify-center border border-edge rounded-sm">
                {icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-heading text-3xl uppercase tracking-wide text-white">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                    <span className="text-white/60 text-xs">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/services#${id}`}
                className="group flex items-center gap-2 text-copper text-xs font-semibold uppercase tracking-widest mt-auto pt-2 border-t border-edge"
              >
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.25"
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
  );
}
