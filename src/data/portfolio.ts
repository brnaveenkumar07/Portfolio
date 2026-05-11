export const sectionIds = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "github",
  "resume",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "Proof of Work" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/brnaveenkumar07" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/br-naveen-kumar" },
  { label: "Email", href: "mailto:brnaveenkumar1307@gmail.com" },
];

export const aboutText =
  "Full Stack Developer with hands-on experience in building scalable web applications using modern technologies. Skilled in both frontend and backend development, with a strong foundation in problem-solving and clean code practices. Completed internship experience at Prodigy Infotech, delivering real-world projects with a user-focused mindset.";

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Prodigy Infotech",
    period: "Feb 2026 - Mar 2026",
    location: "Remote",
    description:
      "Completed a hands-on internship delivering real-world full-stack tasks, built and deployed multiple projects, improved debugging and optimization practices, and collaborated through version-controlled task workflows.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend & Infrastructure",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "SQL", "Git", "GitHub", "Postman", "VS Code", "Codex"],
  },
];

export const projects = [
  {
    name: "SocialApp",
    description:
      "Built with Next.js 16 (App Router), React 19, Prisma ORM, and PostgreSQL. Includes key social-platform capabilities with notifications for likes, comments, and follows.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL"],
    sourceLink: "https://github.com/brnaveenkumar07/PRODIGY_FS_05",
    liveLink: "https://social-app-naveen.vercel.app",
  },
  {
    name: "E-Commerce",
    description:
      "Designed as a complete online store simulation with end-to-end shopping flow from product discovery to checkout and admin-side management.",
    stack: ["Next.js", "TypeScript", "State Management"],
    sourceLink: "https://github.com/brnaveenkumar07/PRODIGY_FS_03",
    liveLink: "https://ecommerce-naveen.vercel.app",
  },
  {
    name: "Employee Management System",
    description:
      "A modern web application designed to manage employee records securely and efficiently with a structured and maintainable interface.",
    stack: ["React", "Node.js", "Database"],
    sourceLink: "https://github.com/brnaveenkumar07/PRODIGY_FS_02",
    liveLink: "https://ems-naveen.vercel.app",
  },
];

export const contactDetails = {
  email: "brnaveenkumar1307@gmail.com",
  phone: "+91 8197456715",
  location: "Bangalore, India",
  availability:
    "Passionate about learning, optimizing performance, and creating user-focused solutions.",
};

export const resumeLink = "/resume.pdf";
export const githubUsername = "brnaveenkumar07";
export const profileImageSrc = "/profile.jpg?v=20260323";
