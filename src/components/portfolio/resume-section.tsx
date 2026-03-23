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
        <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-2.5">
              <FileText className="size-5 text-zinc-200" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-100">B R NAVEEN KUMAR - Resume</p>
              <p className="mt-1 text-sm text-zinc-400">PDF format, updated with latest internship and project experience.</p>
            </div>
          </div>
          <Link href={resumeLink} target="_blank">
            <Button className="h-10 rounded-full bg-zinc-100 px-5 text-zinc-900 hover:bg-zinc-200">
              Download
              <Download className="size-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  );
}
