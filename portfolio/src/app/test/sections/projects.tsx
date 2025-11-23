"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "Bounty Hunter",
      link: "https://github.com/tmkim/bountyhunter",
      desc: "One Piece TCG deck builder and price tracker.",
      built: "Built with Next.js (Typescript), Django Rest Framework, PostgreSQL"
    },
    {
      title: "Dank Bank",
      link: "https://github.com/tmkim/dank_bank",
      desc: "Catalog of personal experiences to share my recommendations with the world.",
      built: "Built with Next.js (Typescript), Django Rest Framework, PostgreSQL"
    },
    {
      title: "T-Planet",
      link: "https://github.com/tmkim/mle-basic",
      desc: "Bare-bones study platform with customizable exam options to help prepare for the Taiwan Medical Licensing Exam.",
      built: "Built with MongoDB, Express, Angular, Node.js, PostgreSQL"
    },
  ];

  return (
    <motion.div
      {...fadeUp}
      className="grid gap-6 max-w-xl p-6"
    >
      <h2 className="text-4xl font-semibold text-center">Recent Projects</h2>

      {projects.map((proj) => (
        <motion.a
          key={proj.title}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          className="bg-neutral-100 p-4 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-black">{proj.title}</h3>
          <p className="text-gray-600">{proj.desc}</p>
          <p className="text-gray-600 text-sm">{proj.built}</p>
        </motion.a>
      ))}
    </motion.div>
  );
}
