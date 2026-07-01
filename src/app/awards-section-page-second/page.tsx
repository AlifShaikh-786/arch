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
    <main className="bg-[var(--secondary-bg)] min-h-screen pb-24">
      <HeroSection
        title="Awards & Achievements"
        description="Committed to academic excellence, athletic leadership, and innovation. Explore our timeline of historic milestones."
      />

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Navigation */}
        <div className="flex flex-row items-center justify-center gap-3 mb-12 pb-4 ">
          <button
            onClick={() => setActiveFilter("nasa")}
            style={{
              color: activeFilter === "nasa" ? "white" : "var(--text-1)",

              backgroundColor: activeFilter === "nasa" ? "var(--primary)" : "",
            }}
            className={`px-5 py-2  rounded-[var(--r-lg)] btn-md  uppercase  border border-gray-200 transition-all cursor-pointer ${
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
            className={`px-5 py-2  rounded-[var(--r-lg)] btn-md  border-gray-200  uppercase  border transition-all cursor-pointer ${
              activeFilter === "sports"
                ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-sm"
                : "border-[var(--border-color)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
            }`}
          >
            Sports Awards
          </button>
        </div>

        {/* Premium Floating Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-stretch">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col relative transition-all duration-500 ease-out"
            >
              {/* Image Container Frame */}
              <div
                className="relative aspect-[16/9] overflow-hidden w-full bg-[var(--secondary-bg)] z-0 transition-all "
                style={{ borderRadius: "var(--r-btn)" }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.sectionTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Overlapping Content Box */}
              <div
                className="mx-4 -mt-10 p-6 bg-[var(--primary-bg)] border flex flex-col flex-grow relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:border-[var(--primary)]/30"
                style={{
                  borderColor: "var(--card-border)",
                  borderRadius: "var(--r-btn)",
                }}
              >
                {/* Micro Category Metadata */}
                {/* <span className=" font-semibold  uppercase text-[var(--text-2)] opacity-40 mb-2 block">
                  {activeFilter === "nasa"
                    ? "Research Designation"
                    : "Athletic Laurels"}
                </span> */}

                <h5 className="text-[var(--text-1)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                  {item.sectionTitle}
                </h5>

                <div className="text-[var(--text-2)] mb-6 flex-grow flex flex-col">
                  <div className="line-clamp-3 opacity-80">
                    {item.descriptionParagraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="small1 mb-2 last:mb-0  text-left"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Micro-Interaction Action Link */}
                <Link
                  href={`/awards-section-page/${item.id}`}
                  className="inline-flex items-center justify-between w-full text-[var(--primary)] mt-auto pt-4 border-t border-[var(--border-color)] group/link"
                >
                  <span className="font-semibold btn-md relative overflow-hidden h-5 block">
                    <span className="inline-block transition-transform duration-300 ease-out group-hover/link:text-[var(--primary-hover)]">
                      Know More
                    </span>
                  </span>

                  <div className="w-5 h-5 text-[var(--text-2)] opacity-40 flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100 group-hover/link:text-[var(--primary)]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/* Empty State Block */}
          {filteredData.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center bg-[var(--primary-bg)] rounded-[var(--r-btn)] border border-[var(--border-color)] border-dashed">
              <div className="w-16 h-16 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[var(--text-2)] opacity-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h5 className="text-[var(--text-1)] mb-2">
                No Records Available
              </h5>
              <p className="text-[var(--text-2)] max-w-sm small1 opacity-80">
                There are currently no achievements cataloged in this
                classification.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import HeroSection from "@/src/components/Hero-Section";
// import { gridData } from "@/src/data/awardsData";

// export default function NasaAwardsGrid() {
//   const [activeFilter, setActiveFilter] = useState<"nasa" | "sports">("nasa");

//   const filteredData = gridData.filter(
//     (item) => item.categoryType === activeFilter,
//   );

//   return (
//     <main className="bg-[var(--secondary-bg)] min-h-screen pb-32">
//       <HeroSection
//         title="Awards & Achievements"
//         description="Committed to academic excellence, athletic leadership, and innovation. Explore our timeline of historic milestones."
//       />

//       <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Architectural Tab Switcher */}
//         <div className="flex justify-center mb-20">
//           <div className="inline-flex p-1.5 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-[var(--r-btn)]">
//             <button
//               onClick={() => setActiveFilter("nasa")}
//               className={`px-8 py-2.5 rounded-[calc(var(--r-btn)-4px)] btn-md font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
//                 activeFilter === "nasa"
//                   ? "bg-[var(--primary)] text-white shadow-sm"
//                   : "text-[var(--text-2)] hover:text-[var(--text-1)]"
//               }`}
//             >
//               NASA Awards
//             </button>
//             <button
//               onClick={() => setActiveFilter("sports")}
//               className={`px-8 py-2.5 rounded-[calc(var(--r-btn)-4px)] btn-md font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
//                 activeFilter === "sports"
//                   ? "bg-[var(--primary)] text-white shadow-sm"
//                   : "text-[var(--text-2)] hover:text-[var(--text-1)]"
//               }`}
//             >
//               Sports Awards
//             </button>
//           </div>
//         </div>

//         {/* Premium Architectural Line Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-stretch">
//           {filteredData.map((item, index) => (
//             <div
//               key={item.id}
//               className="group flex flex-col justify-between relative pt-6 border-t border-[var(--border-color)] transition-all duration-500 hover:border-[var(--text-1)]"
//             >
//               {/* Top Structural Index String */}
//               <div className="flex justify-between items-center mb-6">
//                 <span className="text-[11px] font-mono tracking-widest text-[var(--text-2)] opacity-40">
//                   / 0{index + 1}
//                 </span>
//                 {item.year && (
//                   <span className="text-[11px] font-bold tracking-widest text-[var(--primary)]">
//                     {item.year}
//                   </span>
//                 )}
//               </div>

//               {/* Editorial Frame Layout */}
//               <div className="flex-grow flex flex-col">
//                 <h4 className="text-[var(--text-1)] mb-4 font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--primary)] leading-snug">
//                   {item.sectionTitle}
//                 </h4>

//                 {/* Micro Image Reveal Container */}
//                 <div className="relative w-full aspect-[21/9] my-4 overflow-hidden  contrast-125 transition-all duration-700 ease-out  group-hover:contrast-100 rounded-[var(--s-btn)]">
//                   <Image
//                     src={item.imgSrc}
//                     alt={item.sectionTitle}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="text-[var(--text-2)] mb-8 opacity-85 leading-relaxed text-left">
//                   <div className="line-clamp-3">
//                     {item.descriptionParagraphs.map((paragraph, pIdx) => (
//                       <p key={pIdx} className="small1 mb-2 last:mb-0">
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Minimalist Interactive Row Footer */}
//               <Link
//                 href={`/awards-section-page/${item.id}`}
//                 className="inline-flex items-center justify-between w-full pt-4 mt-auto group/link border-t border-transparent"
//               >
//                 <span className="font-semibold text-xs uppercase tracking-widest text-[var(--text-1)] group-hover/link:text-[var(--primary)] transition-colors duration-300">
//                   Know More
//                 </span>
//                 <div className="w-8 h-8 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] flex items-center justify-center transition-all duration-300 group-hover/link:bg-[var(--text-1)] group-hover/link:border-[var(--text-1)]">
//                   <svg
//                     className="w-3.5 h-3.5 text-[var(--text-1)] transition-colors duration-300 group-hover/link:text-[var(--primary-bg)] transform group-hover/link:translate-x-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </div>
//               </Link>
//             </div>
//           ))}

//           {/* Empty State Component */}
//           {filteredData.length === 0 && (
//             <div className="col-span-full flex flex-col items-center justify-center py-24 text-center border border-[var(--border-color)] rounded-[var(--r-btn)] bg-[var(--primary-bg)]">
//               <span className="text-[11px] font-mono tracking-widest text-[var(--text-2)] opacity-40 mb-3">
//                 / EMPTY_STATE
//               </span>
//               <h5 className="text-[var(--text-1)] mb-1">
//                 No Records Available
//               </h5>
//               <p className="text-[var(--text-2)] max-w-sm small1 opacity-70">
//                 There are currently no records cataloged in this classification.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }
