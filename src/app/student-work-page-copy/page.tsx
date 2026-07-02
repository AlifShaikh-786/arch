// "use client";

// import HeroSection from "@/src/components/Hero-Section";
// import React, { useState } from "react";
// import Image from "next/image";

// interface Project {
//   id: number;
//   type: string;
//   projectName: string;
//   studentName: string;
//   guideName: string;
//   imageUrl: string;
//   youtubeUrl: string;
//   portfolioUrl: string;
//   year: string;
// }

// const data = [
//   {
//     title: "Student Work",
//     description:
//       "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence.",
//   },
// ];

// const studentProjects: Project[] = [
//   {
//     id: 1,
//     type: "B. Arch",
//     projectName: "Integrating agriculture into urban space",
//     studentName: "Diya Kulkarni",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2024-2025",
//   },
//   {
//     id: 2,
//     type: "B. Arch",
//     projectName: "Biophilic high-rise design for coastal ecosystems",
//     studentName: "Rohan Mehta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image1.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
//   {
//     id: 3,
//     type: "M. Arch",
//     projectName: "Subterranean public transit hubs & micro-climates",
//     studentName: "Ananya Iyer",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image2.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2024-2025",
//   },
//   {
//     id: 4,
//     type: "B. Arch",
//     projectName: "Integrating agriculture into urban space",
//     studentName: "Diya Kulkarni",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image3.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2023-2024",
//   },
//   {
//     id: 5,
//     type: "B. Arch",
//     projectName: "Biophilic high-rise design for coastal ecosystems",
//     studentName: "Rohan Mehta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image4.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
//   {
//     id: 6,
//     type: "M. Arch",
//     projectName: "Subterranean public transit hubs & micro-climates",
//     studentName: "Ananya Iyer",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
//   {
//     id: 7,
//     type: "B. Arch",
//     projectName: "Integrating agriculture into urban space",
//     studentName: "Diya Kulkarni",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2024-2025",
//   },
//   {
//     id: 8,
//     type: "B. Arch",
//     projectName: "Biophilic high-rise design for coastal ecosystems",
//     studentName: "Rohan Mehta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image1.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
//   {
//     id: 9,
//     type: "M. Arch",
//     projectName: "Subterranean public transit hubs & micro-climates",
//     studentName: "Ananya Iyer",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image2.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2024-2025",
//   },
//   {
//     id: 10,
//     type: "B. Arch",
//     projectName: "Integrating agriculture into urban space",
//     studentName: "Diya Kulkarni",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image3.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2023-2024",
//   },
//   {
//     id: 11,
//     type: "B. Arch",
//     projectName: "Biophilic high-rise design for coastal ecosystems",
//     studentName: "Rohan Mehta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image4.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
//   {
//     id: 12,
//     type: "M. Arch",
//     projectName: "Subterranean public transit hubs & micro-climates",
//     studentName: "Ananya Iyer",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "/Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//     year: "2025-2026",
//   },
// ];

// export default function StudentWorkGrid() {
//   const [activeFilter, setActiveFilter] = useState<string>("B. Arch");
//   const [activeYear, setActiveYear] = useState<string>("All Years");

//   const categories = [
//     ...Array.from(new Set(studentProjects.map((p) => p.type))),
//   ];

//   const years = ["All Years", "2025-2026", "2024-2025", "2023-2024"];

//   const filteredProjects = studentProjects.filter((p) => {
//     const categoryMatch = p.type === activeFilter;
//     const yearMatch = activeYear === "All Years" || p.year === activeYear;
//     return categoryMatch && yearMatch;
//   });

//   return (
//     <>
//       <div>
//         <HeroSection title={data[0].title} description={data[0].description} />
//       </div>
//       <section className="pb-20 px-6 max-w-7xl mx-auto bg-white text-(--text-1)">
//         {/* Top Header Section */}
//         <div className=" py-16 items-center flex justify-center">
//           {/* Dynamic Navigation Filters */}
//           <div className="flex flex-wrap gap-10 rounded-[var(--r-btn)] max-w-md">
//             {categories.map((category) => {
//               const isActive = activeFilter === category;
//               return (
//                 <button
//                   key={category}
//                   onClick={() => setActiveFilter(category)}
//                   style={{
//                     color: isActive ? "white" : "",
//                     backgroundColor: isActive ? "var(--primary)" : "",
//                   }}
//                   className={`btn-lg px-8 border border-(--border-color2) py-3 transition-all uppercase rounded-[var(--r-lg)] cursor-pointer`}
//                 >
//                   {category}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Sidebar Year Filter */}
//           {/* <aside className="w-full lg:w-36  flex-shrink-0">
//             <div className="sticky top-24 pt-20">
//               <ul className="flex flex-row lg:flex-col gap-3 flex-wrap">
//                 {years.map((year) => (
//                   <li key={year}>
//                     <button
//                       onClick={() => setActiveYear(year)}
//                       style={{
//                         color: activeYear === year ? "white" : "",
//                         backgroundColor:
//                           activeYear === year ? "var(--primary)" : "",
//                       }}
//                       className={`text-left px-5 py-2 w-full rounded-[var(--r-lg)] transition-colors ${
//                         activeYear === year
//                           ? "bg-(--primary) text-white shadow-sm"
//                           : " text-(--text-2) hover:bg-gray-100 border border-gray-100"
//                       }`}
//                     >
//                       {year}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside> */}

