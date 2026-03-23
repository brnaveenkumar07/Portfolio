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
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
          <p className="max-w-xl text-sm leading-7 text-zinc-400">{contactDetails.availability}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <Mail className="size-4 text-zinc-300" />
              <p className="mt-2 text-xs text-zinc-500 uppercase tracking-[0.18em]">Email</p>
              <p className="mt-1 text-sm text-zinc-200">{contactDetails.email}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <Phone className="size-4 text-zinc-300" />
              <p className="mt-2 text-xs text-zinc-500 uppercase tracking-[0.18em]">Phone</p>
              <p className="mt-1 text-sm text-zinc-200">{contactDetails.phone}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <MapPin className="size-4 text-zinc-300" />
              <p className="mt-2 text-xs text-zinc-500 uppercase tracking-[0.18em]">Location</p>
              <p className="mt-1 text-sm text-zinc-200">{contactDetails.location}</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href={`mailto:${contactDetails.email}`}>
              <Button className="h-10 rounded-full bg-zinc-100 px-5 text-zinc-900 hover:bg-zinc-200">
                Start a conversation
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
