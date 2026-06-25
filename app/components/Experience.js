"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: <GraduationCap size={28} className="text-blue-400" />,
    title: "Full-stack Development Journey",
    period: "2025 - Present",
    description:
      "Learning modern frontend and backend development with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS and other key concepts of web development for a full stacker.",
  },
  {
    icon: <Code2 size={28} className="text-blue-400" />,
    title: "Personal Projects",
    period: "2026",
    description:
      "Developed responsive websites including a Tigernut drink business website, a Computer & Solar display website, and this personal Portfolio using React and Next.js.",
  },
  {
    icon: <Rocket size={28} className="text-blue-400" />,
    title: "Career Goal",
    period: "Current",
    description:
      "Actively looking for internship, freelance, and junior full-stack developer opportunities while continuing to improve my full-stack development skills, while being in university.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          My Journey
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Every project I build helps me grow as a developer and prepares me
          for professional software development.
        </p>
      </motion.div>

      <div className="mt-16 space-y-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-blue-500"
          >
            <div>{item.icon}</div>

            <div>
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-blue-400">
                {item.period}
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}