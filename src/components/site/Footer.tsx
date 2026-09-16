import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="label">Orbit Studio — CGI & Product Film</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A creative studio exploring the relationship between products, people, and the world around them.
            Italy, working worldwide.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="label mb-2">Index</p>
          {[
            { to: "/", label: "Home" },
            { to: "/work", label: "Work" },
            { to: "/about", label: "Studio" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="label mb-2">Elsewhere</p>
          {[
            { href: "https://www.instagram.com/", label: "Instagram" },
            { href: "https://vimeo.com/", label: "Vimeo" },
            { href: "https://www.behance.net/", label: "Behance" },
            { href: "https://www.linkedin.com/", label: "LinkedIn" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-border py-8">
        <p className="label">© {new Date().getFullYear()} Orbit Studio</p>
        <p className="label">All frames rendered in-house</p>
      </div>
    </footer>
  );
}