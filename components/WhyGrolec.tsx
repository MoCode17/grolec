"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const points = [
  {
    title: "Quality Workmanship",
    desc: "We don't cut corners. Every installation is done to Australian standards, inspected, and left clean.",
  },
  {
    title: "Upfront Pricing",
    desc: "No surprise invoices. You'll know the cost before we start — always.",
  },
  {
    title: "No Fuss, No Drama",
    desc: "We show up on time, get the job done, and leave your place cleaner than we found it.",
  },
  {
    title: "Local Melbourne Know-How",
    desc: "We know Melbourne's housing stock, council requirements, and infrastructure inside out.",
  },
];

export default function WhyGrolec() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-dark text-white border-y border-edge relative overflow-hidden">
      {/* Subtle copper glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(184,78,44,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: content */}
          <div ref={leftRef} className="reveal-left flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-copper" />
                <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                  Why Grolec
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
                No Surprises.
                <br />
                <span className="text-copper">Just Solid</span>
                <br />
                Electrical Work.
              </h2>
            </div>

            <ul className="flex flex-col gap-6">
              {points.map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-sm bg-copper/10 border border-copper/30 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 2"
                        stroke="#A0402A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual */}
          <div
            ref={rightRef}
            className="reveal flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative border frame */}
              <div className="absolute inset-4 border border-copper/20 rounded-sm pointer-events-none z-10" />
              <div className="absolute inset-0 rounded-sm overflow-hidden bg-surface">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                  alt="Grolec electrician at work"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>

              {/* Copper corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-copper" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-copper" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-copper" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-copper" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-dark/90 backdrop-blur-sm border border-edge p-4 z-20">
                <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-0.5">
                  Melbourne Based
                </p>
                <p className="text-white text-sm font-medium">
                  Licensed & insured since day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
