import { About } from "@/src/app/about/page";
import { Hero } from "@/src/app/hero/page";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Work } from "./works/page";
import { Skills } from "@/src/app/skills/page";
import { Experience } from "./experience/page";
import { Contact } from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}
