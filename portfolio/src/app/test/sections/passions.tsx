"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "@/components/image-carousel";

const passions = [
  { id: "gaming", label: "Gaming", imgs: ["/passions/game1.png","/passions/game2.png","/passions/game3.png","/passions/game4.png",],
    blurb: "Idk dude stuff in here and whatever and like talking about what this is about and why it is included and what i enjoy about it i guess man idk bro lmao xd"
   },
  { id: "lifting", label: "Weightlifting", imgs: ["/passions/game2.png"],
    blurb: "Idk dude stuff in here and whatever and like talking about what this is about and why it is included and what i enjoy about it i guess man idk bro lmao xd"
   },
  { id: "tcg", label: "Trading Cards", imgs: ["/passions/game3.png"],
    blurb: "Idk dude stuff in here and whatever and like talking about what this is about and why it is included and what i enjoy about it i guess man idk bro lmao xd"
   },
  { id: "coding", label: "Coding Projects", imgs: ["/passions/game4.png"],
    blurb: "Idk dude stuff in here and whatever and like talking about what this is about and why it is included and what i enjoy about it i guess man idk bro lmao xd"
   },
];

export default function PassionsC() {
  const [active, setActive] = useState("gaming");
  const passion = passions.find((p) => p.id === active)!;

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-6 py-20">
  {/* Bordered Hero Container */}
  <div
    className="
      w-full max-w-screen-xl mx-auto
      border border-white/20
      rounded-3xl
      p-10 lg:p-16
      backdrop-blur-md
      bg-black/40
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
    "
  >
    {/* Header */}
    <h2 className="text-5xl font-bold mb-8">Passions</h2>

    {/* Buttons */}
    <div className="flex gap-4 mb-12 flex-wrap">
      {passions.map((p) => (
        <button
          key={p.id}
          onClick={() => setActive(p.id)}
          className={`
            px-6 py-3 rounded-full border text-base transition-all
            ${
              active === p.id
                ? "bg-white text-black border-white"
                : "border-white/40 text-white hover:border-white/80"
            }
          `}
        >
          {p.label}
        </button>
      ))}
    </div>

    {/* Larger Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* Big Image Area */}
      <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={passion.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageCarousel images={passion.imgs || []} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Area */}
      <div className="text-white text-lg leading-relaxed space-y-6">
        <p>{passion.blurb}</p>
        <p className="text-white/80">
          This is where you can expand a bit more about why this passion matters
          to you. Talk about memories, experiences, or what it’s taught you.
          The extra breathing room gives the section weight and keeps the page
          from feeling empty.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}