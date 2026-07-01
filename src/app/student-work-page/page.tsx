// // "use client";

// // import HeroSection from "@/src/components/Hero-Section";
// // import React, { useState } from "react";
// // import Image from "next/image";

// // const data = [
// //   {
// //     title: "Student Work",
// //     description:
// //       "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence.",
// //   },
// // ];

// // const projectsData = [
// //   {
// //     id: 1,
// //     type: "B. Arch",
// //     projectName: "Integrating agriculture into urban space",
// //     studentName: "Diya Kulkarni",
// //     guideName: "Prof. Shubhada Chapekar",
// //     imageUrl: "Student-work/image.png",
// //     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
// //     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
// //   },
// //   {
// //     id: 2,
// //     type: "M. Arch",
// //     projectName: "Sustainable High-Rise Ecosystems",
// //     studentName: "Arjun Mehta",
// //     guideName: "Prof. Rajesh Khanna",
// //     imageUrl: "Student-work/image1.png",
// //     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
// //     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
// //   },
// //   {
// //     id: 3,
// //     type: "B. Arch",
// //     projectName: "Revitalizing Waterfront Communities",
// //     studentName: "Isha Sharma",
// //     guideName: "Prof. Shubhada Chapekar",
// //     imageUrl: "Student-work/image2.png",
// //     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
// //     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
// //   },
// //   {
// //     id: 4,
// //     type: "B. Arch",
// //     projectName: "Integrating agriculture into urban space",
// //     studentName: "Diya Kulkarni",
// //     guideName: "Prof. Shubhada Chapekar",
// //     imageUrl: "/Student-work/image3.png",
// //     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
// //     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
// //   },
// //   {
// //     id: 5,
// //     type: "M. Arch",
// //     projectName: "Sustainable High-Rise Ecosystems",
// //     studentName: "Arjun Mehta",
// //     guideName: "Prof. Rajesh Khanna",
// //     imageUrl: "/Student-work/image4.png",
// //     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
// //     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
// //   },
// // ];

// // export default function StudentWork() {
// //   const [activeFilter, setActiveFilter] = useState("All");

// //   const filteredProjects =
// //     activeFilter === "All"
// //       ? projectsData
// //       : projectsData.filter((project) => project.type === activeFilter);

// //   return (
// //     <>
// //       <div>
// //         <HeroSection title={data[0].title} description={data[0].description} />
// //       </div>
// //       <div className="max-w-7xl mx-auto px-6 py-16 bg-[var(--secondary-bg)] ">
// //         {/* --- Filter Section --- */}
// //         <div className="flex justify-center max-w-md mx-auto gap-7 mb-12 rounded-[var(--r-lg)] bg-white shadow-sm">
// //           {["All", "B. Arch", "M. Arch"].map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               style={{
// //                 color: activeFilter === filter ? "white" : "",
// //                 backgroundColor:
// //                   activeFilter === filter ? "var(--primary)" : "transparent",
// //               }}
// //               className={`px-10 py-3 rounded-[var(--r-lg)]  transition-colors duration-200 btn-lg   cursor-pointer
// //              `}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>

// //         {/* --- Projects Grid --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-4 gap-10 bg-[var(--secondary-bg)] ">
// //           {filteredProjects.map((project) => (
// //             <div
// //               key={project.id}
// //               className="flex flex-col sm:flex-row overflow-hidden shadow-sm border border-[var(--card-border)] bg-[var(--primary-bg)] rounded-[var(--r-btn)]"
// //             >
// //               {/* Left Box: Active Project Image Layout */}
// //               <div className="w-full sm:w-1/2 max-h-[330px]  relative bg-[var(--secondary-bg)]">
// //                 <img
// //                   src={project.imageUrl}
// //                   alt={project.projectName}
// //                   className="w-full h-full object-cover"

// //                 />
// //               </div>

// //               {/* Right Box: Content Details */}
// //               <div className="w-full sm:w-1/2 py-6 px-4 flex flex-col justify-between">
// //                 <div className="space-y-4">
// //                   {/* Project Name */}
// //                   <div>
// //                     <h5 className="text-[var(--text-1)]">Project Name</h5>
// //                     <p className="text-[var(--text-1)]">
// //                       {project.projectName}
// //                     </p>
// //                   </div>

// //                   {/* Student Name */}
// //                   <div>
// //                     <h5 className="text-[var(--text-1)]">Student Name</h5>
// //                     <p className="text-[var(--text-1)]">
// //                       {project.studentName}
// //                     </p>
// //                   </div>

// //                   {/* Guide Name */}
// //                   <div>
// //                     <h5 className="text-[var(--text-1)]">Guide Name</h5>
// //                     <p className="text-[var(--text-1)]">{project.guideName}</p>
// //                   </div>
// //                 </div>

