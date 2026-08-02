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
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
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
  "Detail-oriented Full Stack Developer with hands-on experience building responsive web applications using React, Next.js, Node.js, Express.js, MongoDB, SQL, and JavaScript. Proficient in frontend and backend development with a strong foundation in problem-solving, clean code practices, and REST API development. Completed a Full Stack Development internship at Prodigy Infotech, contributing to real-world projects in a collaborative development environment.";

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Prodigy Infotech",
    period: "Feb 2026 - Mar 2026",
    location: "Remote",
    description:
      "Executed real-world full-stack development tasks using modern frontend and backend technologies. Developed and deployed 3+ web applications with React.js, Node.js, Express.js, MongoDB, and JavaScript; debugged and optimized frontend and backend performance issues; and collaborated using Git/GitHub within structured development workflows.",
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
    items: ["MongoDB", "SQL", "Git", "GitHub", "Postman", "VS Code"],
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
  location: "Bengaluru, India",
  availability:
    "Passionate about learning, optimizing performance, and creating user-focused solutions.",
};

export const resumeLink = "/resume.pdf";
export const githubUsername = "brnaveenkumar07";
export const profileImageSrc = "/profile.jpg?v=20260323";
