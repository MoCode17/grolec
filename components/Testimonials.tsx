"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Grolec did a full switchboard upgrade and rewire on our 1970s home. Clean, professional, and finished exactly on budget. Wouldn't use anyone else.",
    name: "Michael T.",
    suburb: "Hawthorn",
    rating: 5,
  },
  {
    quote:
      "We needed an emergency callout at 9pm for a tripped switchboard. They were there in under an hour, sorted it, and didn't overcharge. Genuinely impressive.",
    name: "Sarah K.",
    suburb: "Fitzroy",
    rating: 5,
  },
  {
    quote:
      "Fitted out our new café in South Yarra. Everything was done to spec, on time, and the team was respectful of our space. Highly recommend for commercial work.",
    name: "James P.",
    suburb: "South Yarra",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="#FFD700"
          aria-hidden="true"
        >
          <path d="M7 1l1.545 4.753H14L9.727 8.714l1.545 4.752L7 10.704l-4.272 2.762 1.545-4.752L0 5.753h5.455z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".t-card");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), i * 130);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-dark border-b border-edge relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(184,78,44,0.07),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-copper" />
              <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                Testimonials
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
              What Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-edge px-5 py-3">
            <StarRating count={5} />
            <div className="text-sm">
              <span className="text-white font-semibold">4.9</span>
              <span className="text-muted"> · 87 Google reviews</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, suburb, rating }) => (
            <div
              key={name}
              className="testimonial-card t-card reveal p-8 flex flex-col gap-6"
            >
              <StarRating count={rating} />

              <blockquote className="text-snow-dim text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-edge">
                <div className="w-9 h-9 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center">
                  <span className="text-copper text-xs font-bold">
                    {name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{name}</p>
                  <p className="text-muted text-xs">{suburb}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
