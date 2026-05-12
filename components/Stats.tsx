"use client";

import { STATS } from "@/lib/constants";
import { StatCounter } from "@/components/ui/StatCounter";

export default function Stats() {
  return (
    <section className="relative z-10 bg-copper py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/20">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex justify-center">
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={
                "decimals" in stat ? (stat as { decimals: number }).decimals : 0
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
