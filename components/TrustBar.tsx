"use client";

import { useEffect, useRef } from "react";

const trustItems = [
  {
    label: "Licensed & Insured",
    desc: "Fully compliant & covered",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L5 7v8c0 5.25 3.85 10.15 9 11.35C19.15 25.15 23 20.25 23 15V7L14 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Melbourne Local",
    desc: "Servicing all suburbs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M14 4C9.58 4 6 7.58 6 12c0 6 8 16 8 16s8-10 8-16c0-4.42-3.58-8-8-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Residential & Commercial",
    desc: "All job types covered",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 14L14 4l10 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12v9a1 1 0 001 1h5v-5h4v5h5a1 1 0 001-1v-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Fast Response",
    desc: "Emergency availability",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M13 3l-9 14h9l-2 8 11-16h-9l2-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.querySelectorAll<HTMLElement>(".trust-item"));
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-surface border-y border-edge" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-edge">
          {trustItems.map(({ label, desc, icon }) => (
            <div
              key={label}
              className="trust-item reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="text-copper flex-shrink-0">{icon}</div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {label}
                </p>
                <p className="text-muted text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
