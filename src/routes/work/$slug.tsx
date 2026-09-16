import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useLineEntrance, useParallax, useReveal } from "@/lib/motion";
import { getProject, type Project } from "@/data/projects";
import { SSD } from "./SSD";
import { AirSensor } from "./AirSensor";
import { PowerStation } from "./PowerStation";
import { Experimental } from "./Experimental";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Vanta Studio` : "Project — Vanta Studio";
    const description = p?.intro ?? "A cinematic CGI project by Vanta.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const titleRef = useLineEntrance(0.2);
  const revealRef = useReveal();
  const heroRef = useParallax(10);

  return (
    <article ref={revealRef} key={project.slug}>
      {/* HEADER SECTION */}
      <header className="shell pb-12 pt-32 md:pb-6 md:pt-32">
        <div ref={titleRef}>
          <h1 className="md:text-6xl mt-4">
            <span className="line-mask">
              <span className="line-inner">{project.title}</span>
            </span>
          </h1>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-xl text-[10px] md:text-[15px] text-muted-foreground" data-reveal>
              {project.intro}
            </p>
            <Link
              to="/contact"
              className="label inline-flex items-center gap-2 transition-colors duration-500 hover:text-foreground"
              data-reveal
            >
              Start a Project ↗
            </Link>
          </div>
        </div>

        {/* Horizontal Metadata Bar */}
        <div className="mt-4 flex flex-wrap justify-between pt-10 gap-8" data-reveal>
          <div>
            <span className="label" style={{ color: "#888888" }}>Year:</span>
            <p className="mt-2 font-display text-[14px] tracking-tight">{project.year}</p>
          </div>
          <div>
            <span className="label" style={{ color: "#888888" }}>Service:</span>
            <p className="mt-2 font-display text-[14px] tracking-tight">
              {Array.isArray(project.services) ? project.services.join(", ") : project.services}
            </p>
          </div>
          <div>
            <span className="label" style={{ color: "#888888" }}>Client:</span>
            <p className="mt-2 font-display text-[14px] tracking-tight">{project.client}</p>
          </div>
        </div>
      </header>

      {/* HERO MEDIA */}
      <div ref={heroRef} className="max-w-[1380px] mx-auto px-4 md:px-8 media-frame h-[60svh] md:h-[92svh] overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.title} hero frame`}
          decoding="async"
          fetchPriority="high"
          data-parallax-media
          className="h-full w-full object-cover object-bottom translate-y-0"
        />
      </div>

      {/* DYNAMIC COMPONENT ROUTER SWITCH */}
      {project.slug === "Vanta SSD no-1" && <SSD project={project} />}
      {project.slug === "monolith-no-7" && <AirSensor project={project} />}
      {project.slug === "halo-air" && <AirSensor project={project} />}
      {project.slug === "caliber-04" && <Experimental project={project} />}
    </article>
  );
}