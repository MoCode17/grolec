"use client";

import { StatCounter } from "@/components/ui/StatCounter";
import type { Stat } from "@/sanity/lib/types";

export default function Stats({ stats }: { stats?: Stat[] }) {
  return (
    <section className="relative z-10 bg-copper py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/20">
        {(stats ?? []).map((stat, i) => (
          <div key={i} className="flex justify-center">
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals ?? 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
