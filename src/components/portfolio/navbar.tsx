"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const ids = useMemo(() => [...sectionIds], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

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
          className="relative overflow-hidden rounded-[22px] border border-white/12 bg-[linear-gradient(180deg,rgba(22,22,24,0.94),rgba(10,10,12,0.88))] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.35),0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_52%)]" />
          <div className="relative flex min-h-[72px] items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link
              href="#home"
              className="text-xs font-semibold tracking-[0.28em] text-zinc-100 uppercase transition-opacity hover:opacity-80"
            >
              PORTFOLIO
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      active === item.id
                        ? "bg-white text-zinc-950"
                        : "hover:bg-white/8 hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="rounded-full border border-white/10 bg-white/6 p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                        scrollToSection(item.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "block w-full rounded-2xl px-4 py-3 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        active === item.id
                          ? "bg-white text-zinc-950"
                          : "text-white/88 hover:bg-white/8 hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/35 to-transparent" />
      </div>
    </motion.header>
  );
}
