import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

const fields = [
  "Product Film",
  "CGI & 3D",
  "Visual Development",
  "Motion & Editing",
  "Compositing",
  "Creative Direction",
];

export function SplitProjects() {
  return (
    <section className="shell md:grid md:grid-cols-[30fr_70fr] md:items-start md:gap-16 xl:gap-24">
      {/* LEFT — sticky locked right below the navbar */}
      <div className="md:sticky md:top-20 md:flex md:h-[calc(100vh-6rem)] md:flex-col md:justify-between md:py-0">
        <div>
          <h2 className="display-md font-display" data-reveal>
            Andrea<br />
          </h2>
          <p className="mt-4 text-base text-muted-foreground" data-reveal data-reveal-delay="60">
            Italy, EU
          </p>

          {/* Minimal statement moved to the top */}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground" data-reveal data-reveal-delay="90">
            A creative studio exploring products, ideas, and the traces they leave on us.         </p>

          <div className="mt-8 md:mt-10 border-t border-white/[0.13] pt-8 md:pt-10" data-reveal data-reveal-delay="120">
            <p className="label text-foreground">Fields</p>
            <ul className="mt-4 space-y-1 text-base leading-relaxed text-muted-foreground">
              {fields.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <Link
            to="/work"
            className="label mt-10 inline-block transition-colors duration-500 hover:text-foreground"
            data-reveal
            data-reveal-delay="240"
          >
            All projects →
          </Link>
        </div>
      </div>

      {/* RIGHT — flowing project column with hover overlay */}
      <div className="pt-4 md:pt-12">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="group relative block pb-6 md:pb-10"
            data-reveal
          >
            {/* Image Container with relative positioning for the overlay */}
            <div className="media-frame aspect-[16/12] md:aspect-[16/11] w-full overflow-hidden relative">
              <img
                src={project.cover}
                alt={`${project.title} — ${project.category} for ${project.client}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full scale-[1.02] object-cover object-[20%_50%] opacity-100 transition-all duration-[1400ms] [transition-timing-function:var(--ease-cinema)] group-hover:scale-105 group-hover:opacity-100"
              />

              {/* Gradient Scrim for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Sliding Hover Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 opacity-0 translate-y-3 transition-all duration-500 [transition-timing-function:var(--ease-cinema)] group-hover:opacity-100 group-hover:translate-y-0">
                <div>
                  <span className="label text-foreground/80">
                    {String(i + 1).padStart(2, "0")} — {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-2xl tracking-tight text-foreground md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <span className="label text-foreground/80">{project.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}