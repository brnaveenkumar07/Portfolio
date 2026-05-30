import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/data/portfolio";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Reveal } from "@/components/portfolio/reveal";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get In Touch"
      description="Contact details from my resume."
    >
      <Reveal>
        <div className="portfolio-panel rounded-3xl p-6 sm:p-8">
          <p className="max-w-xl text-sm leading-7 text-[var(--portfolio-text-muted)]">{contactDetails.availability}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="portfolio-panel rounded-xl p-4">
              <Mail className="size-4 text-[var(--portfolio-text)]" />
              <p className="mt-2 text-xs text-[var(--portfolio-text-faint)] uppercase tracking-[0.18em]">Email</p>
              <p className="mt-1 break-all text-sm text-[var(--portfolio-text-strong)]">{contactDetails.email}</p>
            </div>
            <div className="portfolio-panel rounded-xl p-4">
              <Phone className="size-4 text-[var(--portfolio-text)]" />
              <p className="mt-2 text-xs text-[var(--portfolio-text-faint)] uppercase tracking-[0.18em]">Phone</p>
              <p className="mt-1 text-sm text-[var(--portfolio-text-strong)]">{contactDetails.phone}</p>
            </div>
            <div className="portfolio-panel rounded-xl p-4">
              <MapPin className="size-4 text-[var(--portfolio-text)]" />
              <p className="mt-2 text-xs text-[var(--portfolio-text-faint)] uppercase tracking-[0.18em]">Location</p>
              <p className="mt-1 text-sm text-[var(--portfolio-text-strong)]">{contactDetails.location}</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href={`mailto:${contactDetails.email}`}>
              <Button className="portfolio-primary-button h-10 rounded-full px-5 transition-all duration-200 cursor-pointer">
                Start a conversation
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
