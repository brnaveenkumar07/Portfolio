import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mb-7 space-y-2.5 sm:mb-9">
        {eyebrow ? (
          <p className="text-[0.64rem] font-semibold tracking-[0.28em] text-zinc-500 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-[1.7rem] leading-tight font-semibold tracking-[-0.015em] text-zinc-100 sm:text-[1.95rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-[1.9] text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
