"use client";

import { useState } from "react";
import { motion, useAnimation, circInOut } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  built: string;
  imgs: string[];
};

const projects: Project[] = [
  {
    title: "Bounty Hunter",
    desc: "One Piece TCG deck builder and price tracker.",
    built: "Built with Next.js (Typescript), Django Rest Framework, PostgreSQL",
    imgs: ["/passions/p1.png"],
  },
  {
    title: "Dank Bank",
    desc: "Catalog of personal experiences to share my recommendations with the world.",
    built: "Built with Next.js (Typescript), Django Rest Framework, PostgreSQL",
    imgs: ["/passions/p2.png"],
  },
  {
    title: "T-Planet",
    desc: "Bare-bones study platform with customizable exam options to help prepare for the Taiwan Medical Licensing Exam.",
    built: "Built with MongoDB, Express, Angular, Node.js, PostgreSQL",
    imgs: ["/passions/p3.png"],
  },
  {
    title: "Something",
    desc: "Lorem ipsum idk the rest dude i'm just typing things in here lmao xd wtofwofjaskdl.",
    built: "Built with MongoDB, Express, Angular, Node.js, PostgreSQL",
    imgs: ["/passions/p4.png"],
  },
];

export default function FlipBookProjects() {
  const [current, setCurrent] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const project = projects[current];

  const [stackIndices, setStackIndices] = useState({
    left: (projects.length - 1) % projects.length,
    right: 1 % projects.length,
  });

  const resetToOpen = () => {
    leftControls.set({ rotateY: 0 });
    rightControls.set({ rotateY: 0 });
  };

  const flipPage = (dir: "next" | "prev") => {
    if (isFlipping) return;
    setIsFlipping(true);

    if (dir === "next") {
      setStackIndices({
        left: (current) % projects.length,
        right: (current + 1) % projects.length,
      })

      // Right page flips forward
      rightControls.start({
        rotateY: [0, -180],
        transition: { duration: 0.55, ease: circInOut },
      });

      leftControls.start({
        rotateY: [180, 0],
        transition: { duration: 0.55, ease: circInOut },
      });

      setTimeout(() => {
        setCurrent((c) => (c + 1) % projects.length);
      }, 275);

      setTimeout(() => {
        resetToOpen();
        setStackIndices({
          left: (current) % projects.length,
          right: (current + 2) % projects.length,
        })
        setIsFlipping(false);
      }, 560);
    }

    if (dir === "prev") {

    setStackIndices({
      left: (current - 1 + projects.length) % projects.length,
      right: (current) % projects.length,
    })
    
    leftControls.start({
      rotateY: [0, 180],
      transition: { duration: 0.55, ease: circInOut },
    });

    rightControls.start({
      rotateY: [180, 0],
      transition: { duration: 0.55, ease: circInOut },
    });
    
    // Mid-flip: update current
    setTimeout(() => {
      setCurrent((c) => (c - 1 + projects.length) % projects.length);
    }, 275);

    // After flip: reset rotation and update stack
    setTimeout(() => {
      resetToOpen();

      // compute new current manually to match what z-20 now shows
      const newCurrent = (current - 1 + projects.length) % projects.length;

      setStackIndices({
        left: (newCurrent - 1 + projects.length) % projects.length,
        right: (newCurrent + 1) % projects.length,
      });

      setIsFlipping(false);
    }, 560);
  }

  };

  // Page rendering helper
  const renderPage = (proj: Project, side: "left" | "right") => {
    const isLeft = side === "left";
    return (
      <div
        className={`relative p-6 shadow-2xl border-4 border-[#8c7358] overflow-hidden h-full ${
          isLeft ? "bg-[#f0e6d6] rounded-l-2xl" : "bg-[#fdf8ef] rounded-r-2xl"
        }`}
      >
        {isLeft ? (
          <>
            <h2 className="text-3xl font-extrabold font-serif text-[#3a2e1f] mb-4">
              {proj.title}
            </h2>
            <p className="text-lg text-[#4c3d2a] leading-relaxed whitespace-pre-line">
              {proj.desc}
            </p>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {proj.imgs.map((img) => (
              <div
                key={img}
                className="relative w-full h-32 rounded-xl overflow-hidden border border-[#d7c9b4]"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
        <div
          className={`absolute inset-0 pointer-events-none border-[8px] opacity-20 ${
            isLeft ? "rounded-l-2xl border-[#d7c9b4]" : "rounded-r-2xl border-[#d7c9b4]"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center w-full select-none">
      {/* NAV BUTTONS */}
      <div className="flex justify-between w-full max-w-4xl mb-4 z-50">
        <button
          onClick={() => flipPage("prev")}
          className="p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => flipPage("next")}
          className="p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* BOOK */}
      <div className="relative w-full max-w-4xl h-[500px] perspective-1500" style={{ perspective: "1500px" }}>
        {/* z-0: book cover */}
        <div className="absolute inset-0 bg-[#b89e7c] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] border-4 border-[#8c7358]" />

        {/* z-10: page stack (background) */}
        <div className="absolute inset-0 grid grid-cols-2 z-10 gap-0">
          {renderPage(projects[stackIndices.left], "left")}
          {renderPage(projects[stackIndices.right], "right")}
        </div>

        {/* z-20: current pages (animated) */}
        <div className="absolute inset-0 grid grid-cols-2 gap-0 z-20">
          <motion.div
            animate={leftControls}
            initial={{ rotateY: 0 }}
            className="relative origin-right overflow-hidden"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            {renderPage(project, "left")}
          </motion.div>

          <motion.div
            animate={rightControls}
            initial={{ rotateY: 0 }}
            className="relative origin-left overflow-hidden"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            {renderPage(project, "right")}
          </motion.div>
        </div>

        {/* SPINE */}
        <div className="absolute top-4 bottom-4 left-1/2 w-3 -translate-x-1/2 bg-[#6c5840] shadow-inner rounded-sm" />
      </div>
    </div>
  );
}
