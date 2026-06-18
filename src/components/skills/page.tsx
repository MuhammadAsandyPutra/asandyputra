import { SectionHeading } from "@/src/components/layout/section-heading";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Flutter",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Go", "PostgreSQL", "SQLite", "Firebase"],
  },
  {
    title: "Infra & Tools",
    skills: ["Docker", "Vercel", "CI/CD", "Git"],
  },
  {
    title: "Practices",
    skills: ["Testing", "Accessibility", "Design Systems", "Performance"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="03" title="Skills & Tools">
          The stack I reach for to ship reliable software.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-[3px] border-border bg-card p-6 transition-brutal hover:-translate-y-1 hover:shadow-brutal"
            >
              <h3 className="mb-4 inline-block bg-accent px-2 py-0.5 font-heading text-xl font-bold text-accent-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-[3px] border-border bg-background px-3 py-1.5 font-mono text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
