"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "@/src/components/Hero-Section";

export default function NasaAwardsGrid() {
  // Read More / Show Less State arrays to manage each item independently
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Grid Dataset with 3 template blocks
  const gridData = [
    {
      sectionTitle: "NASA Zonal Victory (2019)",
      imgSrc: "/campus/campus.png",
      caption:
        "Winner of Fashion and Dance Trophy at Zonal NASA Convention 2019",
      descriptionParagraphs: [
        `"The National Association of Students of Architecture (NASA India) is one of the largest Architectural Student Organizations in the world with student participants from more than two hundred colleges all over the India and countries around the world. The main objective of NASA India is to create a platform for architecture students to learn and interact, engage them directly and indirectly through both online and offline platforms.`,
        `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953." Our college became a part of NASA in the year 2013.`,
      ],
    },
    {
      sectionTitle: "Convention Floor Exhibits",
      imgSrc: "/campus/campus.png",
      caption:
        "Our architecture students presenting their design at the convention floor",
      descriptionParagraphs: [
        `During the presentation phase, our design thesis groups showcased pioneering sustainable building workflows that garnered widespread acclaim among standard judging panels. This benchmark platform has expanded horizons for structural exploration across upcoming semesters.`,
        `By bringing collaborative tools to standard blueprint models, our team continues to build a stellar network among domestic architecture chapters.`,
      ],
    },
    {
      sectionTitle: "Annual Design Trophies",
      imgSrc: "/campus/campus.png",
      caption:
        "Academic delegation panel viewing modern conceptual thesis entries",
      descriptionParagraphs: [
        `Honoring structural complexity and resource optimization, our delegation team successfully secured a top tier shortlisting spot during the annual creative awards cycle. This pushes our continuous design legacy forward across nationwide competition formats.`,
        `Students combined advanced rendering pipelines with custom structural bamboo methodologies to satisfy rigorous testing paradigms enforced by evaluating architects.`,
      ],
    },
    {
      sectionTitle: "NASA Zonal Victory (2019)",
      imgSrc: "/campus/campus.png",
      caption:
        "Winner of Fashion and Dance Trophy at Zonal NASA Convention 2019",
      descriptionParagraphs: [
        `"The National Association of Students of Architecture (NASA India) is one of the largest Architectural Student Organizations in the world with student participants from more than two hundred colleges all over the India and countries around the world. The main objective of NASA India is to create a platform for architecture students to learn and interact, engage them directly and indirectly through both online and offline platforms.`,
        `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953." Our college became a part of NASA in the year 2013.`,
      ],
    },
    {
      sectionTitle: "Convention Floor Exhibits",
      imgSrc: "/campus/campus.png",
      caption:
        "Our architecture students presenting their design at the convention floor",
      descriptionParagraphs: [
        `During the presentation phase, our design thesis groups showcased pioneering sustainable building workflows that garnered widespread acclaim among standard judging panels. This benchmark platform has expanded horizons for structural exploration across upcoming semesters.`,
        `By bringing collaborative tools to standard blueprint models, our team continues to build a stellar network among domestic architecture chapters.`,
      ],
    },
  ];

  return (
    <main>
      {/* Dynamic Grid Hero Banner Display */}
      <div>
        <HeroSection
          title="Awards Section"
          description="Committed to academic excellence and strong leadership. Explore our timeline of achievements and architectural milestones."
        />
      </div>

      <section className="bg-[var(--primary-bg)] py-10 md:py-14 px-4 max-w-7xl mx-auto">
        {/* Compact Grid Architecture - 3 columns on lg devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {gridData.map((item, index) => {
            const isExpanded = !!expandedItems[index];

            return (
              <div
                key={index}
                className="flex flex-col bg-[var(--primary-bg)] border border-[var(--card-border)] rounded-[var(--r-btn)] p-4 shadow-sm justify-between transition-all duration-300 hover:shadow-md"
              >
                {/* Compact Card Title Header */}
                <div className="mb-3">
                  <h4 className="text-[var(--text-1)] ">{item.sectionTitle}</h4>
                  <div className="w-10 h-0.5 bg-[var(--primary)] mt-1.5 rounded-full"></div>
                </div>

                {/* Compact Card Top Image Block */}
                <div className="relative overflow-hidden rounded-[var(--s-btn)] border border-[var(--card-border)] aspect-[16/11] mb-4">
                  <Image
                    width={600}
                    height={400}
                    src={item.imgSrc}
                    alt={item.sectionTitle}
                    className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Absolute Caption strip layer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 pt-10 text-center">
                    <span className="small1 text-white  block  ">
                      {item.caption}
                    </span>
                  </div>
                </div>

                {/* Compact Card Text Paragraph Contexts */}
                <div className="flex-grow flex flex-col gap-3 text-[var(--text-2)] mb-4">
                  <div
                    className={`transition-all duration-300 ${!isExpanded ? "line-clamp-[6]" : ""}`}
                  >
                    {item.descriptionParagraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className=" mb-2 ">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Individual Read More Trigger button */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="self-start text-[var(--primary)] hover:text-[var(--primary-hover)]   transition-colors duration-200 flex items-center gap-1 cursor-pointer mt-0.5"
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
            );
          })}
        </div>
      </section>
    </main>
  );
}
