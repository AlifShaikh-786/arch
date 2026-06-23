"use client";

import { useState, useEffect, useRef, TransitionEvent } from "react";
import Image from "next/image";

const campusSlides = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600",
  },
  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600",
  },
  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600",
  },
];

export default function CampusLifeSlider() {
  // Triple clone array for a seamless endless scrolling effect
  const extendedSlides = [...campusSlides, ...campusSlides, ...campusSlides];
  const totalItems = campusSlides.length;

  // INCREASED SIZE: Setting clean uniform dimensions for card squares
  const itemWidth = 140;
  const gapWidth = 16;
  const stepDistance = itemWidth + gapWidth;

  // Track state setups
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Auto-Play Logic Loop Engine
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // 2. Click Navigation Routing Actions
  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // 3. Invisible Loop Reset Snapback
  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform") return;

    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalItems);
    } else if (currentIndex < totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // 4. Mobile Swiping / Mouse Drag Pointer Tracking
  const handleDragStart = (e: React.PointerEvent) => {
    stopAutoPlay();
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleDragEnd = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dragDistance = e.clientX - startX.current;

    if (dragDistance > 50) {
      handlePrev();
    } else if (dragDistance < -50) {
      handleNext();
    }

    setIsDragging(false);
    startAutoPlay();
  };

  // 5. Dynamic Active Target Center Frame Computations
  const activeSlideIndex =
    ((currentIndex % totalItems) + totalItems) % totalItems;
  const currentBgImage =
    campusSlides[activeSlideIndex]?.imgUrl || campusSlides[0].imgUrl;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-between items-center text-white overflow-hidden select-none">
      {/* Background Sync Canvas Projection Layer */}
      <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out">
        <Image
          src={currentBgImage}
          alt="Active Background Canvas projection"
          fill
          priority
          className="object-cover  scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      </div>

      {/* Header Overlay Title Frame */}
      <div className="relative z-10 w-full text-center pt-24 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold drop-shadow-2xl tracking-wide">
          DYPSOA Campus Life
        </h1>
      </div>

      {/* Main Track Slider Box Wrap Area */}
      <div className="relative z-10 w-full max-w-[1450px] px-8 pb-16 flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center">
          {/* Back Track Button */}
          <button
            onClick={() => {
              stopAutoPlay();
              handlePrev();
              startAutoPlay();
            }}
            className="absolute left-0 xl:-left-4 z-30 w-12 h-12 bg-black/50 hover:bg-red-600 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 transition-all active:scale-90 shadow-2xl"
            aria-label="Previous Slide"
          >
            <span className="text-xl">◀</span>
          </button>

          {/* Mask Slider View Window */}
          <div
            className="w-full max-w-[1100px] overflow-hidden py-6 cursor-grab active:cursor-grabbing"
            onPointerDown={handleDragStart}
            onPointerUp={handleDragEnd}
            onPointerLeave={() => {
              if (isDragging) setIsDragging(false);
            }}
          >
            {/* Moving Track Array Strip */}
            <div
              className="flex items-center"
              style={{
                // Mathematical center balancing offsets track according to the stepDistance
                transform: `translateX(calc(-${currentIndex * stepDistance}px + 50% - ${itemWidth / 2}px))`,
                transition: isTransitioning
                  ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
                gap: `${gapWidth}px`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((slide, index) => {
                const isCenter = index === currentIndex;
                return (
                  <div
                    key={`${slide.id}-${index}`}
                    onClick={() => {
                      stopAutoPlay();
                      setCurrentIndex(index);
                      startAutoPlay();
                    }}
                    style={{
                      width: `${itemWidth}px`,
                      height: `${itemWidth}px`,
                    }}
                    className="shrink-0 transition-all duration-300 ease-in-out"
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                        isCenter
                          ? "scale-110 ring-4 ring-white brightness-100 z-20 shadow-2xl"
                          : "scale-90 opacity-80 brightness-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={slide.imgUrl} 
                        alt="Campus Preview Gallery Thumbnail Card"
                        fill
                        sizes="140px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Track Button */}
          <button
            onClick={() => {
              stopAutoPlay();
              handleNext();
              startAutoPlay();
            }}
            className="absolute right-0 xl:-right-4 z-30 w-12 h-12 bg-black/50 hover:bg-red-600 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 transition-all active:scale-90 shadow-2xl"
            aria-label="Next Slide"
          >
            <span className="text-xl">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
}
