"use client";

import Link from "next/link";
import { MoonStar, Menu, SunMedium, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { navItems, sectionIds, type SectionId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function scrollToSection(id: SectionId) {
  const section = document.getElementById(id);
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [active, setActive] = useState<SectionId>("home");
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme !== "light";

  useEffect(() => {
    const getOrderedSections = () =>
      sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, element } : null;
        })
        .filter((item): item is { id: SectionId; element: HTMLElement } => Boolean(item))
        .sort(
          (a, b) =>
            a.element.getBoundingClientRect().top + window.scrollY -
            (b.element.getBoundingClientRect().top + window.scrollY)
        );

    const updateActiveSection = () => {
      const header = document.querySelector("header");
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
      const sections = getOrderedSections();

      if (!sections.length) {
        setActive("home");
        return;
      }

      const focalPoint = headerHeight + Math.max(140, window.innerHeight * 0.28);
      let current = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        const center = top + rect.height / 2;

        const distance =
          focalPoint >= top && focalPoint <= bottom
            ? 0
            : Math.abs(center - focalPoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          current = section.id;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (documentHeight - pageBottom < 8) {
        current = sections[sections.length - 1].id;
      }

      setActive((previous) => (previous === current ? previous : current));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-6"
    >
      <div className="mx-auto w-[min(1040px,94vw)]">
        <nav
          aria-label="Primary navigation"
          className="relative overflow-hidden rounded-[22px] border border-[var(--portfolio-border)] bg-[color-mix(in_srgb,var(--background)_84%,transparent)] shadow-[var(--portfolio-shadow-float)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_58%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_52%)]" />
          <div className="relative flex min-h-18 items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link
              href="#home"
              className="text-xs font-semibold tracking-[0.28em] text-foreground uppercase transition-opacity hover:opacity-80"
            >
              PORTFOLIO
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(item.id);
                      scrollToSection(item.id);
                    }}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium tracking-[0.01em] transition-[color,background-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-focus)] cursor-pointer",
                      active === item.id
                        ? "text-primary-foreground dark:text-zinc-950"
                        : "text-foreground/68 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-foreground/6"
                    )}
                    aria-current={active === item.id ? "page" : undefined}
                  >
                    {active === item.id ? (
                      <motion.span
                        layoutId="desktop-nav-active-pill"
                        className="absolute inset-0 rounded-full border border-[var(--portfolio-nav-active-border)] bg-[image:var(--portfolio-nav-active)] shadow-[0_10px_26px_-18px_rgba(15,23,42,0.72),inset_0_1px_0_rgba(255,255,255,0.18)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.75)]"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 280, damping: 32, mass: 0.9 }
                        }
                      />
                    ) : null}
                    <motion.span
                      className="relative z-10 block"
                      animate={{ y: active === item.id ? -0.2 : 0 }}
                      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
                    >
                      {item.label}
                    </motion.span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-2 text-foreground shadow-sm transition-colors duration-200 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-focus)] dark:hover:bg-foreground/6 lg:hidden cursor-pointer"
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] text-foreground shadow-sm transition-colors duration-200 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-focus)] dark:hover:bg-foreground/6 cursor-pointer"
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDarkTheme ? <MoonStar className="h-4.5 w-4.5" /> : <SunMedium className="h-4.5 w-4.5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id="mobile-nav-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="overflow-hidden border-t border-[var(--portfolio-border)] lg:hidden"
              >
                <div className="space-y-2 px-4 py-4 sm:px-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActive(item.id);
                        scrollToSection(item.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-[color,background-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-focus)] cursor-pointer",
                        active === item.id
                          ? "border border-[var(--portfolio-nav-active-border)] bg-[image:var(--portfolio-nav-active)] text-primary-foreground shadow-sm dark:text-zinc-950 dark:shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                          : "border border-transparent text-foreground/78 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-foreground/6"
                      )}
                      aria-current={active === item.id ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-slate-200/35 to-transparent dark:from-black/35" />
      </div>
    </motion.header>
  );
}
