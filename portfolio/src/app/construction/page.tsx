"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <AlertTriangle className="h-16 w-16 text-yellow-500 animate-pulse" />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          Page Under Construction
        </h1>
        <p className="mt-2 text-gray-600">
          We're working on something awesome! Check back soon.<br/>
          For now you can check out my projects on&nbsp;
          <a href="http://www.github.com/tmkim/"
          className="font-semibold text-blue-500 text-lg hover:text-blue-700 transition-colors duration-300"
          >Github</a>
        </p>
        <Link href="/">
          <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Go Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
