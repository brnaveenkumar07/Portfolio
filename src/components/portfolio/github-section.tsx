"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/theme-provider";
import { githubUsername } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionShell } from "@/components/portfolio/section-shell";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
  ssr: false,
  loading: () => (
    <div className="h-[168px] rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-muted)]" />
  ),
});

const calendarTheme = {
  dark: ["#18181b", "#1f3a2e", "#256d46", "#33a967", "#65d98b"],
  light: ["#cfd8e3", "#8fd9aa", "#45b871", "#238f52", "#0f5f39"],
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
            <div className="min-w-205">
              <GitHubCalendar
                username={githubUsername}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme={colorScheme}
                theme={calendarTheme}
                style={{ color: "currentColor" }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
