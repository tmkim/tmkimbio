"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const bubbles = [
  {
    id: "passions",
    label: "Passions",
    href: "passions",
    src: "/preview/game3.png"
  },
  {
    id: "projects",
    label: "Projects",
    href: "projects",
    src: "/preview/game1.png"
  },
  {
    id: "resume",
    label: "Resume",
    href: "resume",
    src: "/preview/game2.png"
  },
  {
    id: "contact",
    label: "Contact",
    href: "contact",
    src: "/preview/game4.png"
  }
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
      delay: i * 0.12 // entrance stagger only
    }
  }),
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.15 // fast exit, no stagger
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
              custom={index}
            >
              <Link href={`#${b.href}`} className="pointer-events-auto">
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
                    relative
                    flex items-center justify-center
                    rounded-full
                    text-white font-bold text-2xl text-center
                    overflow-hidden
                    shadow-xl

                    w-[32vw] h-[32vw]
                    max-w-[320px] max-h-[320px]
                    min-w-[200px] min-h-[200px]

                    border-4 border-[var(--accent)]
                  "
                >
                  {/* Background image */}
                  <Image
                    src={b.src}
                    alt={b.label}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Text on top */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {b.label}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
