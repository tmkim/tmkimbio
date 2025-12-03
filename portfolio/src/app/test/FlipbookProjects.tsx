"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, circInOut } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

function useIsVertical() {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const update = () => setIsVertical(window.innerWidth < 1260);
    update();                 // run once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isVertical;
}

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
    imgs: ["/passions/p1.png", "/passions/p2.png", "/passions/p3.png",],
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

  const isVertical = useIsVertical();
  const axis = isVertical ? "rotateX" : "rotateY";

  const originNext = isVertical ? "origin-bottom" : "origin-left";
  const originPrev = isVertical ? "origin-top" : "origin-right";

  const makeAnim = (axis: string, values: number[]) => {
    const obj: any = {
      transition: { duration: 0.55, ease: circInOut }
    };
    obj[axis] = values;
    return obj;
  };

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
    leftControls.set({ rotateY: 0, rotateX: 0 });
    rightControls.set({ rotateY: 0, rotateX: 0 });
  };


  const flipPage = (dir: "next" | "prev") => {
    if (isFlipping) return;
    setIsFlipping(true);

    const total = projects.length;

    // --- UPDATED ANIMATION LOGIC --- //
    if (dir === "next") {
      setStackIndices({
        left: current % total,
        right: (current + 1) % total,
      });

      if (axis === "rotateX") {
        // VERTICAL NEXT = FLIP UP
        // Outgoing (right) flips UP toward the top
        rightControls.start(makeAnim("rotateX", [0, -180]));   // up & away
        // Incoming (left) flips UP into view
        leftControls.start(makeAnim("rotateX", [180, 0]));   // from bottom → up
      } else {
        // HORIZONTAL NEXT (unchanged)
        rightControls.start(makeAnim("rotateY", [0, -180]));
        leftControls.start(makeAnim("rotateY", [180, 0]));
      }

      setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
      }, 275);

      setTimeout(() => {
        resetToOpen();
        setStackIndices({
          left: current % total,
          right: (current + 2) % total,
        });
        setIsFlipping(false);
      }, 560);
    }

    if (dir === "prev") {
      setStackIndices({
        left: (current - 1 + total) % total,
        right: current % total,
      });

      if (axis === "rotateX") {
        // VERTICAL PREV = FLIP DOWN
        // Outgoing (left) flips DOWN
        leftControls.start(makeAnim("rotateX", [0, -180]));    // down & away
        // Incoming (right) flips DOWN into view
        rightControls.start(makeAnim("rotateX", [180, 0]));    // from top → down
      } else {
        // HORIZONTAL PREV (unchanged)
        leftControls.start(makeAnim("rotateY", [0, 180]));
        rightControls.start(makeAnim("rotateY", [-180, 0]));
      }

      setTimeout(() => {
        setCurrent((c) => (c - 1 + total) % total);
      }, 275);

      setTimeout(() => {
        resetToOpen();

        const newCurrent = (current - 1 + total) % total;

        setStackIndices({
          left: (newCurrent - 1 + total) % total,
          right: (newCurrent + 1) % total,
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
        className={`relative p-6 shadow-2xl border-10 border-[#8c7358] overflow-hidden h-full ${isLeft ? "bg-[#f0e6d6] rounded-l-2xl" : "bg-[#f0e6d6] rounded-r-2xl"
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
          className={`absolute inset-0 pointer-events-none border-[8px] opacity-20 ${isLeft ? "rounded-l-2xl border-[#d7c9b4]" : "rounded-r-2xl border-[#d7c9b4]"
            }`}
        />
      </div>
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full select-none px-16">
      <div
        className="
      w-full max-w-screen-xl mx-auto
      border border-white/20
      rounded-3xl
      p-16
      backdrop-blur-md
      bg-black/40
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
    "
      >
        {/* BOOK */}
        <div className="relative w-full max-w-screen-xl  h-[600px] perspective-1500" style={{ perspective: "1500px" }}>
          {/* z-0: book cover */}
          <div className="absolute inset-0 bg-[#b89e7c] p-2 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] border-4 border-[#8c7358]" />

          {/* z-10: page stack */}
          <div className={`absolute inset-0 z-10 grid ${isVertical ? "grid-rows-2" : "grid-cols-2"} gap-0`}>
            {/* <div className="absolute inset-0 grid grid-cols-2 z-10 gap-0"> */}
            {renderPage(projects[stackIndices.left], "left")}
            {renderPage(projects[stackIndices.right], "right")}
          </div>

          {/* z-20: current pages (animated) */}
          <div className={`absolute inset-0 z-20 grid ${isVertical ? "grid-rows-2" : "grid-cols-2"} gap-0`}>
            {/* <div className="absolute inset-0 grid grid-cols-2 gap-0 z-20"> */}
            <motion.div
              animate={leftControls}
              initial={{ rotateY: 0, rotateX: 0 }}
              className={`relative ${originPrev} overflow-hidden`}
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              {renderPage(project, "left")}
            </motion.div>

            <motion.div
              animate={rightControls}
              initial={{ rotateY: 0, rotateX: 0 }}
              className={`relative ${originNext} overflow-hidden`}
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              {renderPage(project, "right")}
            </motion.div>

          </div>

          {/* SPINE */}
          <div className="absolute top-4 bottom-4 left-1/2 w-3 -translate-x-1/2 bg-[#6c5840] shadow-inner rounded-sm" />

          {/* NAV BUTTONS (positioned outside book) */}
          {!isVertical ? (
            <>
              {/* Horizontal buttons */}
              <button
                onClick={() => flipPage("prev")}
                className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl z-50"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => flipPage("next")}
                className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl z-50"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </>
          ) : (
            <>
              {/* Vertical buttons */}
              <button
                onClick={() => flipPage("prev")}
                className="absolute top-[-60px] left-1/2 -translate-x-1/2 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl z-50"
              >
                ↑
              </button>

              <button
                onClick={() => flipPage("next")}
                className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 shadow-xl z-50"
              >
                ↓
              </button>
            </>
          )}

        </div>
      </div>

    </div>

  );
}
