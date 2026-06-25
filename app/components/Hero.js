"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-blue-400 font-semibold uppercase tracking-widest"
        >
          Full-stack Web Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
        >
          Hi, I'm <span className="text-blue-500">Perpetual Okeke</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          I create beautiful, responsive, and high-performance websites
          using React, Next.js, and Tailwind CSS and other modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}