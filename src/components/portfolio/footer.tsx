export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex w-[min(1120px,94vw)] flex-col items-center justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} B R Naveen Kumar. All rights reserved.</p>
        <p>Bangalore, India</p>
      </div>
    </footer>
  );
}
