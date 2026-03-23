"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profileImageSrc, projects, skills, socialLinks } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function HeroSection() {
  const skillCount = skills.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="home" className="scroll-mt-32 pt-4 sm:pt-6 lg:pt-8">
      <div className="grid items-center gap-11 lg:grid-cols-[1.14fr_0.86fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 sm:space-y-7"
        >
          <p className="text-[0.64rem] font-semibold tracking-[0.34em] text-zinc-500 uppercase">Available for remote work</p>
          <div className="space-y-3">
            <p className="text-[0.66rem] tracking-[0.3em] text-zinc-500 uppercase">Hello, I am</p>
            <h1 className="text-[2.35rem] leading-none font-semibold tracking-[-0.03em] text-zinc-100 sm:text-5xl md:text-[3.8rem]">
              B R Naveen Kumar
            </h1>
            <p className="text-[1.02rem] text-zinc-300 sm:text-[1.12rem]">Full Stack Developer</p>
          </div>
          <p className="max-w-xl text-sm leading-[1.95] text-zinc-400">
            Full Stack Developer with hands-on experience in building scalable web applications using
            modern technologies across frontend and backend.
          </p>

          <div className="flex flex-wrap gap-2">
            <div className="rounded-full border border-zinc-800/90 bg-zinc-900/65 px-3.5 py-1.5 text-xs text-zinc-300">
              Projects <span className="ml-1 text-zinc-100">{projects.length}+</span>
            </div>
            <div className="rounded-full border border-zinc-800/90 bg-zinc-900/65 px-3.5 py-1.5 text-xs text-zinc-300">
              Skills <span className="ml-1 text-zinc-100">{skillCount}+</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="h-10 rounded-full bg-zinc-100 px-5 text-zinc-900 shadow-[0_10px_30px_rgba(255,255,255,0.14)] hover:bg-zinc-200"
            >
              View Selected Work
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="h-10 rounded-full border-zinc-700 bg-zinc-900/40 px-5 text-zinc-100 hover:bg-zinc-900"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Github;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
                >
                  <Icon className="size-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mx-auto flex w-full justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[17rem] sm:max-w-[18.5rem] lg:max-w-[20rem]">
            <div className="pointer-events-none absolute inset-[-28%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.07)_28%,rgba(0,0,0,0)_68%)] blur-xl" />
            <div className="relative overflow-hidden rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(84,84,88,0.88),rgba(42,42,46,0.94))] p-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.58)]">
              <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-zinc-950">
              <Image
                src={profileImageSrc}
                alt="B R Naveen Kumar"
                fill
                priority
                sizes="(max-width: 640px) 17rem, (max-width: 1024px) 18.5rem, 20rem"
                className="object-cover object-[50%_18%]"
              />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
