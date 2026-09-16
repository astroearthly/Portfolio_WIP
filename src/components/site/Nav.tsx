import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 pb-20 pointer-events-none">
      {/* Exact Fading Gradient Layer extracted from the original Framer build */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0.999167) 2.04%, rgba(13, 13, 13, 0.996668) 4.08%, rgba(13, 13, 13, 0.992503) 6.12%, rgba(13, 13, 13, 0.986672) 8.16%, rgba(13, 13, 13, 0.979175) 10.2%, rgba(13, 13, 13, 0.970012) 12.24%, rgba(12, 12, 12, 0.959184) 14.28%, rgba(12, 12, 12, 0.946689) 16.32%, rgba(12, 12, 12, 0.932528) 18.36%, rgba(12, 12, 12, 0.916701) 20.4%, rgba(12, 12, 12, 0.899209) 22.44%, rgba(11, 11, 11, 0.88005) 24.48%, rgba(11, 11, 11, 0.859225) 26.53%, rgba(11, 11, 11, 0.836735) 28.57%, rgba(11, 11, 11, 0.812578) 30.61%, rgba(10, 10, 10, 0.786756) 32.65%, rgba(10, 10, 10, 0.759267) 34.69%, rgba(9, 9, 9, 0.730112) 36.73%, rgba(9, 9, 9, 0.699292) 38.77%, rgba(9, 9, 9, 0.666805) 40.81%, rgba(8, 8, 8, 0.632653) 42.85%, rgba(8, 8, 8, 0.596835) 44.89%, rgba(7, 7, 7, 0.55935) 46.93%, rgba(7, 7, 7, 0.5202) 48.97%, rgba(6, 6, 6, 0.4798) 51.02%, rgba(6, 6, 6, 0.44065) 53.06%, rgba(5, 5, 5, 0.403165) 55.1%, rgba(5, 5, 5, 0.367347) 57.14%, rgba(4, 4, 4, 0.333195) 59.18%, rgba(4, 4, 4, 0.300708) 61.22%, rgba(4, 4, 4, 0.269888) 63.26%, rgba(3, 3, 3, 0.240733) 65.3%, rgba(3, 3, 3, 0.213245) 67.34%, rgba(2, 2, 2, 0.187422) 69.38%, rgba(2, 2, 2, 0.163265) 71.42%, rgba(2, 2, 2, 0.140775) 73.46%, rgba(2, 2, 2, 0.11995) 75.51%, rgba(1, 1, 1, 0.100791) 77.55%, rgba(1, 1, 1, 0.0832986) 79.59%, rgba(1, 1, 1, 0.0674719) 81.63%, rgba(1, 1, 1, 0.0533111) 83.67%, rgba(1, 1, 1, 0.0408163) 85.71%, rgba(0, 0, 0, 0.0299875) 87.75%, rgba(0, 0, 0, 0.0208247) 89.79%, rgba(0, 0, 0, 0.0133278) 91.83%, rgba(0, 0, 0, 0.00749688) 93.87%, rgba(0, 0, 0, 0.00333195) 95.91%, rgba(0, 0, 0, 0.000832986) 97.95%, rgba(0, 0, 0, 0) 100%)"
        }}
      />

      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center py-2 md:py-3 pointer-events-auto">
        <Link to="/" className="min-w-0 font-display text-sm tracking-[0.28em] uppercase">
          Andrea<span className="text-accent">.</span>Studio
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="label text-foreground/70 transition-colors duration-500 hover:text-foreground"
              activeProps={{ className: "label text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="label shrink-0 text-foreground md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile overlay navigation — full-screen, editorial */}
      <div
        className="fixed inset-0 -z-10 bg-background transition-opacity duration-700 [transition-timing-function:var(--ease-cinema)] md:hidden pointer-events-auto"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      >
        <div className="shell flex h-full flex-col justify-center gap-2 pb-24">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="display-md block py-2 font-display transition-transform duration-700 [transition-timing-function:var(--ease-cinema)]"
              style={{
                transform: open ? "translateY(0)" : "translateY(1.5rem)",
                opacity: open ? 1 : 0,
                transitionDelay: `${120 + i * 70}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <a href="mailto:hello@andreasebastian.com" className="label mt-10">
            hello@andreasebastian.com
          </a>
        </div>
      </div>
    </header>
  );
}