"use client";

import React, { useRef } from "react";

export default function FacultySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const facultyMembers = [
    {
      name: "Dr. Abhijit Marathe",
      designation: "Principal / Professor",
      specialization: "Urban Planning & Sustainable Smart Cities",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Prof. Anjali Deshmukh",
      designation: "Head of Department (HOD)",
      specialization: "Vernacular Architecture & Heritage Conservation",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Prof. Vikram Kulkarni",
      designation: "Associate Professor",
      specialization: "Advanced Structural Mechanics & BIM Workflows",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Prof. Meera Joshi",
      designation: "Assistant Professor",
      specialization: "Landscape Design & Climatology Layouts",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Prof. Rahul Mehta",
      designation: "Assistant Professor",
      specialization: "Digital Fabrication & Parametric Studio Systems",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Prof. Sneha Patil",
      designation: "Studio Master / Faculty Coordinator",
      specialization: "Interior & Spatial Architecture Design Paradigms",
      photo:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400",
    },
  ];

  const scrollSlider = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap margins roughly
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-5 bg-[var(--secondary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--text-1)] ">Meet Our Faculty</h2>
            <p className="mt-3  text-[var(--text-2)]">
              Learn from acclaimed studio veterans, academic researchers, and
              active spatial planners driving design breakthroughs.
            </p>
          </div>

          {/* Slider Controls Trigger Elements */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollSlider("left")}
              className="w-10 h-10 border border-[var(--card-border)] bg-white rounded-[var(--s-btn)] flex items-center justify-center text-[var(--text-1)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
              aria-label="Scroll Left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="w-10 h-10 border border-[var(--card-border)] bg-white rounded-[var(--s-btn)] flex items-center justify-center text-[var(--text-1)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
              aria-label="Scroll Right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track Wrapper */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none gap-6 snap-x snap-mandatory pb-4"
        >
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-[var(--primary-bg)] border border-[var(--card-border)] rounded-[var(--r-btn)] shadow-sm  snap-start overflow-hidden group hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              {/* Photo Display Module */}
              <div className="w-full h-72 bg-[var(--secondary-bg)] overflow-hidden relative border-b border-[var(--border-color)]">
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-105"
                />
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-[var(--border-color)] rounded-[4px] px-2.5 py-1 text-[9px]   text-[var(--text-1)] uppercase">
                  STUDIO CORE // {index + 1}
                </div> */}
              </div>

              {/* Information Metadata Content Card */}
              <div className="p-5 space-y-2">
                <div>
                  <h5 className="text-[var(--text-1)] ">{faculty.name}</h5>
                  <span className="small1 text-[var(--primary)]  block mt-0.5">
                    {faculty.designation}
                  </span>
                </div>

                {/* <div className="w-full h-[1px] bg-[var(--border-color)] my-3" /> */}

                {/* <div>
                  <span className="block text-[10px]  text-[var(--text-2)] uppercase ">
                    Core Expertise
                  </span>
                  <p className="small1 text-[var(--text-2)]  mt-1">
                    {faculty.specialization}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
