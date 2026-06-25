"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Tigernut Drink Website",
    description:
      "A modern business website built with Next.js and Tailwind CSS for showcasing Tigernut Drink products.",
    image: "/images/tigernutdrink.png",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/perpetualokeke4-a11y/DIMMAPREMIUM",
    live: "https://dimmapremium.vercel.app/",
  },
  {
    title: "A Computer & Solar display website",
    description:
      "A responsive food blog with beautiful layouts and recipe pages.",
    image: "/images/glotech.png",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/perpetualokeke4-a11y/glotech",
    live: "https://glotech-psi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
          Portfolio
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Here are some of the projects I've built using React,
          Next.js and Tailwind CSS.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-blue-500"
          >
            <div className="relative h-64 w-full">
              <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.live}
                  className="rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-blue-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}