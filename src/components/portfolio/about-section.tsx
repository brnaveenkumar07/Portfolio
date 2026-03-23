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
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
          <p className="max-w-3xl text-sm leading-8 text-zinc-300 sm:text-base">{aboutText}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
