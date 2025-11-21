"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Intro() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-white">
      <motion.div
        {...fadeUp}
        className="text-center space-y-4 p-6"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Hi, I'm <span className="text-blue-600">Ellie</span> 👋
        </h1>

        <p className="text-lg text-gray-600">
          Full-Stack Engineer crafting delightful and intentional UX.
        </p>
      </motion.div>
    </section>
  );
}
