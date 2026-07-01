"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NasaAwardsSection() {
  // Synchronized Slide Index State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Read More / Show Less State
  const [isExpanded, setIsExpanded] = useState(false);

  // Unified Architecture Slide Dataset
  const slidesData = [
    {
      heroTitle: "NASA Awards 2019",
      heroDescription:
        "Celebrating absolute victory in artistic and thematic excellence at the grand zonal platform.",
      sectionTitle: "NASA Zonal Victory",
      imgSrc: "/campus/campus.png",
      caption:
        "Winner of Fashion and Dance Trophy at Zonal NASA Convention 2019",
      descriptionParagraphs: [
        `"The National Association of Students of Architecture (NASA India) is one of the largest Architectural Student Organizations in the world with student participants from more than two hundred colleges all over the India and countries around the world. The main objective of NASA India is to create a platform for architecture students to learn and interact, engage them directly and indirectly through both online and offline platforms.`,
        `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953. Today NASA India continues not just providing learning and experience to students from India and across the world, but also creating a connection and voice for the architecture student community." Our college became a part of NASA in the year 2013.`,
        `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953. Today NASA India continues not just providing learning and experience to students from India and across the world, but also creating a connection and voice for the architecture student community." Our college became a part of NASA in the year 2013.`,
      ],
    },
    {
      heroTitle: "NASA Design Exhibits",
      heroDescription:
        "Committed to academic excellence and strong leadership. Inspiring the next generation of innovators.",
      sectionTitle: "NASA Convention Floor",
      imgSrc: "/campus/campus.png",
      caption:
        "Our architecture students presenting their design at the convention floor",
      descriptionParagraphs: [
        `During the presentation phase, our design thesis groups showcased pioneering sustainable building workflows that garnered widespread acclaim among standard judging panels. This benchmark platform has expanded horizons for structural exploration across upcoming semesters.`,
        `By bringing collaborative tools to standard blueprint models, our team continues to build a stellar network among domestic architecture chapters. This dynamic exposure gives students real-world technical scale before heading into global project ecosystems.`,
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <main>
      <section className="bg-[var(--secondary-bg)] py-12 mt-36 md:py-16 px-10 max-w-7xl mx-auto relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-14">
          <h2>Awards Section</h2>
          <p>We are proud of our students and their achievements</p>
        </div>

        {/* Global Outer Wrapper mapping buttons to outer boundaries */}
        <div className="relative flex  items-center w-full group">
          {/* LEFT SLIDER BUTTON: Absolute left of the entire container */}
          {slidesData.length > 1 && (
            <button
              onClick={prevSlide}
              className="absolute -left-2 xl:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[var(--r-lg)] bg-white/90 hover:bg-white text-[var(--text-1)] flex items-center justify-center shadow-lg transition-all btn-md z-20 cursor-pointer border border-[var(--card-border)]"
              aria-label="Previous slide"
            >
              &#10094;
            </button>
          )}

          {/* Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full px-4 lg:px-6">
            {/* Dynamic Image Slider Track */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-[var(--r-lg-btn)] border border-[var(--card-border)] shadow-sm aspect-[4/3] md:aspect-[16/10]">
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                    >
                      <Image
                        width={1000}
                        height={800}
                        src={slide.imgSrc}
                        alt={`NASA Award Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        priority={index === currentSlide}
                      />

                      {/* Caption Overlay banner overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16 text-center">
                        {/* <span className="small1 text-white  block">
                          {slide.caption}
                        </span> */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dot Track Indicators */}
                {slidesData.length > 1 && (
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slidesData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-[var(--r-lg)] transition-all cursor-pointer ${
                          currentSlide === idx
                            ? "w-6 bg-[var(--primary)]"
                            : "bg-white/50 w-2"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Right Side Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-[var(--text-2)] min-h-[280px]">
              <div className="relative">
                <div className="mb-8 ">
                  <h3 className="text-[var(--text-1)]  transition-all duration-300">
                    {slidesData[currentSlide].sectionTitle}
                  </h3>
                  {/* <div className="w-16 h-1 bg-[var(--primary)] mt-3 rounded-[var(--r-lg)]"></div> */}
                </div>

                {/* Clamps text to roughly 10 lines when collapsed */}
                <div
                  className={`transition-all duration-300 ${!isExpanded ? "line-clamp-[10]" : ""}`}
                >
                  {slidesData[currentSlide].descriptionParagraphs.map(
                    (para, pIdx) => (
                      <p
                        key={pIdx}
                        className=" mb-4 transition-opacity duration-300"
                      >
                        {para}
                      </p>
                    ),
                  )}
                </div>

                {/* Read More / Show Less Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-[var(--primary)] hover:text-[var(--primary-hover)]  transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? "Show Less" : "Read More"}</span>
                  <span
                    className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  >
                    &#9662;
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER BUTTON: Absolute right of the entire container */}
          {slidesData.length > 1 && (
            <button
              onClick={nextSlide}
              className="absolute -right-10 xl:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[var(--r-lg)] bg-white/90 hover:bg-white text-[var(--text-1)] flex items-center justify-center shadow-lg transition-all btn-md z-20 cursor-pointer border border-[var(--card-border)]"
              aria-label="Next slide"
            >
              &#10095;
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
