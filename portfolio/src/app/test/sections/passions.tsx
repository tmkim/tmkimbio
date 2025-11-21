"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Passions() {
  const passions = [
    "Clean UI/UX ✨",
    "Modern Web Dev ⚡",
    "Backend Architecture 🔧",
    "Data Pipelines 📊",
    "Playful Interactions 🎮",
  ];

  return (
    <motion.div
      {...fadeUp}
      className="grid gap-4 text-center"
    >
      <h2 className="text-4xl font-semibold mb-4">Things I'm Into</h2>
      <div className="grid gap-2">
        {passions.map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.06, rotate: -1 }}
            className="text-lg text-gray-700 bg-white px-4 py-2 rounded-xl shadow-sm"
          >
            {p}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
