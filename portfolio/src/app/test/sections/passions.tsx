"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "@/components/image-carousel";
import { usePreloadImages } from "@/app/test/usePreloadImages";

const passions = [
  {
    id: "growth", label: "Growth", imgs: ["/passions/p9.png", "/passions/p10.png", "/passions/p11.png", "/passions/p12.png"],
    blurb: "I’m driven by the idea of always getting better — as a developer, a teammate, and a person. I like exploring new technologies, leveling up my skills through side projects, and staying curious about how things work under the hood. Learning is never “finished”; it’s just something I genuinely enjoy."
  },
  {
    id: "collaboration", label: "Collaboration", imgs: ["/passions/game1.png", "/passions/game2.png", "/passions/game3.png", "/passions/game4.png",],
    blurb: "I thrive in environments where people support each other and build things together. Whether it’s pairing on a tough bug, sharing knowledge, or helping a project move forward, I value clear communication and a positive team culture. Good collaboration turns good ideas into great results."
  },
  {
    id: "creativity", label: "Creativity", imgs: ["/passions/p1.png", "/passions/p2.png", "/passions/p3.png", "/passions/p4.png"],
    blurb: "I love combining technical problem-solving with a creative spark. Whether I’m designing intuitive UI interactions or finding an unconventional approach to a challenge, creativity is what keeps my work exciting. It’s where structure meets imagination — and where the best ideas tend to show up."
  },
  {
    id: "data", label: "Data", imgs: ["/passions/p5.png", "/passions/p6.png", "/passions/p7.png", "/passions/p8.png"],
    blurb: "I enjoy digging into data to understand patterns, uncover insights, and tell meaningful stories. From analytics to tinkering with pipelines, I like turning raw information into something useful. Data appeals to the logical part of my brain — the part that loves clarity, accuracy, and well-organized systems."
  },
  {
    id: "competition", label: "Competition", imgs: ["/passions/p9.png", "/passions/p10.png", "/passions/p11.png", "/passions/p12.png"],
    blurb: "I’m energized by challenges — whether it’s a tough engineering puzzle, a coding challenge, or even games that test strategy and adaptability. Competition pushes me to focus, learn quickly, and bring my best effort. I enjoy environments where improvement is the goal and friendly rivalry makes everyone stronger."
  },
];

export default function Passions() {
  const [active, setActive] = useState("growth");
  const passion = passions.find((p) => p.id === active)!;
  const allImages = passions.flatMap((p) => p.imgs);

  usePreloadImages(allImages);

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center px-16 py-20">
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
            ${active === p.id
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
    </div>

  );
}