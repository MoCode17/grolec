"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export function StatCounter({
  value,
  suffix,
  label,
  decimals = 0,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(current);
          }
        }, stepTime);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-5xl md:text-6xl tracking-wide text-white">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-semibold text-white/85 uppercase tracking-[0.18em]">
        {label}
      </div>
    </div>
  );
}