// //                 {/* Action Buttons using Global Design Tokens */}
// //                 <div className="flex flex-row  gap-3 mt-6 w-full">
// //                   <a
// //                     href={project.youtubeUrl}
// //                     className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
// //                   >
// //                     Youtub link
// //                     <svg
// //                       className="w-4 h-4 text-white hover:text-(--text-1)"
// //                       fill="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path d="M8 5v14l11-7z" />
// //                     </svg>
// //                   </a>
// //                   <a
// //                     href={project.portfolioUrl}
// //                     className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
// //                   >
// //                     Portfolio link
// //                     <svg
// //                       className="w-4 h-4 text-[var(--text-2)]"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       strokeWidth="2"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
// //                       />
// //                     </svg>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import HeroSection from "@/src/components/Hero-Section";
// import React, { useState } from "react";

// interface Project {
//   id: number;
//   type: string;
//   projectName: string;
//   studentName: string;
//   guideName: string;
//   imageUrl: string;
//   youtubeUrl: string;
//   portfolioUrl: string;
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
//   },
//   {
//     id: 7,
//     type: "B. Arch",
//     projectName: "Co-living: The Next Generation",
//     studentName: "Arnav Gupta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//   },
//   {
//     id: 8,
//     type: "B. Arch",
//     projectName: "The Sensory Archive: Museums for Inclusion",
//     studentName: "Rohan Mehta",
//     guideName: "Prof. Amit Sharma",
//     imageUrl: "/Student-work/image1.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
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
//   },
// ];

// export default function StudentWorkGrid() {
//   const [activeFilter, setActiveFilter] = useState<string>("B. Arch");

//   const categories = [
//     ...Array.from(new Set(studentProjects.map((p) => p.type))),
//   ];

//   const filteredProjects =
//     activeFilter === "All"
//       ? studentProjects
//       : studentProjects.filter((p) => p.type === activeFilter);

//   return (
//     <>
//       <div>
//         <HeroSection title={data[0].title} description={data[0].description} />
//       </div>
//       <section className="pb-20 px-6 max-w-7xl mx-auto bg-[var(--primary-bg)] text-[var(--text-1)]">
//         {/* Top Filter Navigation Section */}
//         <div className="py-16 items-center flex justify-center">
//           <div className="flex flex-wrap gap-4 bg-[var(--secondary-bg)] shadow-sm rounded-[var(--r-lg)]">
//             {categories.map((category) => {
//               const isActive = activeFilter === category;
//               return (
//                 <button
//                   key={category}
//                   onClick={() => setActiveFilter(category)}
//                   style={{
//                     color: isActive ? "white" : "",
//                     backgroundColor: isActive
//                       ? "var(--primary)"
//                       : "transparent",
//                   }}
//                   className={`btn-lg px-8 py-3 transition-all uppercase rounded-[var(--r-lg)] cursor-pointer tracking-wider font-semibold
//                    `}
//                 >
//                   {category}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* 6-Column Layout Architecture Table */}
//         <div className="w-full max-w-7xl mx-auto  overflow-x-auto border border-[var(--card-border)] rounded-[var(--s-btn)] shadow-sm">
//           <table className="w-full border-collapse text-left">
//             <thead>
//               <tr className="bg-[var(--primary)] text-white">
//                 <th className="p-4 font-semibold tracking-wide w-[7%] border-r border-white/20">
//                   Sr. No.
//                 </th>
//                 <th className="p-4 font-semibold tracking-wide w-[33%] border-r border-white/20">
//                   Project Name
//                 </th>
//                 <th className="p-4 font-semibold tracking-wide w-[20%] border-r border-white/20">
//                   Student Name
//                 </th>
//                 <th className="p-4 font-semibold tracking-wide w-[20%] border-r border-white/20">
//                   Guide Name
//                 </th>
//                 <th className="p-4 font-semibold tracking-wide w-[10%] border-r border-white/20 text-center">
//                   YouTube
//                 </th>
//                 <th className="p-4 font-semibold tracking-wide w-[10%] text-center">
//                   Portfolio
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-[var(--primary-bg)] divide-y divide-[var(--card-border)]">
//               {filteredProjects.map((project, index) => (
//                 <tr
//                   key={project.id}
//                   className="hover:bg-[var(--secondary-bg)] transition-colors"
//                 >
//                   {/* Column 1: Serial Number */}
//                   <td className="p-4 font-medium text-[var(--text-1)] border-r border-[var(--card-border)]">
//                     {index + 1}
//                   </td>

//                   {/* Column 2: Project Name */}
//                   <td className="p-4 border-r border-[var(--card-border)]">
//                     {project.projectName}
//                   </td>

//                   {/* Column 3: Student Name */}
//                   <td className="p-4 text-[var(--text-1)] border-r border-[var(--card-border)] font-medium">
//                     {project.studentName}
//                   </td>

