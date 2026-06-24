// "use client";

// import HeroSection from "@/src/components/Hero-Section";
// import React, { useState } from "react";
// import Image from "next/image";

// const data = [
//   {
//     title: "Student Work",
//     description:
//       "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence.",
//   },
// ];

// const projectsData = [
//   {
//     id: 1,
//     type: "B. Arch",
//     projectName: "Integrating agriculture into urban space",
//     studentName: "Diya Kulkarni",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "Student-work/image.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//   },
//   {
//     id: 2,
//     type: "M. Arch",
//     projectName: "Sustainable High-Rise Ecosystems",
//     studentName: "Arjun Mehta",
//     guideName: "Prof. Rajesh Khanna",
//     imageUrl: "Student-work/image1.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//   },
//   {
//     id: 3,
//     type: "B. Arch",
//     projectName: "Revitalizing Waterfront Communities",
//     studentName: "Isha Sharma",
//     guideName: "Prof. Shubhada Chapekar",
//     imageUrl: "Student-work/image2.png",
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
//     type: "M. Arch",
//     projectName: "Sustainable High-Rise Ecosystems",
//     studentName: "Arjun Mehta",
//     guideName: "Prof. Rajesh Khanna",
//     imageUrl: "/Student-work/image4.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
//     portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
//   },
// ];

// export default function StudentWork() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredProjects =
//     activeFilter === "All"
//       ? projectsData
//       : projectsData.filter((project) => project.type === activeFilter);

//   return (
//     <>
//       <div>
//         <HeroSection title={data[0].title} description={data[0].description} />
//       </div>
//       <div className="max-w-7xl mx-auto px-6 py-16 bg-[var(--secondary-bg)] ">
//         {/* --- Filter Section --- */}
//         <div className="flex justify-center max-w-md mx-auto gap-7 mb-12 rounded-[var(--r-lg)] bg-white shadow-sm">
//           {["All", "B. Arch", "M. Arch"].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               style={{
//                 color: activeFilter === filter ? "white" : "",
//                 backgroundColor:
//                   activeFilter === filter ? "var(--primary)" : "transparent",
//               }}
//               className={`px-10 py-3 rounded-[var(--r-lg)]  transition-colors duration-200 btn-lg   cursor-pointer
//              `}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* --- Projects Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-4 gap-10 bg-[var(--secondary-bg)] ">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="flex flex-col sm:flex-row overflow-hidden shadow-sm border border-[var(--card-border)] bg-[var(--primary-bg)] rounded-[var(--r-btn)]"
//             >
//               {/* Left Box: Active Project Image Layout */}
//               <div className="w-full sm:w-1/2 max-h-[330px]  relative bg-[var(--secondary-bg)]">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.projectName}
//                   className="w-full h-full object-cover"

//                 />
//               </div>

//               {/* Right Box: Content Details */}
//               <div className="w-full sm:w-1/2 py-6 px-4 flex flex-col justify-between">
//                 <div className="space-y-4">
//                   {/* Project Name */}
//                   <div>
//                     <h5 className="text-[var(--text-1)]">Project Name</h5>
//                     <p className="text-[var(--text-1)]">
//                       {project.projectName}
//                     </p>
//                   </div>

//                   {/* Student Name */}
//                   <div>
//                     <h5 className="text-[var(--text-1)]">Student Name</h5>
//                     <p className="text-[var(--text-1)]">
//                       {project.studentName}
//                     </p>
//                   </div>

//                   {/* Guide Name */}
//                   <div>
//                     <h5 className="text-[var(--text-1)]">Guide Name</h5>
//                     <p className="text-[var(--text-1)]">{project.guideName}</p>
//                   </div>
//                 </div>

//                 {/* Action Buttons using Global Design Tokens */}
//                 <div className="flex flex-row  gap-3 mt-6 w-full">
//                   <a
//                     href={project.youtubeUrl}
//                     className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
//                   >
//                     Youtub link
//                     <svg
//                       className="w-4 h-4 text-white hover:text-(--text-1)"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </a>
//                   <a
//                     href={project.portfolioUrl}
//                     className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
//                   >
//                     Portfolio link
//                     <svg
//                       className="w-4 h-4 text-[var(--text-2)]"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import HeroSection from "@/src/components/Hero-Section";
import React, { useState } from "react";

