// import React from "react";

// export default function WhyChooseBArch() {
//   const pillars = [
//     {
//       title: "Experienced Faculty",
//       desc: "Learn from practicing architects, urban planners, and global researchers who bridge theoretical spatial concepts with contemporary studio practices.",
//     },
//     {
//       title: "Modern Design Studios",
//       desc: "Work in large, high-ceiling collaborative studios equipped with advanced draft systems, ergonomic layouts, and specialized spatial modeling zones.",
//     },
//     {
//       title: "Industry Collaborations",
//       desc: "Engage with prominent design firms, real estate consortiums, and technology teams to solve live architectural challenges during your studies.",
//     },
//     {
//       title: "Site Visits",
//       desc: "Gain immediate contextual experience through structured site analyses, heritage studies, real-time construction tracking, and structural field mapping.",
//     },
//     {
//       title: "Workshops & Seminars",
//       desc: "Participate in specialized modules covering digital fabrication, parametric design modeling, material research testing, and expert masterclasses.",
//     },
//     {
//       title: "Sustainable Design Focus",
//       desc: "Master climate-responsive layout methodologies, green building certification standards (IGBC/GRIHA), and renewable energy resource integrations.",
//     },
//     {
//       title: "Internship Opportunities",
//       desc: "Access an elite practical training network across leading tier-1 architecture and construction firms during your critical final semesters.",
//     },
//     {
//       title: "Strong Placement Support",
//       desc: "Benefit from structured professional portfolio reviews, technical interview simulations, and exclusive placement drives with top global employers.",
//     },
//   ];

//   return (
//     <section
//       className="py-20 px-5 "
//       style={{ backgroundColor: "var(--secondary-bg)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header Accent */}
//         <div className="max-w-3xl mb-9">
//           {/* <span
//             className="small1 uppercase   block mb-2"
//             style={{ color: "var(--primary)" }}
//           >
//             The Institutional Advantage
//           </span> */}
//           <h2 style={{ color: "var(--text-1)" }} className="mb-4">
//             Why Choose B.Arch at Our College?
//           </h2>
//           <p className="" style={{ color: "var(--text-2)" }}>
//             We provide a rigorous ecosystem engineered to transform aspiring
//             creative minds into highly technical, globally competent
//             architectural innovators.
//           </p>
//         </div>

//         {/* Structural Pillars Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {pillars.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border p-6 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
//               style={{
//                 borderColor: "var(--border-color)",
//                 borderRadius: "var(--r-btn)",
//               }}
//             >
//               <div>
//                 {/* Structural Card Accent Index */}
//                 <span
//                   className="  block mb-4"
//                   style={{ color: "var(--primary)" }}
//                 >
//                   0{index + 1}
//                 </span>

//                 <h4
//                   className="  mb-2"
//                   style={{
//                     color: "var(--text-1)",
//                     fontSize: "var(--h5-size)",
//                     lineHeight: "var(--h5-line-height)",
//                   }}
//                 >
//                   {item.title}
//                 </h4>

//                 <p className="small1  " style={{ color: "var(--text-2)" }}>
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";

export default function WhyChooseBArch() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const pillars = [
    {
      title: "Experienced Faculty",
      desc: "Learn from practicing architects, urban planners, and global researchers who bridge theoretical spatial concepts with contemporary studio practices.",
    },
    {
      title: "Modern Design Studios",
      desc: "Work in large, high-ceiling collaborative studios equipped with advanced draft systems, ergonomic layouts, and specialized spatial modeling zones.",
    },
    {
      title: "Industry Collaborations",
      desc: "Engage with prominent design firms, real estate consortiums, and technology teams to solve live architectural challenges during your studies.",
    },
    {
      title: "Site Visits",
      desc: "Gain immediate contextual experience through structured site analyses, heritage studies, real-time construction tracking, and structural field mapping.",
    },
    {
      title: "Workshops & Seminars",
      desc: "Participate in specialized modules covering digital fabrication, parametric design modeling, material research testing, and expert masterclasses.",
    },
    {
      title: "Sustainable Design Focus",
      desc: "Master climate-responsive layout methodologies, green building certification standards (IGBC/GRIHA), and renewable energy resource integrations.",
    },
    {
      title: "Internship Opportunities",
      desc: "Access an elite practical training network across leading tier-1 architecture and construction firms during your critical final semesters.",
    },
    {
      title: "Strong Placement Support",
      desc: "Benefit from structured professional portfolio reviews, technical interview simulations, and exclusive placement drives with top global employers.",
    },
  ];

  return (
    <section
      className="py-20 px-5"
      style={{ backgroundColor: "var(--secondary-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column layout container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: Sticky Content */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24 self-start">
            <h2 style={{ color: "var(--text-1)" }} className="mb-5    ">
              Why Choose B.Arch at Our College?
            </h2>
            <p className="" style={{ color: "var(--text-2)" }}>
              We provide a rigorous ecosystem engineered to transform aspiring
              creative minds into highly technical, globally competent
              architectural innovators.
            </p>
          </div>

          {/* RIGHT SIDE: Scrollable FAQ/Accordion Content */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {pillars.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: "var(--border-color)",
                    borderRadius: "var(--r-btn)",
                  }}
                >
                  {/* Accordion Header Trigger */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-(--primary)">0{index + 1}</span>
                      <h5>{item.title}</h5>
                    </div>

                    {/* Architectural Minimalist Arrow Indicator */}
                    <div
                      className={`w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <svg
                        className="w-4 h-4"
                        style={{ fill: "var(--text-1)" }}
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Body: CSS Height Transition */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 border-t" : "max-h-0"
                    }`}
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <div className="p-6">
                      <p className="small1 " style={{ color: "var(--text-2)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



// w-full lg:w-7/12