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
            <article className="portfolio-panel portfolio-panel-hover group h-full rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--portfolio-text-strong)]">{project.name}</h3>
                <ArrowUpRight className="mt-1 size-4 text-[var(--portfolio-text-faint)] transition-colors group-hover:text-[var(--portfolio-text)]" />
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--portfolio-text-muted)]">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="portfolio-chip rounded-full px-3 py-1 text-[11px]"
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
                  className="inline-flex text-sm font-medium text-[var(--portfolio-text-strong)] underline underline-offset-4 transition-colors duration-200 hover:text-slate-700 dark:hover:text-white"
                >
                  Live demo
                </Link>
                <Link
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-medium text-[var(--portfolio-text-muted)] underline underline-offset-4 transition-colors duration-200 hover:text-[var(--portfolio-text-strong)]"
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
