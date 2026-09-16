import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

/**
 * Editorial work row: index, title, category, year — the cover image scales
 * and un-dims on hover, mirroring the reference's restrained list treatment.
 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block border-t border-border py-6 md:py-8"
      data-reveal
      data-reveal-delay={String(index * 70)}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 md:grid-cols-[3rem_minmax(0,1fr)_14rem_5rem] md:items-center">
        <span className="label hidden md:block">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="display-md min-w-0 font-display transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] md:group-hover:translate-x-3">
          {project.title}
        </h3>
        <span className="label md:justify-self-start">{project.category}</span>
        <span className="label md:justify-self-end">{project.year}</span>
      </div>

      <div className="media-frame mt-6 aspect-[16/10] md:mt-8 md:aspect-[21/9]">
        <img
          src={project.cover}
          alt={`${project.title} — ${project.category} for ${project.client}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.02] object-cover opacity-70 transition-all duration-[1400ms] [transition-timing-function:var(--ease-cinema)] group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
