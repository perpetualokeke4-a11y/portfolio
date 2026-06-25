"use client";

import { Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08101d]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Perpetual<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-3 max-w-sm text-gray-400">
              Full-Stack Developer passionate about creating modern,
              responsive and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-gray-300">
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>

            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">

            <a
              href="https://github.com/perpetualokeke4-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-blue-600"
            >
              GitHub
            </a>

            <a
              href="mailto:perpetualokeke4@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-gray-400 md:flex-row">

          <p>
            © {year} Perpetual Okeke. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart size={16} className="fill-red-500 text-red-500" />
            using Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}