"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/Hero-Section";
import { gridData } from "@/src/data/awardsData";

export default function NasaAwardsGrid() {
  // Set initial filter state to "nasa" since there is no "all" tab button
  const [activeFilter, setActiveFilter] = useState<"nasa" | "sports">("nasa");

  // Fixed Filter Logic Execution
  const filteredData = gridData.filter(
    (item) => item.categoryType === activeFilter,
  );

  return (
    <main>
      <div>
        <HeroSection
          title="Awards & Achievements"
          description="Committed to academic excellence, athletic leadership, and innovation. Explore our timeline of historic milestones."
        />
      </div>

      <section className="bg-[var(--primary-bg)] py-20 px-6 max-w-7xl mx-auto">
        {/* Dynamic Filter Navigation Bar */}
        <div className="flex flex-row items-center justify-center gap-3 pb-16 ">
          <button
            onClick={() => setActiveFilter("nasa")}
            style={{
              color: activeFilter === "nasa" ? "white" : "var(--text-1)",

              backgroundColor: activeFilter === "nasa" ? "var(--primary)" : "",
            }}
            className={`px-5 py-2  rounded-[var(--r-lg)] btn-md  uppercase  border border-[var(--border-color2)] transition-all cursor-pointer ${
              activeFilter === "nasa"
                ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-sm"
                : "border-[var(--border-color)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
            }`}
          >
            NASA Awards
          </button>
          <button
            onClick={() => setActiveFilter("sports")}
            style={{
              color: activeFilter === "sports" ? "white" : "var(--text-1)",

              backgroundColor:
                activeFilter === "sports" ? "var(--primary)" : "",
            }}
            className={`px-5 py-2  rounded-[var(--r-lg)] btn-md   uppercase  border border-[var(--border-color2)] transition-all cursor-pointer ${
              activeFilter === "sports"
                ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-sm"
                : "border-[var(--border-color)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
            }`}
          >
            Sports Awards
          </button>
        </div>

        {/* 2-Column Grid matching image_a0de3c.jpg structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[2400px]:grid-cols-3 gap-x-12 gap-y-10  items-start min-h-[400px]">
          {filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 items-start  "
              >
                {/* Left Side: Thumbnail Block */}
                <div className="w-full sm:w-[220px] md:w-[240px] lg:h-[170px]  flex-shrink-0 relative aspect-[16/10] overflow-hidden bg-[var(--secondary-bg)]">
                  <Image
                    width={480}
                    height={450}
                    src={item.imgSrc}
                    alt={item.sectionTitle}
                    className="w-full h-full object-cover transform   transition-transform duration-500"
                  />
                </div>

                {/* Right Side: Information Block */}
                <div className="flex-grow flex flex-col justify-start w-full">
                  {/* Title */}
                  <h6 className="text-[var(--text-1)] mb-1.5">
                    {item.sectionTitle}
                  </h6>

                  {/* Dynamic Clamped Content Block */}
                  <div className="text-[var(--text-2)] mb-4">
                    <div className="line-clamp-3">
                      {item.descriptionParagraphs.map((paragraph, pIdx) => (
                        <p key={pIdx} className="mb-2 small1">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Row mimicking 'Read Details' trigger */}
                  <Link
                    href={`/awards-section-page/${item.id}`}
                    className="group inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors cursor-pointer self-start"
                  >
                    <span>Read Details</span>
                    <div className="w-5 h-5 bg-[var(--primary)] group-hover:bg-[var(--primary-hover)] text-white flex items-center justify-center  rounded-[var(--r-lg)] transition-colors transform group-hover:translate-x-0.5">
                      ➔
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
