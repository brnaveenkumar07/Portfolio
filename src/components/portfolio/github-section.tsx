"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { githubUsername } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionShell } from "@/components/portfolio/section-shell";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
  ssr: false,
  loading: () => <div className="portfolio-panel h-[128px] rounded-2xl" />,
});

const calendarTheme = {
  dark: ["#1a1a1a", "#1f3f2f", "#246a43", "#2f9b5f", "#43c57a"],
  light: ["#eef2f7", "#d8f3e3", "#9de0b9", "#52b979", "#20894d"],
};

export function GithubSection() {
  const { resolvedTheme } = useTheme();
  const colorScheme = resolvedTheme === "light" ? "light" : "dark";

  return (
    <SectionShell
      id="github"
      eyebrow="Proof of Work"
      title="GitHub Contributions"
      description="Contribution heatmap from GitHub."
    >
      <Reveal>
        <div className="portfolio-panel rounded-3xl p-4 sm:p-6">
          <div className="overflow-x-auto">
            <div className="min-w-190">
              <GitHubCalendar
                username={githubUsername}
                blockSize={11}
                blockMargin={4}
                fontSize={11}
                colorScheme={colorScheme}
                theme={calendarTheme}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
