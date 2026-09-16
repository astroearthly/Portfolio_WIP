import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/lib/motion";
import { ContactCta } from "@/components/site/ContactCta";
import { SplitProjects } from "@/components/site/SplitProjects";
import { studioImage } from "@/data/projects";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrea Studio / CGI / Art Direction" },
      {
        name: "description",
        content:
          "Portfolio of David Sebastian, product visualization specialist focused on minimal industrial tech and cinematic films.",
      },
      { property: "og:title", content: "Andrea Studio / CGI / Art Direction" },
      {
        property: "og:description",
        content: "Cinematic product visualization, CGI, and minimal industrial design films.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="pt-8">
      {/* SPLIT-SCREEN HERO SECTION (Starts immediately at the top) */}
      <SplitProjects />

      {/* RECENT PROMO VIMEO EMBED SECTION */}
      <section className="shell mt-4 md:mt-8 py-16 md:py-24">
        {/* Constrained wrapper to match the exact video frame width and position */}
        <div className="w-full">
          {/* Precise separator line */}
          <div className="border-t border-white/[0.13] pt-4"></div>

          {/* Header Grid — Added mb-8 here to push the text down away from the line independently */}
          <div className="mb-12 mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
            {/* Left: Title */}
            <div className="flex justify-start">
              <h3 className="font-display text-lg font-semibold text-foreground md:text-xl tracking-wide">
                Experimental - Fracture
              </h3>
            </div>

            {/* Center: Metadata / Tags */}
            <div className="flex items-center justify-start gap-4 text-base text-foreground/60 md:justify-center">
              <span>Editing</span>
              <span className="h-3 w-[1px] bg-white/[0.13]"></span>
              <span>Rhythm</span>
              <span className="h-3 w-[1px] bg-white/[0.13]"></span>
              <span>Visual Storytelling</span>
            </div>

            {/* Right: Link */}
            <div className="flex justify-start md:justify-end">
              <a 
                href="https://vimeo.com/1164198582?share=copy&fl=sv&fe=ci" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-foreground/60 transition-colors hover:text-foreground"
              >
                Visit ↗
              </a>
            </div>
          </div>

          {/* Big Vimeo Video Embed Frame */}
          <div className="media-frame w-full overflow-hidden bg-background">
            <div style={{ padding: "50% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1164198582?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                title="FRACTURE - Cinematic Edit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO INTRO SECTION */}
      <section className="shell grid items-center gap-14 py-24 md:grid-cols-2 md:py-40">
        <div className="media-frame aspect-[4/3]" data-reveal>
          <img
            src={studioImage}
            alt="pp"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="label" data-reveal>
            The studio
          </p>
          <h2 className="display-md mt-8" data-reveal data-reveal-delay="70">
             Products are more than objects.          </h2>
          <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground" data-reveal data-reveal-delay="140">
             We explore the ideas, experiences, and possibilities surrounding them, translating their place in human life into cinematic worlds through CGI, light, motion, and composition          </p>
          <Link to="/about" className="label mt-10 inline-block transition-colors duration-500 hover:text-foreground" data-reveal data-reveal-delay="200">
            More about us →
          </Link>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}