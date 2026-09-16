export function ContactCta({ label = "Start a project" }: { label?: string }) {
  return (
    <section className="shell border-t border-border pt-20 pb-28 md:pt-5 md:pb-36 bg-background text-foreground">
      {/* Scaled-down, minimal editorial headline */}
      <div>
        <span className="label">
          <span data-line>// NEXT STEPS</span>
        </span>

        {/* Action link & email link row */}
        <div className="mt-12 flex items-center gap-12">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 font-display text-xl tracking-tight transition-colors duration-500 hover:text-accent md:text-2xl"
          >
            <span>{label}</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="mailto:studio@vanta.studio"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            studio@vanta.studio
          </a>
        </div>
      </div>
    </section>
  );
}