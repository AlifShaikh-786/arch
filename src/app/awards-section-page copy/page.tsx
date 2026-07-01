"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/Hero-Section";
import { gridData } from "@/src/data/awardsData";

export default function NasaAwardsGrid() {
  const [activeFilter, setActiveFilter] = useState<"nasa" | "sports">("nasa");

  const filteredData = gridData.filter(
    (item) => item.categoryType === activeFilter,
  );

  return (
    <main className="bg-[var(--secondary-bg)] min-h-screen pb-16">
      <HeroSection
        title="Awards & Achievements"
        description="Committed to academic excellence, athletic leadership, and innovation. Explore our timeline of historic milestones."
      />

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveFilter("nasa")}
            className={`px-8 py-3 rounded-[var(--r-lg)] btn-md uppercase tracking-wide transition-all duration-300 ${
              activeFilter === "nasa"
                ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                : "bg-[var(--primary-bg)] text-[var(--text-2)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md"
            }`}
          >
            NASA Awards
          </button>
          <button
            onClick={() => setActiveFilter("sports")}
            className={`px-8 py-3 rounded-[var(--r-lg)] btn-md uppercase tracking-wide transition-all duration-300 ${
              activeFilter === "sports"
                ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                : "bg-[var(--primary-bg)] text-[var(--text-2)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md"
            }`}
          >
            Sports Awards
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[var(--primary-bg)] rounded-[var(--r-btn)] border border-[var(--card-border)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden w-full bg-[var(--secondary-bg)]">
                <Image
                  src={item.imgSrc}
                  alt={item.sectionTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Subtle Image Overlay on Hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <h4 className="text-[var(--text-1)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                  {item.sectionTitle}
                </h4>

                <div className="text-[var(--text-2)] mb-8 flex-grow flex flex-col">
                  <div className="line-clamp-3">
                    {item.descriptionParagraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="small1 mb-1.5 last:mb-0 text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <Link
                  href={`/awards-section-page/${item.id}`}
                  className="inline-flex items-center gap-3 text-[var(--primary)] mt-auto group/link max-w-fit"
                >
                  <span className="font-semibold btn-md relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-[120%]">Read Details</span>
                    <span className="inline-block absolute top-0 left-0 transition-transform duration-300 translate-y-[120%] group-hover/link:translate-y-0 text-[var(--primary-hover)]">Read Details</span>
                  </span>
                  
                  <div className="w-9 h-9 rounded-[var(--s-btn)] bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center transition-all duration-300 group-hover/link:bg-[var(--primary)] group-hover/link:text-white group-hover/link:shadow-md">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center bg-[var(--primary-bg)] rounded-[var(--r-btn)] border border-[var(--border-color)] border-dashed">
              <div className="w-20 h-20 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[var(--text-2)] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h5 className="text-[var(--text-1)] mb-3">No Awards Found</h5>
              <p className="text-[var(--text-2)] max-w-md">There are currently no awards cataloged in this section. Please check back later for updates.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
