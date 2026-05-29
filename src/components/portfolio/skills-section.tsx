import { skills } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Technical Expertise"
      title="Skills"
      description="Core technical skills listed in my resume."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.08}>
            <article className="portfolio-panel rounded-2xl p-5 sm:p-6">
              <h3 className="text-base font-semibold text-[var(--portfolio-text-strong)]">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="portfolio-chip rounded-full px-3 py-1 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