//           {/* Main Responsive Project Grid */}
//           <div className="flex-1">
//             {filteredProjects.length === 0 ? (
//               <div className="py-20 text-center text-(--text-2) border border-dashed border-(--border-color2) rounded-[var(--r-lg)] ">
//                 <p>No projects found for {activeYear}.</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[2500px]:grid-cols-4 gap-8">
//                 {filteredProjects.map((project) => (
//                   <article
//                     key={project.id}
//                     className="flex flex-col bg-white border border-(--border-color2) rounded-[var(--r-btn)] shadow-sm overflow-hidden"
//                   >
//                     {/* Visual Header / Thumbnail Box */}
//                     <div className="relative aspect-[2/1] w-full  pb-4 flex-shrink-0">
//                       <div className="relative w-full h-full rounded-[var(--r-btn)] overflow-hidden">
//                         <Image
//                           src={project.imageUrl}
//                           alt={project.projectName}
//                           fill
//                           priority
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>

//                     {/* Structured Text Metadata Details */}
//                     <div className="px-6 pb-6 flex flex-col flex-grow justify-between">
//                       <div>
//                         <h3 className="text-(--text-1) line-clamp-2 min-h-[56px] mb-4">
//                           {project.projectName}
//                         </h3>

//                         {/* Information Specs */}
//                         <div className="space-y-3 mb-6 ">
//                           <div className="flex justify-between items-center border-b border-(--border-color) pb-2">
//                             <span className="inline-flex items-center gap-2 text-(--text-2)">
//                               <svg
//                                 className="w-4 h-4 text-(--text-2)"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                 />
//                               </svg>
//                               Student
//                             </span>
//                             <span className="text-(--text-2)">
//                               {project.studentName}
//                             </span>
//                           </div>

//                           <div className="flex justify-between items-center">
//                             <span className="inline-flex items-center gap-2 text-(--text-2)">
//                               <svg
//                                 className="w-4 h-4 text-(--text-2)"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   d="M12 14l9-5-9-5-9 5 9 5z"
//                                 />
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//                                 />
//                               </svg>
//                               Guide
//                             </span>
//                             <span className="text-(--text-2)">
//                               {project.guideName}
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Action Button Links */}
//                       <div className="flex items-center justify-between pt-4 border-t border-(--border-color)">
//                         <a
//                           href={project.youtubeUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1.5 text-(--text-2) hover:text-(--primary) no-underline transition-colors"
//                         >
//                           YouTube Link
//                           <svg
//                             className="w-4 h-4 text-(--text-2) fill-current"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                         </a>

//                         <a
//                           href={project.portfolioUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1.5 hover:text-(--text-1) text-(--primary) hover:opacity-80 no-underline transition-opacity"
//                         >
//                           View Portfolio
//                           <svg
//                             className="w-3.5 h-3.5"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2.5"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                             />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}

//             {/* Bottom View More Projects Button */}
//             {filteredProjects.length > 6 && (
//               <div className="mt-12 flex justify-center">
//                 <button className="inline-flex items-center gap-2 border border-(--border-color) px-6 py-3 rounded-[var(--r-lg)] text-(--text-1)  bg-white transition-colors shadow-sm cursor-pointer">
//                   <svg
//                     className="w-4 h-4 text-(--text-2)"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
//                     />
//                   </svg>
//                   View More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import HeroSection from "@/src/components/Hero-Section";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  type: string;
  projectName: string;
  studentName: string;
  guideName: string;
  imageUrl: string;
  youtubeUrl: string;
  portfolioUrl: string;
  year: string;
}

const data = [
  {
    title: "Student Work",
    description:
      "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence.",
  },
];

