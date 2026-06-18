import { SectionHeading } from "@/src/components/layout/section-heading";

const experience = [
  {
    period: "2025 - 2026",
    role: "information technology manager - Intern",
    company: "BSPJI Banjarbaru",
    description:
      "Led the development of a mobile app for the BSPJI Banjarbaru 2026 Super App, collaborating with cross-functional teams to deliver a seamless user experience. Implemented features such as real-time notifications, user authentication, and data synchronization using Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "NextJS"],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack React Developer - Intern",
    company: "Dicoding Indonesia",
    description:
      "Contributed to the development of a web application for an e-commerce platform, implementing responsive UI components and integrating RESTful APIs. Collaborated with designers and backend developers to enhance user experience and optimize performance.",
    tags: ["React", "Node", "Firebase"],
  },
  {
    period: "2023",
    role: "Mobile Developer - Intern",
    company: "Bangkit Academy Batch 2",
    description:
      "Developed a mobile application for a local non-profit organization, focusing on user-friendly design and efficient functionality. Utilized Kotlin and SQLite to create features such as event scheduling, volunteer management, and data visualization.",
    tags: ["Kotlin", "SQLite", "ML Kit"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b-[3px] border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="04" title="Experience">
          Where I&apos;ve worked and what I shipped.
        </SectionHeading>

        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid gap-4 border-[3px] border-border bg-card p-6 transition-brutal hover:-translate-x-1 hover:shadow-brutal md:grid-cols-4"
            >
              <div className="font-mono text-sm font-bold uppercase tracking-wide text-muted-foreground">
                {job.period}
              </div>
              <div className="md:col-span-3">
                <h3 className="font-heading text-xl font-bold">
                  {job.role}{" "}
                  <span className="bg-accent px-1.5 text-accent-foreground">
                    @ {job.company}
                  </span>
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-[3px] border-border bg-background px-2.5 py-1 font-mono text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
