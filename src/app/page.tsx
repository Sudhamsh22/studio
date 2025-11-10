import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/sections/hero';
import { About } from '@/app/components/sections/about';
import { Skills } from '@/app/components/sections/skills';
import { Experience } from '@/app/components/sections/experience';
import { Projects } from '@/app/components/sections/projects';
import { Certifications } from '@/app/components/sections/certifications';
import { Leadership } from '@/app/components/sections/leadership';
import { Achievements } from '@/app/components/sections/achievements';
import { AtsOptimizer } from '@/app/components/sections/ats-optimizer';
import { Contact } from '@/app/components/sections/contact';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Certifications id="certifications" />
        <Leadership id="leadership" />
        <Achievements id="achievements" />
        <AtsOptimizer id="ats-optimizer" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}
