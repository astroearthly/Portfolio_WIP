import type { Project } from "@/data/projects";

export function PowerStation({ project }: { project: Project }) {
  return (
    <section className="shell py-24 md:py-32">
      <h2 className="text-2xl">{project.title} - Layout placeholder</h2>
      <p className="text-muted-foreground mt-4">
        You can now start building the specific layout for {project.title} here.
      </p>
    </section>
  );
}