const studentProjects: Project[] = [
  {
    id: 1,
    type: "B. Arch",
    projectName: "Integrating agriculture into urban space",
    studentName: "Diya Kulkarni",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2024-2025",
  },
  {
    id: 2,
    type: "B. Arch",
    projectName: "Biophilic high-rise design for coastal ecosystems",
    studentName: "Rohan Mehta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
  {
    id: 3,
    type: "M. Arch",
    projectName: "Subterranean public transit hubs & micro-climates",
    studentName: "Ananya Iyer",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2024-2025",
  },
  {
    id: 4,
    type: "B. Arch",
    projectName: "Integrating agriculture into urban space",
    studentName: "Diya Kulkarni",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image3.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2023-2024",
  },
  {
    id: 5,
    type: "B. Arch",
    projectName: "Biophilic high-rise design for coastal ecosystems",
    studentName: "Rohan Mehta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image4.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
  {
    id: 6,
    type: "M. Arch",
    projectName: "Subterranean public transit hubs & micro-climates",
    studentName: "Ananya Iyer",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
  {
    id: 7,
    type: "B. Arch",
    projectName: "Integrating agriculture into urban space",
    studentName: "Diya Kulkarni",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2024-2025",
  },
  {
    id: 8,
    type: "B. Arch",
    projectName: "Biophilic high-rise design for coastal ecosystems",
    studentName: "Rohan Mehta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
  {
    id: 9,
    type: "M. Arch",
    projectName: "Subterranean public transit hubs & micro-climates",
    studentName: "Ananya Iyer",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2024-2025",
  },
  {
    id: 10,
    type: "B. Arch",
    projectName: "Integrating agriculture into urban space",
    studentName: "Diya Kulkarni",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image3.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2023-2024",
  },
  {
    id: 11,
    type: "B. Arch",
    projectName: "Biophilic high-rise design for coastal ecosystems",
    studentName: "Rohan Mehta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image4.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
  {
    id: 12,
    type: "M. Arch",
    projectName: "Subterranean public transit hubs & micro-climates",
    studentName: "Ananya Iyer",
    guideName: "Prof. Shubhada Chapekar",
    imageUrl: "/Student-work/image.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    year: "2025-2026",
  },
];

export default function StudentWorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("B. Arch");
  const [activeYear, setActiveYear] = useState<string>("All Years");

  // Track visible items count (starts at 6)
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = [
    ...Array.from(new Set(studentProjects.map((p) => p.type))),
  ];

  const years = ["All Years", "2025-2026", "2024-2025", "2023-2024"];

  // Filter out the full match array first
  const filteredProjects = studentProjects.filter((p) => {
    const categoryMatch = p.type === activeFilter;
    const yearMatch = activeYear === "All Years" || p.year === activeYear;
    return categoryMatch && yearMatch;
  });

  // Reset pagination to 6 whenever filters change
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, activeYear]);

  // Slice the filtered projects array to target visibility
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <>
      <div>
        <HeroSection title={data[0].title} description={data[0].description} />
      </div>
      <section className="pb-20 px-6 max-w-7xl mx-auto bg-white text-(--text-1)">
        {/* Top Header Section */}
        <div className=" py-16 items-center flex justify-center">
          {/* Dynamic Navigation Filters */}
          <div className="flex flex-wrap gap-10 rounded-[var(--r-btn)] max-w-md">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  style={{
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "var(--primary)" : "",
                  }}
                  className={`btn-lg px-8 border border-(--border-color2) py-3 transition-all uppercase rounded-[var(--r-lg)] cursor-pointer`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Responsive Project Grid */}
          <div className="flex-1">
            {displayedProjects.length === 0 ? (
              <div className="py-20 text-center text-(--text-2) border border-dashed border-(--border-color2) rounded-[var(--r-lg)] ">
                <p>No projects found for {activeYear}.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[2500px]:grid-cols-4 gap-8">
                {displayedProjects.map((project) => (
                  <article
                    key={project.id}
                    className="flex flex-col bg-white border border-(--border-color2) rounded-[var(--r-btn)] shadow-sm overflow-hidden"
                  >
                    {/* Visual Header / Thumbnail Box */}
                    <div className="relative aspect-[2/1] w-full  pb-4 flex-shrink-0">
                      <div className="relative w-full h-full rounded-[var(--r-btn)] overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.projectName}
                          fill
                          priority
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Structured Text Metadata Details */}
                    <div className="px-6 pb-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-(--text-1) line-clamp-2 min-h-[56px] mb-4">
                          {project.projectName}
                        </h3>

                        {/* Information Specs */}
                        <div className="space-y-3 mb-4 ">
                          <div className="flex justify-between items-center border-b border-(--border-color) pb-2">
                            <span className="inline-flex items-center gap-2 text-(--text-2)">
                              <svg
                                className="w-4 h-4 text-(--text-2)"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              Student
                            </span>
                            <span className="text-(--text-2)">
                              {project.studentName}
                            </span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="inline-flex items-center gap-2 text-(--text-2)">
                              <svg
                                className="w-4 h-4 text-(--text-2)"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                              </svg>
                              Guide
                            </span>
                            <span className="text-(--text-2)">
                              {project.guideName}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-(--border-color)">
                        <Link
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-(--text-2) hover:text-(--primary) no-underline transition-colors"
                        >
                          YouTube Link
                          <svg
                            className="w-4 h-4 text-(--text-2) fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </Link>

                        <Link
                          href={project.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-(--text-1) text-(--primary) hover:opacity-80 no-underline transition-opacity"
                        >
                          View Portfolio
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Bottom View More Projects Button */}
            {filteredProjects.length > visibleCount && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 border border-(--border-color) px-6 py-3 rounded-[var(--r-lg)] text-(--text-1)  bg-white transition-colors shadow-sm cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-(--text-2)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
