// components/ImageCarousel.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ImageCarouselProps = {
  folder: string;
  imageNames: string[];
};

export default function ImageCarousel({ folder, imageNames }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = imageNames.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 10000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
        timerRef.current && clearInterval(timerRef.current);
    }
  }, []);

  const handleManualScroll = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    );
    resetTimer();
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + total) % total;
  };

  return (
    <div className="relative flex w-full max-w-4xl mx-auto h-[400px] overflow-hidden">
      {[ -1, 0, 1 ].map((offset) => {
        const index = getImageIndex(offset);
        const isCenter = offset === 0;
        return (
          <div
            key={index}
            className={`transition-all duration-500 ease-in-out ${
              isCenter ? 'w-1/2 scale-100 z-20' : 'w-1/4 scale-95 opacity-80 z-10'
            }`}
          >
            <Image
              src={`/${folder}/${imageNames[index]}`}
              alt={`Image ${index}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={() => handleManualScroll('prev')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/70 hover:bg-white rounded-l z-30"
      >
        ◀
      </button>
      <button
        onClick={() => handleManualScroll('next')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/70 hover:bg-white rounded-r z-30"
      >
        ▶
      </button>
    </div>
  );
}
