"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctasRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(
        () => {
          if (!el) return;
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        },
        200 + i * 150,
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-grain overflow-hidden bg-dark">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-surface/60 to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(184,78,44,0.10),transparent_60%)]" />

      {/* Brandmark watermark */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none w-[55vw] max-w-[700px] aspect-square">
        <Image
          src="/images/Brandmark%20Transparent.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Thin copper vertical line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Melbourne Electricians
            </span>
          </div>

          {/* Main heading */}
          <h1
            ref={headingRef}
            className="font-heading text-[clamp(4rem,10vw,9rem)] leading-none tracking-wide uppercase text-white mb-6"
          >
            Powering
            <br />
            <span className="text-copper">Your Ideas.</span>
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-snow-dim text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Melbourne&apos;s trusted electrical contractors. Residential,
            commercial, and emergency electrical work — done right, on time, and
            without surprises.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-copper text-sm px-8 py-4 tracking-widest"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="btn-ghost text-sm px-8 py-4 tracking-widest"
            >
              View Services
            </Link>
          </div>

          {/* Trust micro-badge */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-edge">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-xs text-muted uppercase tracking-widest">
                Licensed &amp; Insured
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-xs text-muted uppercase tracking-widest">
                Melbourne Local
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <CheckIcon />
              <span className="text-xs text-muted uppercase tracking-widest">
                Fast Response
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade — fade to cream now */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-copper flex-shrink-0"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M4.5 7l2 2 3-3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
