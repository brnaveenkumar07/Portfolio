"use client";

import dynamic from "next/dynamic";
import { githubUsername } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionShell } from "@/components/portfolio/section-shell";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
  ssr: false,
  loading: () => <div className="h-[128px] rounded-2xl border border-zinc-800/80 bg-zinc-950/70" />,
});

const calendarTheme = {
  dark: ["#1a1a1a", "#1f3f2f", "#246a43", "#2f9b5f", "#43c57a"],
};

export function GithubSection() {
  return (
    <SectionShell
      id="github"
      eyebrow="Proof of Work"
      title="GitHub Contributions"
      description="Contribution heatmap from GitHub."
    >
      <Reveal>
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <div className="overflow-x-auto">
            <div className="min-w-190">
              <GitHubCalendar
                username={githubUsername}
                blockSize={11}
                blockMargin={4}
                fontSize={11}
                colorScheme="dark"
                theme={calendarTheme}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
