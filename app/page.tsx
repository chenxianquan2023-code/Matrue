import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Founders } from "@/components/founders";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Founders />
      <Process />
      <Projects />
      <CTA />
    </main>
  );
}