//                   {/* Column 4: Guide Name */}
//                   <td className="p-4 text-[var(--text-2)] border-r border-[var(--card-border)]">
//                     {project.guideName}
//                   </td>

//                   {/* Column 5: YouTube Resource Button */}
//                   <td className="p-4 border-r border-[var(--card-border)] text-center">
//                     <a
//                       href={project.youtubeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-sm uppercase inline-flex gap-2 items-center justify-center text-center transition-colors no-underline px-3 py-2 rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] border border-[var(--card-border)] hover:bg-[var(--border-color)]"
//                     >
//                       Watch
//                       <svg
//                         className="w-3.5 h-3.5 text-[var(--text-1)]"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </a>
//                   </td>

//                   {/* Column 6: Portfolio Resource Button */}
//                   <td className="p-4 text-center border-r border-[var(--card-border)]">
//                     <div className="flex items-center justify-center whitespace-nowrap">
//                       <a
//                         href={project.portfolioUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn-sm inline-flex gap-2 items-center justify-center text-center font-semibold transition-all no-underline px-3 py-2 rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm"
//                       >
//                         View Link
//                         <svg
//                           className="w-3.5 h-3.5 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2.5"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                           />
//                         </svg>
//                       </a>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrShare } from "react-icons/gr";
import HeroSection from "@/src/components/Hero-Section";

