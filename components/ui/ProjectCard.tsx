"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  description: string;
  delayClass?: string;
};

export function ProjectCard({
  title,
  category,
  image,
  description,
  delayClass = "",
}: ProjectCardProps) {
  return (
    <div
      className={`reveal ${delayClass} group relative aspect-[4/3] overflow-hidden`.trim()}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-2 inline-block rounded-full bg-copper-light px-3 py-1 text-xs font-bold text-dark">
          {category}
        </span>
        <h3 className="font-display text-lg font-bold text-light">{title}</h3>
        <p className="mt-1 text-sm text-light/80">{description}</p>
      </div>
    </div>
  );
}
