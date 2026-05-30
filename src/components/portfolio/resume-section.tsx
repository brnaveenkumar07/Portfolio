import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { resumeLink } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume"
      title="Download Resume"
      description="My latest resume in PDF format."
    >
      <Reveal>
        <div className="portfolio-panel flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <div className="portfolio-icon-tile rounded-xl p-2.5">
              <FileText className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--portfolio-text-strong)]">B R NAVEEN KUMAR - Resume</p>
              <p className="mt-1 text-sm text-[var(--portfolio-text-muted)]">PDF format, updated with latest internship and project experience.</p>
            </div>
          </div>
          <Link href={resumeLink} target="_blank">
            <Button className="portfolio-primary-button h-10 rounded-full px-5 transition-all duration-200 cursor-pointer">
              Download
              <Download className="size-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  );
}
