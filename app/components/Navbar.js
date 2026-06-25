"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1220]/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Perpetual<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group hover:text-blue-400 transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Button */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 rounded-full text-white font-medium hover:scale-105 transition shadow-lg shadow-blue-500/20"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        } bg-[#0B1220] border-t border-white/10`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-blue-600 px-6 py-2 rounded-full text-white"
          >
            Hire Me
          </a>
        </ul>
      </div>
    </header>
  );
}