interface Project {
  id: number;
  type: string;
  projectName: string;
  studentName: string;
  guideName: string;
  imageUrl: string;
  youtubeUrl: string;
  portfolioUrl: string;
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
  },
  {
    id: 7,
    type: "B. Arch",
    projectName: "Co-living: The Next Generation",
    studentName: "Arnav Gupta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
  },
  {
    id: 8,
    type: "B. Arch",
    projectName: "The Sensory Archive: Museums for Inclusion",
    studentName: "Rohan Mehta",
    guideName: "Prof. Amit Sharma",
    imageUrl: "/Student-work/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
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
  },
];

export default function StudentWorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("B. Arch");

  const categories = [
    ...Array.from(new Set(studentProjects.map((p) => p.type))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? studentProjects
      : studentProjects.filter((p) => p.type === activeFilter);

  return (
    <>
      <div>
        <HeroSection title={data[0].title} description={data[0].description} />
      </div>
      <section className="pb-20 px-6 max-w-7xl mx-auto bg-[var(--primary-bg)] text-[var(--text-1)]">
        {/* Top Filter Navigation Section */}
        <div className="py-16 items-center flex justify-center">
          <div className="flex flex-wrap gap-4 bg-[var(--secondary-bg)] shadow-sm rounded-[var(--r-lg)]">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  style={{
                    color: isActive ? "white" : "",
                    backgroundColor: isActive
                      ? "var(--primary)"
                      : "transparent",
                  }}
                  className={`btn-lg px-8 py-3 transition-all uppercase rounded-[var(--r-lg)] cursor-pointer tracking-wider font-semibold
                   `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Column Layout Architecture Table */}
        <div className="w-full max-w-7xl mx-auto  overflow-x-auto border border-[var(--card-border)] rounded-[var(--s-btn)] shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[var(--primary)] text-white">
                <th className="p-4 font-semibold tracking-wide w-[7%] border-r border-white/20">
                  Sr. No.
                </th>
                <th className="p-4 font-semibold tracking-wide w-[33%] border-r border-white/20">
                  Project Name
                </th>
                <th className="p-4 font-semibold tracking-wide w-[20%] border-r border-white/20">
                  Student Name
                </th>
                <th className="p-4 font-semibold tracking-wide w-[20%] border-r border-white/20">
                  Guide Name
                </th>
                <th className="p-4 font-semibold tracking-wide w-[10%] border-r border-white/20 text-center">
                  Resources
                </th>
                {/* <th className="p-4 font-semibold tracking-wide w-[10%] text-center">
                  Portfolio
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-[var(--primary-bg)] divide-y divide-[var(--card-border)]">
              {filteredProjects.map((project, index) => (
                <tr
                  key={project.id}
                  className="hover:bg-[var(--secondary-bg)] transition-colors"
                >
                  {/* Column 1: Serial Number */}
                  <td className="p-4 font-medium text-[var(--text-1)] border-r border-[var(--card-border)]">
                    {index + 1}
                  </td>

                  {/* Column 2: Project Name */}
                  <td className="p-4 border-r border-[var(--card-border)]">
                    {project.projectName}
                  </td>

                  {/* Column 3: Student Name */}
                  <td className="p-4 text-[var(--text-1)] border-r border-[var(--card-border)] font-medium">
                    {project.studentName}
                  </td>

                  {/* Column 4: Guide Name */}
                  <td className="p-4 text-[var(--text-2)] border-r border-[var(--card-border)]">
                    {project.guideName}
                  </td>

                  {/* Column 5: YouTube Resource Button */}
                  <td className="p-2 border-r border-[var(--card-border)] text-center">
                    <div className="flex flex-col gap-2">
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sm uppercase inline-flex gap-2 items-center justify-center text-center transition-colors no-underline px-3 py-1 rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] border border-[var(--card-border)] hover:bg-[var(--border-color)]"
                      >
                        Watch Video
                        {/* <svg
                          className="w-3.5 h-3.5 text-[var(--text-1)]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg> */}
                      </a>

                      <a
                        href={project.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sm inline-flex gap-2 items-center justify-center text-center font-semibold transition-all no-underline px-3 py-1 rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm"
                      >
                        View Portfolio
                        {/* <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg> */}
                      </a>
                    </div>
                  </td>

                  {/* Column 6: Portfolio Resource Button */}
                  {/* <td className="p-4 text-center border-r border-[var(--card-border)]">
                    <div className="flex items-center justify-center whitespace-nowrap">
                      <a
                        href={project.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sm inline-flex gap-2 items-center justify-center text-center font-semibold transition-all no-underline px-3 py-2 rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm"
                      >
                        View Link
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
