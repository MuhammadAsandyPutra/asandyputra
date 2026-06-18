import { SectionHeading } from "@/src/components/layout/section-heading";

export function About() {
  return (
    <section id="about" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="01" title="About">
          A bit about who I am and how I work.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-5 text-pretty text-lg leading-relaxed md:col-span-2">
            <p>
              I&apos;m a full-stack software developer who loves the messy
              middle between design and engineering. I care about interfaces
              that feel fast, sturdy, and a little bit fun.
            </p>
            <p>
              Over the past six years I&apos;ve worked with startups and product
              studios shipping everything from real-time dashboards to developer
              tools. I write code that other developers actually enjoy reading.
            </p>
            <p>
              When I&apos;m not at the keyboard you&apos;ll find me bouldering,
              tinkering with mechanical keyboards, or over-engineering my coffee
              setup.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { k: "Location", v: "Indonesia, ID" },
              { k: "Focus", v: "Full-stack / Web" },
              { k: "Stack", v: "TypeScript · React · Flutter" },
              { k: "Status", v: "Open to projects" },
            ].map((item) => (
              <div
                key={item.k}
                className="border-[3px] border-border bg-card p-4 transition-brutal hover:-translate-y-1 hover:shadow-brutal"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.k}
                </div>
                <div className="mt-1 font-heading text-lg font-bold">
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
