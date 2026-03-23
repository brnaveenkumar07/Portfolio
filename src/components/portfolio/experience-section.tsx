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
            <article className="rounded-2xl border border-zinc-800/90 bg-zinc-900/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors hover:border-zinc-700 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-100">{item.role}</h3>
                <p className="text-xs text-zinc-400">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-300">
                {item.company} <span className="text-zinc-500">• {item.location}</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
