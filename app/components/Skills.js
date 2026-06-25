"use client";

import { motion } from "framer-motion";

const skills = [
  // Frontend
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",

  // Backend
  "Node.js",
  "Express.js",
  "REST APIs",
  "Authentication (JWT)",
  "Server Actions",

  // Database
  "PostgreSQL",
  "MongoDB",
  "Prisma",

  // Tools
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
  "Postman",

  // Additional
  "SEO",
  "Framer Motion",
  "Firebase",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        Skills
      </motion.h2>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-center transition hover:scale-105 hover:border-blue-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}