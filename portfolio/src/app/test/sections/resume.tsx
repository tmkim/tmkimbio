"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Resume() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-neutral-50">
      <motion.div {...fadeUp} className="text-center space-y-4 max-w-md p-6">
        <h2 className="text-4xl font-semibold">Resume</h2>
        <p className="text-gray-600">
          A quick look at my experience + background.
        </p>
        <a
          href="/Ellie_Resume.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      </motion.div>
    </section>
  );
}
