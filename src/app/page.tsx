import { About } from "@/src/components/about/page";
import { Hero } from "@/src/components/hero/page";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Work } from "../components/works/page";
import { Skills } from "@/src/components/skills/page";
import { Experience } from "../components/experience/page";
import { Contact } from "../components/contact/page";

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
