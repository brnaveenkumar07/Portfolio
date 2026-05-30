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
          <p className="text-[0.64rem] font-semibold tracking-[0.34em] text-[var(--portfolio-text-faint)] uppercase">Available for remote work</p>
          <div className="space-y-3">
            <p className="text-[0.66rem] tracking-[0.3em] text-[var(--portfolio-text-faint)] uppercase">Hello, I am</p>
            <h1 className="text-[2.35rem] leading-none font-semibold tracking-[-0.03em] text-[var(--portfolio-text-strong)] sm:text-5xl md:text-[3.8rem]">
              B R Naveen Kumar
            </h1>
            <p className="text-[1.02rem] text-[var(--portfolio-text)] sm:text-[1.12rem]">Full Stack Developer</p>
          </div>
          <p className="max-w-xl text-sm leading-[1.95] text-[var(--portfolio-text-muted)]">
            Full Stack Developer with hands-on experience in building scalable web applications using
            modern technologies across frontend and backend.
          </p>

          <div className="flex flex-wrap gap-2">
            <div className="portfolio-chip rounded-full px-3.5 py-1.5 text-xs">
              Projects <span className="ml-1 font-medium text-[var(--portfolio-text-strong)]">{projects.length}+</span>
            </div>
            <div className="portfolio-chip rounded-full px-3.5 py-1.5 text-xs">
              Skills <span className="ml-1 font-medium text-[var(--portfolio-text-strong)]">{skillCount}+</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="portfolio-primary-button h-10 rounded-full px-5 transition-all duration-200 cursor-pointer"
            >
              View Selected Work
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="portfolio-secondary-button h-10 rounded-full px-5 transition-all duration-200 cursor-pointer"
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
                  className="portfolio-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-all duration-200 hover:border-[var(--portfolio-border-hover)] hover:text-[var(--portfolio-text-strong)]"
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
            <div className="pointer-events-none absolute inset-[-28%] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.24)_0%,rgba(226,232,240,0.3)_28%,rgba(0,0,0,0)_68%)] blur-xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.07)_28%,rgba(0,0,0,0)_68%)]" />
            <div className="relative overflow-hidden rounded-full border border-[var(--portfolio-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.9))] p-2.5 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.65),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/16 dark:bg-[linear-gradient(180deg,rgba(84,84,88,0.88),rgba(42,42,46,0.94))] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.58)]">
              <div className="relative aspect-square overflow-hidden rounded-full border border-[var(--portfolio-border)] bg-slate-100 dark:border-white/10 dark:bg-zinc-950">
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
