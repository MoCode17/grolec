"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { STAGGER_DELAYS } from "@/lib/animations";
import { urlFor } from "@/sanity/lib/image";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { HomePage, Project } from "@/sanity/lib/types";

export default function Projects({
  intro,
  projects,
}: {
  intro?: HomePage["projectsIntro"];
  projects?: Project[];
}) {
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
    <section
      id="projects"
      className="bg-warm-white py-24 md:py-32 border-b border-edge-light"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-copper" />
              <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                {intro?.eyebrow}
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide">
              {intro?.heading}
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-xs font-semibold text-copper uppercase tracking-widest shrink-0 self-start md:self-auto"
          >
            View All Projects
            <svg
              className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {(projects ?? []).map((project, index) => (
            <ProjectCard
              key={project._id}
              title={project.title ?? ""}
              category={project.category ?? ""}
              image={
                project.image
                  ? urlFor(project.image).width(800).height(600).url()
                  : ""
              }
              description={project.description ?? ""}
              delayClass={STAGGER_DELAYS[index % STAGGER_DELAYS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
