"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  return (
    <motion.div {...fadeUp} className="text-center space-y-4 p-6">
      <h2 className="text-4xl font-semibold">Let's Talk</h2>

      <p className="text-gray-600">
        I love connecting with people who build cool things.
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href="mailto:youremail@example.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/yourname"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
