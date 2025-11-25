'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = images.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleScroll('next');
    }, 10000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleScroll = (dir: 'prev' | 'next') => {
    setDirection(dir);
    setCurrentIndex((prev) =>
      dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    );
    resetTimer();
  };

  const getIndex = (offset: number) => (currentIndex + offset + total) % total;

  return (
    <div className="relative w-full max-w-4xl mx-auto h-full overflow-hidden">
      <div className="relative w-full h-full">
        {[-1, 0, 1].map((offset) => {
          const idx = getIndex(offset);
          const isCenter = offset === 0;
          const translateX = offset * 60;

          return (
            <div
              key={`${images[idx]}-${offset}`} 
              className={`absolute top-0 transition-all duration-500 ease-in-out`}
              style={{
                left: '50%',
                top: 0,
                height: '100%', // <-- ensure this fills the carousel height
                transform: `translateX(${translateX}%) translateX(-50%) scale(${isCenter ? 1 : 0.8})`,
                zIndex: isCenter ? 20 : 10,
                opacity: isCenter ? 1 : 0.7,
              }}
            >
              <div className="relative w-[420px] h-full">
                <Image
                  src={images[idx]}
                  alt={`Image ${idx}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={() => handleScroll('prev')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/70 hover:bg-white rounded-l z-30"
      >
        ◀
      </button>
      <button
        onClick={() => handleScroll('next')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/70 hover:bg-white rounded-r z-30"
      >
        ▶
      </button>
    </div>
  );
}
