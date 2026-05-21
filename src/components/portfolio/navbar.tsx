"use client";

import Link from "next/link";
import { MoonStar, Menu, SunMedium, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
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
          className="relative overflow-hidden rounded-[22px] border border-border/70 bg-background/80 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.22),0_10px_30px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_52%)]" />
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
                      "relative rounded-full px-3.5 py-2 text-sm font-medium tracking-[0.01em] transition-[color,background-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      active === item.id
                        ? "text-zinc-950"
                        : "text-foreground/72 hover:bg-foreground/6 hover:text-foreground"
                    )}
                    aria-current={active === item.id ? "page" : undefined}
                  >
                    {active === item.id ? (
                      <motion.span
                        layoutId="desktop-nav-active-pill"
                        className="absolute inset-0 rounded-full border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,236,236,0.94))] shadow-[0_8px_24px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.75)]"
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
              className="rounded-full border border-border/70 bg-background/80 p-2 text-foreground transition-colors hover:bg-foreground/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition-colors hover:bg-foreground/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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
                className="overflow-hidden border-t border-white/10 lg:hidden"
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
                        "block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-[color,background-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        active === item.id
                          ? "border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,236,236,0.94))] text-zinc-950 shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                          : "border border-transparent text-foreground/88 hover:bg-foreground/6 hover:text-foreground"
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

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-black/35 to-transparent" />
      </div>
    </motion.header>
  );
}
