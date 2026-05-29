import { experiences } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Career"
      title="Experience"
      description="Internship experience listed in my resume."
    >
      <div className="space-y-4">
        {experiences.map((item, index) => (
          <Reveal key={item.role + item.company} delay={index * 0.06}>
            <article className="portfolio-panel portfolio-panel-hover rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--portfolio-text-strong)]">{item.role}</h3>
                <p className="text-xs text-[var(--portfolio-text-muted)]">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-[var(--portfolio-text)]">
                {item.company} <span className="text-[var(--portfolio-text-faint)]">• {item.location}</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--portfolio-text-muted)]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
