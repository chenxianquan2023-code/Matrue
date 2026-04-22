import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Founders } from "@/components/founders";
import { Impact } from "@/components/impact";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Founders />
      <Impact />
      <Process />
      <Projects />
      <CTA />
    </main>
  );
}
