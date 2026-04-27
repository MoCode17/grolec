"use client";

import { useEffect, useRef } from "react";
import { STAGGER_DELAYS } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    gridRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-dark-light/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Projects
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-white leading-none tracking-wide">
            Our Recent Work
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              delayClass={STAGGER_DELAYS[index % STAGGER_DELAYS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