export default function StudentProjectsList() {
  const studentProjects = [
    {
      id: 1,
      type: "B. Arch",
      year: "2024-2025",
      projectName: "Integrating agriculture into urban space",
      studentName: "Diya Kulkarni",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 2,
      type: "B. Arch",
      year: "2025-2026",
      projectName: "Biophilic high-rise design for coastal ecosystems",
      studentName: "Rohan Mehta",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 3,
      type: "M. Arch",
      year: "2024-2025",
      projectName: "Subterranean public transit hubs & micro-climates",
      studentName: "Ananya Iyer",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image2.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 4,
      type: "B. Arch",
      year: "2025-2026",
      projectName: "Integrating agriculture into urban space",
      studentName: "Diya Kulkarni",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 5,
      type: "B. Arch",
      year: "2024-2025",
      projectName: "Biophilic high-rise design for coastal ecosystems",
      studentName: "Rohan Mehta",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image4.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 6,
      type: "M. Arch",
      year: "2025-2026",
      projectName: "Subterranean public transit hubs & micro-climates",
      studentName: "Ananya Iyer",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    // --- New B. Arch Project Extensions ---
    {
      id: 7,
      type: "B. Arch",
      year: "2024-2025",
      projectName: "Kinetic modular housing units for dense urban sectors",
      studentName: "Kabir Malhotra",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 8,
      type: "B. Arch",
      year: "2025-2026",
      projectName:
        "Revitalizing industrial waterfronts into civic public plazas",
      studentName: "Sanya Deshmukh",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 9,
      type: "B. Arch",
      year: "2024-2025",
      projectName: "Vernacular bamboo frameworks in institutional architecture",
      studentName: "Arjun Nair",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image2.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 10,
      type: "B. Arch",
      year: "2025-2026",
      projectName:
        "Adaptive reuse of historical stepwells for community storage",
      studentName: "Meera Joshi",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 11,
      type: "B. Arch",
      year: "2024-2025",
      projectName:
        "Modular disaster relief housing grids with integrated water filtration",
      studentName: "Devansh Verma",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image4.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    // --- New M. Arch Project Extensions ---
    {
      id: 12,
      type: "M. Arch",
      year: "2025-2026",
      projectName:
        "Parametric smart-facades for optimized solar collection matrices",
      studentName: "Tanvi Hegde",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 13,
      type: "M. Arch",
      year: "2024-2025",
      projectName:
        "Net-zero energy high-rises utilizing geo-thermal wind tunnels",
      studentName: "Rishi Kapoor",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 14,
      type: "M. Arch",
      year: "2025-2026",
      projectName:
        "Acoustic morphology optimization in civic concert hall galleries",
      studentName: "Prisha Sen",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image2.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 15,
      type: "M. Arch",
      year: "2024-2025",
      projectName:
        "Hydro-responsive building skins for monsoon rainwater collection",
      studentName: "Aarav Singhal",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 16,
      type: "M. Arch",
      year: "2025-2026",
      projectName:
        "Spatiotemporal layout mechanics for high-density recovery hospitals",
      studentName: "Kriti Saxena",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image4.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<"B. Arch" | "M. Arch">(
    "B. Arch",
  );
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const handleFilterChange = (filter: "B. Arch" | "M. Arch") => {
    setActiveFilter(filter);
    setSelectedYear("All");
  };

  const filteredProjects = studentProjects.filter((project) => {
    const matchesType = project.type === activeFilter;
    const matchesYear = selectedYear === "All" || project.year === selectedYear;
    return matchesType && matchesYear;
  });

  const availableYears = [
    "All",
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
  ];

  return (
    <section className="bg-[var(--secondary-bg)] min-h-screen">
      <div>
        <HeroSection
          title={"Student Work"}
          description={
            "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence."
          }
        />
      </div>
      <div className="flex flex-row">
        {/* Year-wise Sub-Filter Bar */}
        <div className="flex flex-col  justify-center gap-2 min-w-52 sticky top-32 mt-20 py-14  self-start  pl-6 lg:pl-18  border-b border-[var(--border-color)]">
          {availableYears.map((year) => {
            const isActive = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  color: isActive ? "white" : "var(--text-2)",
                  backgroundColor: isActive ? "var(--primary)" : "",
                }}
                className={`lg:px-4 px-2 py-1.5 rounded-[var(--r-lg)] border btn-lg cursor-pointer transition-all ${
                  isActive
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-sm"
                    : "bg-[var(--primary-bg)] border-[var(--border-color)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-9">
          {/* Header Filter Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {(["B. Arch", "M. Arch"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleFilterChange(tab)}
                style={{
                  color: activeFilter === tab ? "white" : "",
                  backgroundColor: activeFilter === tab ? "var(--primary)" : "",
                }}
                className={`px-5 py-2 rounded-[var(--r-lg)] border btn-md cursor-pointer transition-all ${
                  activeFilter === tab
                    ? "bg-[var(--primary)] text-[var(--primary-bg)] border-[var(--primary)] shadow-sm"
                    : "bg-[var(--primary-bg)] text-[var(--text-2)] border-[var(--border-color)] hover:bg-[var(--secondary-bg)]"
                }`}
              >
                {tab} Projects
              </button>
            ))}
          </div>

          {/* Rows Stack */}
          <div className="space-y-6 pb-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-[var(--s-btn)] px-4 py-2  flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-center gap-6 hover:shadow-md transition-all duration-300"
              >
                {/* Left Side: Badge ID & Circular Image Frame */}
                <div className="flex items-center gap-6 w-full md:w-auto flex-shrink-0">
                  {/* ID/Degree Block */}
                  <div className="text-center min-w-[70px] border-r border-[var(--border-color)] pr-2 md:pr-4 xl:pr-6">
                    <span className="block   text-[var(--primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Circular Mask Container */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[var(--r-lg)] overflow-hidden flex-shrink-0 bg-[var(--secondary-bg)] border border-[var(--border-color)]">
                    <Image
                      src={project.imageUrl}
                      alt={project.projectName}
                      fill
                      sizes="(max-w-768px) 64px, 80px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Responsive Title Display — Mobile alternative */}
                  {/* <div className="block md:hidden flex-grow text-left">
                  <h6 className="text-[var(--text-1)] m-0">
                    {project.projectName}
                  </h6>
                  </div> */}
                </div>

                {/* Center Component: Perfectly Left-Aligned Desktop Variant */}
                <div className="hidden md:block w-full text-left px-2">
                  <h6 className="text-[var(--text-1)] m-0">
                    {project.projectName}
                  </h6>
                </div>

                {/* Right Side: Data columns featuring details */}
                <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-2 lg:gap-4 xl:gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                  {/* Horizontal Separation Support Axis */}
                  <div className="hidden md:block w-[1px] bg-[var(--border-color)] self-stretch"></div>

                  {/* Info Container Segment: Creator & Mentor Profile Context */}
                  {/* Info Container Segment: Creator & Mentor Profile Context */}
                  <div className="w-[240px] flex-shrink-0 flex items-start gap-3 text-left">
                    <svg
                      className="w-5 h-5 text-[var(--text-2)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.963-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="overflow-hidden">
                      <p className="text-[var(--text-1)]  mb-0.5 ">
                        {project.studentName}
                      </p>
                      <span className="small1 block text-[var(--text-2)] ">
                        {project.guideName}
                      </span>
                    </div>
                  </div>

                  {/* Horizontal Separation Support Axis */}
                  <div className="hidden md:block w-[1px] bg-[var(--border-color)] self-stretch"></div>

                  {/* Interactive Anchor Layer: Deliverable Attachments */}
                  <div className="flex items-start gap-3 min-w-[180px] text-left">
                    {/* <svg
                    className="w-5 h-5 text-[var(--text-2)] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg> */}
                    <div className="flex flex-col gap-1">
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary)] flex flex-row gap-5 hover:text-[var(--primary-hover)]  transition-colors block"
                      >
                        Watch Video
                        <GrShare />
                      </a>
                      <a
                        href={project.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="small1 flex flex-row gap-4 text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors block"
                      >
                        View Portfolio
                        <GrShare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
