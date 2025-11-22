"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const bubbles = [
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "passions", label: "Passions", href: "/passions" },
  { id: "contact", label: "Contact", href: "/contact" }
] as const;

// --- Motion Variants ---
const bubbleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
      delay: i * 0.12 // stagger entrance only
    }
  }),
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.15 // disappear immediately
    }
  }
};

export default function NavBubbles() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );

    observer.observe(intro);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="
            pointer-events-none 
            fixed inset-0 z-40 
            grid grid-cols-2 grid-rows-2
          "
        >
          {bubbles.map((b, index) => (
            <motion.div
              key={b.id}
              className="relative flex items-center justify-center"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={index} // gives the variant access to the index
            >
              <Link href={b.href} className="pointer-events-auto">
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.94 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="
                    flex items-center justify-center
                    rounded-full
                    bg-[var(--accent-2)]
                    text-[var(--foreground)]
                    shadow-xl
                    font-bold text-xl text-center text-black

                    w-[32vw] h-[32vw]
                    max-w-[320px] max-h-[320px]

                    border-4 border-[var(--accent)]
                  "
                >
                  {b.label}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
