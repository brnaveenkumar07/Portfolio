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
            <article className="rounded-2xl border border-zinc-800/90 bg-zinc-900/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
              <h3 className="text-base font-semibold text-zinc-100">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
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
