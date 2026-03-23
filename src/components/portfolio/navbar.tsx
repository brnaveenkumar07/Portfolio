"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { navItems, sectionIds, type SectionId } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50"
    >
      <nav className="mx-auto flex w-[min(1040px,94vw)] items-center justify-between rounded-2xl border border-zinc-800/85 bg-zinc-950/80 px-4 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-6">
        <Link href="#home" className="text-xs font-semibold tracking-[0.2em] text-zinc-200 uppercase">
          BRNK
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[11px] font-medium tracking-[0.05em] transition-all",
                  active === item.id
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon-sm" className="border-zinc-700 bg-zinc-900/70 text-zinc-100" />
              }
            >
              <Menu />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[84vw] border-zinc-800 bg-zinc-950 p-6 text-zinc-100">
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <ul className="mt-10 space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        scrollToSection(item.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        active === item.id
                          ? "bg-zinc-800 text-zinc-100"
                          : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
