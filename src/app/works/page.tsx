import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/src/components/layout/section-heading";

const projects = [
  {
    title: "SIBIRU Mobile",
    description:
      "Prototype for a mobile app built with Flutter for BSPJI Banjarbaru 2026 Super App.",
    tags: ["Flutter", "Firebase", "BlocS"],
    featured: true,
  },
  {
    title: "Prakarsa Hijau",
    description:
      "A sustainable urban planning tool for promoting green initiatives in cities.",
    tags: ["React JS", "Firebase", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Library BSPJI BJB",
    description:
      "A digital library management system for BSPJI Banjarbaru, enabling efficient cataloging and borrowing of books.",
    tags: ["PHP", "OPAC", "MySQL"],
    featured: false,
  },
  {
    title: "Signify",
    description:
      "An application for learning sign language with machine learning integration.",
    tags: ["Kotlin", "SQLite", "ML Kit"],
    featured: false,
  },
];

export function Work() {
  return (
    <section id="work" className="border-b-[3px] border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="02" title="Selected Work">
          A few projects I&apos;m proud of. Plenty more on GitHub.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col border-[3px] border-border bg-card p-6 transition-brutal hover:-translate-y-1 hover:shadow-brutal-lg ${
                project.featured ? "shadow-brutal" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/MuhammadAsandyPutra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source`}
                    className="flex h-9 w-9 items-center justify-center border-[3px] border-border bg-background transition-brutal hover:bg-accent hover:text-accent-foreground"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${project.title} live`}
                    className="flex h-9 w-9 items-center justify-center border-[3px] border-border bg-accent text-accent-foreground transition-brutal group-hover:rotate-12"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-[3px] border-border bg-background px-2.5 py-1 font-mono text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
