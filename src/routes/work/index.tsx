import { createFileRoute } from "@tanstack/react-router";
import { useLineEntrance, useReveal } from "@/lib/motion";
import { ContactCta } from "@/components/site/ContactCta";
import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Orbit Studio CGI Projects" },
      {
        name: "description",
        content:
          "Selected CGI, product visualization and film projects by Orbit Studio for automotive, technology and lifestyle brands.",
      },
      { property: "og:title", content: "Work — Orbit Studio CGI Projects" },
      { property: "og:description", content: "Selected CGI and product film projects by Orbit Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Work() {
  const titleRef = useLineEntrance(0.2);
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <section className="shell pb-16 pt-36 md:pb-24 md:pt-48">
        <div ref={titleRef}>
          <span className="line-mask">
            <span className="line-inner label">Archive — {projects.length} projects</span>
          </span>
          <h1 className="display-lg mt-8">
            <span className="line-mask">
              <span className="line-inner">Work</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Symmetrical Grid Gallery Section */}
      <section className="shell pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
          {projects.map((project: any, index: number) => {
            const formattedIndex = (index + 1).toString().padStart(2, "0");
            
            return (
              <Link
                key={project.slug || index}
                to={`/work/$slug`}
                params={{ slug: project.slug }}
                className="group relative flex flex-col bg-background/50 transition-all duration-500 md:col-span-6"
              >
                {/* Media Frame with equal dimensions & subtle zoom on hover */}
                <div className="media-frame aspect-[16/10] w-full overflow-hidden bg-white/[0.03]">
                  <img
                    src={project.image || project.thumbnail || project.cover}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Clean Bracketed Index Number */}
                  <div className="absolute top-4 left-4 font-mono text-xs tracking-wider text-white/90 drop-shadow-md">
                    [{formattedIndex}]
                  </div>
                </div>

                {/* Project Metadata footer */}
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
                      {project.category || "Tech Product"}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year || "2026"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ContactCta label="Enquiries" />
    </div>
  );
}