import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Projects included in my resume with live demos and source code."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <article className="group h-full rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
                <ArrowUpRight className="mt-1 size-4 text-zinc-500 transition-colors group-hover:text-zinc-300" />
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-zinc-700/80 bg-zinc-950 px-3 py-1 text-[11px] text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-medium text-zinc-100 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Live demo
                </Link>
                <Link
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-zinc-100"
                >
                  Source code
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
