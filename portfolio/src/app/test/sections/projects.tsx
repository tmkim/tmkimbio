"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "Munchie Mage",
      desc: "A playful recipe recommender powered by AI + Next.js + DRF.",
    },
    {
      title: "Bounty Hunter",
      desc: "Trading card analysis platform with price tracking + PostgreSQL.",
    },
    {
      title: "Portfolio",
      desc: "This site! A smooth, animated scroll experience.",
    },
  ];

  return (
    <motion.div
      {...fadeUp}
      className="grid gap-6 max-w-xl p-6"
    >
      <h2 className="text-4xl font-semibold text-center">Recent Projects</h2>

      {projects.map((proj) => (
        <motion.div
          key={proj.title}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral-100 p-4 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-gray-600">{proj.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
