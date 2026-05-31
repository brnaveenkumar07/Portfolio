import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Footer } from "@/components/portfolio/footer";
import { GithubSection } from "@/components/portfolio/github-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ResumeSection } from "@/components/portfolio/resume-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-105 h-180 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.22),transparent_62%)] dark:bg-[radial-gradient(circle_at_top,rgba(58,184,122,0.24),transparent_62%)]" />
      <div className="pointer-events-none absolute top-56 -right-30 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />
      <Navbar />
      <main className="mx-auto w-[min(1040px,94vw)] pb-24 pt-28 sm:pt-32">
        <HeroSection />
        <div className="space-y-20 pt-18 sm:space-y-24 sm:pt-20 lg:space-y-26">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <GithubSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
