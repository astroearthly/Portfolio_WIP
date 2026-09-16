import { createFileRoute } from "@tanstack/react-router";
import { useLineEntrance, useReveal } from "@/lib/motion";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vanta" },
      {
        name: "description",
        content:
          "Commission Vanta Studio for CGI, product visualization and product films. Email studio@vanta.studio for availability and rates.",
      },
      { property: "og:title", content: "Contact — Vanta" },
      { property: "og:description", content: "Get in touch with Vanta Studio about CGI and product film projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const titleRef = useLineEntrance(0.2);
  const revealRef = useReveal();

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={revealRef} className="flex min-h-[calc(100vh-5rem)] flex-col justify-between bg-background text-foreground pb-16 relative">
      {/* Top-Right Time & Coordinates Badge */}
      <div className="absolute top-32 right-6 md:right-16 text-right font-mono text-xs text-muted-foreground uppercase tracking-widest space-y-1">
        <p className="text-foreground font-medium text-base">GMT+1</p>
        <p>51.75275, 19.46200</p>
        <p className="text-foreground text-sm">{time}</p>
      </div>

      {/* Hero Title Section */}
      <section className="shell pt-20 md:pt-28">
        <div ref={titleRef} className="max-w-4xl">
          <span className="label">
            <span data-line>// CONTACT — OPEN FOR 2026 BOOKINGS</span>
          </span>
          <h1 className="mt-6 font-display text-[2.4rem] font-light leading-[1.06] tracking-[-0.02em] text-foreground md:mt-8 md:text-[4.25rem] lg:text-[5rem]">
            <span data-line>Tell us what</span>
            <br />
            <span data-line className="text-muted-foreground">
              you&apos;re launching.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground" data-line>
            Have something launching? Tell us the product, the date and the constraint. We&apos;ll tell you honestly whether we&apos;re the right studio for it.
          </p>
        </div>
      </section>

      {/* Main Email Section Pushed to Bottom */}
      <section className="shell pt-16 mt-auto">
        <div className="border-t border-border pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8" data-reveal>
          <div>
            <p className="label">Email</p>
            <a
              href="mailto:studio@vanta.studio"
              className="mt-5 inline-block font-display text-2xl tracking-tight transition-colors duration-500 hover:text-accent md:text-4xl"
            >
              studio@vanta.studio
            </a>
            <a
              href="tel:+351210000000"
              className="mt-4 block text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              +351 210 000 000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}