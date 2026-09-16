import { createFileRoute } from "@tanstack/react-router";
import { useLineEntrance, useReveal } from "@/lib/motion";
import { studioImage } from "@/data/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vanta" },
      {
        name: "description",
        content: "Vanta is a specialized CGI and product film studio.",
      },
    ],
  }),
  component: About,
});

function About() {
  const titleRef = useLineEntrance(0.2);
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="bg-background text-foreground min-h-screen pb-24">
      {/* Top Title Section */}
      <section className="shell pt-28 md:pt-36 pb-12">
        <div ref={titleRef} className="max-w-4xl">
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-3" data-line>
            About
          </p>
          <h1 className="font-display text-[2.5rem] font-light leading-[1.08] tracking-[-0.02em] text-foreground md:text-[4.5rem]">
            <span data-line>STUDIO.</span>
            <span data-line className="text-muted-foreground">VANTA</span>
          </h1>
        </div>
      </section>

      {/* Very Tight (Low Height) Image Banner */}
      <div className="shell mb-16">
        <div className="media-frame h-[25vh] md:h-[32vh] overflow-hidden">
          <img
            src={studioImage}
            alt="Vanta Studio team workspace"
            loading="lazy"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
      </div>

      {/* Content Section: Text Block on the Right Side */}
      <section className="shell pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>{/* Left side empty spacer to push text block to the right */}</div>
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground" data-reveal>
            Founded by Andrea, Vision is an independent creative studio focused on cinematic product storytelling.
          </p>
          <p data-reveal data-reveal-delay="60">
            Constant experimentation and a drive to find fresh solutions shape our everyday standards, always challenging the usual ways of doing things. We focus on storytelling, customized visuals, and a unique take on design. Our services cover the full production process, from understanding the marketing strategy and conceptualizing ideas to delivering the final product, while ensuring every project meets our clients&apos; needs.
          </p>
          
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="shell pt-16">
        <div>
          <p className="font-display text-3xl md:text-5xl font-light text-foreground mb-3">Get in touch.</p>
          <a href="mailto:contact@tektura.studio" className="text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors">
            contact@tektura.studio
          </a>
        </div>
      </section>
    </div>
  );
}