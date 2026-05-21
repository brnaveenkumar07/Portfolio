import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { profileImageSrc } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

  return rawUrl.replace(/\/$/, "");
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "B R Naveen Kumar | Full Stack Developer",
  description:
    "Portfolio of B R Naveen Kumar, a Full Stack Developer focused on scalable web apps with modern frontend and backend technologies.",
  openGraph: {
    title: "B R Naveen Kumar | Full Stack Developer",
    description:
      "Explore projects, skills, experience, and GitHub contributions of B R Naveen Kumar.",
    type: "website",
    images: [profileImageSrc],
  },
  icons: {
    icon: "/favicon.svg",
    apple: profileImageSrc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("dark")}>
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
