"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["intro", "passions", "projects", "resume", "contact"];

export default function ScrollDots() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((id) => {
        const isActive = id === active;

        return (
          <button
            key={id}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group"
          >
            <motion.div
              animate={{
                height: isActive ? 14 : 10,
                width: isActive ? 14 : 10,
                backgroundColor: isActive
                  ? "var(--accent-2)"
                  : "var(--foreground)",
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-full"
            />
          </button>
        );
      })}
    </div>
  );
}
