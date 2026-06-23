"use client";

import React, { useState } from "react";

export default function ArchitectureLabsAndFacilities() {
  const [selectedFacility, setSelectedFacility] = useState(0);

  const facilities = [
    {
      title: "Design Studios",
      desc: "Expansive, naturally lit collaborative spaces equipped with custom drafting tables and layout systems designed for continuous professional critique rounds.",
    },
    {
      title: "CAD Laboratory",
      desc: "High-performance computing workstations running industry-standard architectural engineering packages, simulation scripts, and structural rendering programs.",
    },
    {
      title: "Model Making Workshop",
      desc: "A hands-on physical production space packed with precision cutting tools, material molding tools, and laser systems for prototyping scaled forms.",
    },
    {
      title: "Material Museum",
      desc: "An analytical tactile database featuring advanced masonry finishes, innovative composites, eco-insulated glass mockups, and smart structural fittings.",
    },
    {
      title: "Library",
      desc: "A premium repository containing rare global architectural journals, international construction code manuals, historical blueprints, and rich digital resources.",
    },
    {
      title: "Smart Classrooms",
      desc: "Modern digital layout lecture spaces optimized with projection systems, acoustic balancing layouts, and hybrid streaming tech for expert masterclasses.",
    },
    {
      title: "Exhibition Space",
      desc: "A continuous gallery environment configured purposefully to curate public displays of selected student terminal works, historical models, and jury reviews.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--secondary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="small1 text-[var(--primary)] uppercase font-semibold block mb-2">
            Campus Infrastructure
          </span>
          <h2 className="text-[var(--text-1)]">
            Architecture Labs &amp; Facilities
          </h2>
          <p className="mt-3 font-light text-[var(--text-2)]">
            Explore our state-of-the-art experiential spaces engineered
            precisely to facilitate complex structural experiments, material
            handling, and rigorous studio critique loops.
          </p>
        </div>

        {/* Dynamic Structural Grid Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Modular Interactive Navigation List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {facilities.map((item, idx) => {
                const isActive = selectedFacility === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedFacility(idx)}
                    className={`w-full text-left px-5 py-4 rounded-[var(--s-btn)] border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-white border-[var(--primary)] shadow-sm"
                        : "bg-transparent border-transparent hover:bg-white/50 hover:border-[var(--card-border)]"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`font-mono text-[10px] font-bold ${isActive ? "text-[var(--primary)]" : "text-[var(--text-2)] opacity-60"}`}
                      >
                        0{idx + 1}
                      </span>
                      <h6
                        className={`font-bold transition-colors ${isActive ? "text-[var(--primary)]" : "text-[var(--text-1)]"}`}
                      >
                        {item.title}
                      </h6>
                    </div>

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-[var(--primary)] translate-x-0" : "text-[var(--text-2)] opacity-40 group-hover:translate-x-1"}`}
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
                );
              })}
            </div>
          </div>

          {/* Right Side: Centralized Studio Display & Narrative Box */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] shadow-sm flex flex-col justify-between h-full space-y-6">
              {/* Image Gallery Mockup Element */}
              <div className="w-full h-64 md:h-80 bg-[var(--secondary-bg)] rounded-[var(--s-btn)] overflow-hidden relative group border border-[var(--border-color)]">
                <img
                  src="http://googleusercontent.com/image_collection/image_retrieval/10906577149406293772"
                  alt={facilities[selectedFacility].title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Visual Label Tag Overlay */}
                <div className="absolute top-4 left-4 bg-[var(--primary)] text-white font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded-[4px] shadow-sm">
                  LIVE FACILITY STREAM // 0{selectedFacility + 1}
                </div>
              </div>

              {/* Dynamic Content Information Output */}
              <div className="space-y-2 pt-2">
                <h4 className="text-[var(--text-1)] font-bold">
                  {facilities[selectedFacility].title}
                </h4>
                <p className="small1 text-[var(--text-2)] font-light">
                  {facilities[selectedFacility].desc}
                </p>
              </div>

              {/* Decorative System Ground Technical Specifications Footer */}
              <div className="border-t border-[var(--border-color)] pt-4 flex items-center justify-between font-mono text-[10px] text-[var(--text-2)] uppercase opacity-60">
                <span>DR. D.Y. PATIL COA — CAMPUS LAB MAPPING</span>
                <span>STATUS: ACTIVE SETUP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
