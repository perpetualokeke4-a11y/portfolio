"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Laptop,
  Globe,
} from "lucide-react";

const info = [
  {
    icon: <MapPin className="text-blue-400" size={22} />,
    title: "Location",
    value: "Abuja, Nigeria",
  },
  {
    icon: <Laptop className="text-blue-400" size={22} />,
    title: "Role",
    value: "Full-stack Web Developer",
  },
  {
    icon: <GraduationCap className="text-blue-400" size={22} />,
    title: "Learning",
    value: "React & Next.js",
  },
  {
    icon: <Globe className="text-blue-400" size={22} />,
    title: "Available",
    value: "Remote Opportunities",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
          About Me
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Passionate about building modern websites.
        </h2>

        <p className="text-gray-400 mt-8 leading-8 max-w-3xl">
          I'm Perpetual Okeke, a full-stack web developer passionate
          about creating beautiful, responsive, and user-friendly
          websites. I enjoy turning ideas into real digital
          experiences using React, Next.js, JavaScript, and
          Tailwind CSS and other key concepts of web development for 
          a full stacker.

          <br /><br />

          I'm continuously learning new technologies and looking
          for opportunities where I can contribute, grow, and
          solve real-world problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {info.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition"
          >
            {item.icon}

            <h3 className="mt-4 font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}