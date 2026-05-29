import { aboutText } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Who I Am"
      title="About"
      description="Summary from my resume and professional profile."
    >
      <Reveal>
        <div className="portfolio-panel rounded-3xl p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-8 text-[var(--portfolio-text)] sm:text-base">{aboutText}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
