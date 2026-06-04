"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { STAGGER_DELAYS } from "@/lib/animations";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  description: string;
};

type ProjectsGalleryProps = {
  projects: readonly GalleryItem[];
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
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
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
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
  );
}
