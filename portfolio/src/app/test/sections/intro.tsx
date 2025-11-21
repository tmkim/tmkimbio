"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Intro() {
  return (
    <motion.div
      {...fadeUp}
      className="text-center space-y-4 p-6"
    >
      <h1 className="text-5xl font-bold tracking-tight">
        Hi, <span className="text-[var(--accent)]">I'm</span> <span className="text-[var(--accent-2)]">Tae-Min</span> 👋
      </h1>

      <p className="text-lg">
        Full-Stack Engineer crafting delightful and intentional UX.
      </p>
    </motion.div>
  );
}
