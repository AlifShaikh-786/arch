"use client";

import HeroSection from "@/src/components/Hero-Section";
import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    title: "Student Work",
    description:
      "Discover exceptional student projects from the Department of Architecture, showcasing creativity, innovation, and design excellence.",
  },
];

const projectsData = [
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
    type: "M. Arch",
    projectName: "Sustainable High-Rise Ecosystems",
    studentName: "Arjun Mehta",
    guideName: "Prof. Rajesh Khanna",
    imageUrl: "/Student-work/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
  },
  {
    id: 3,
    type: "B. Arch",
    projectName: "Revitalizing Waterfront Communities",
    studentName: "Isha Sharma",
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
    type: "M. Arch",
    projectName: "Sustainable High-Rise Ecosystems",
    studentName: "Arjun Mehta",
    guideName: "Prof. Rajesh Khanna",
    imageUrl: "/Student-work/image4.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
    portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
  },
];

export default function StudentWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter);

  return (
    <>
      <div>
        <HeroSection title={data[0].title} description={data[0].description} />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-[var(--secondary-bg)] ">
        {/* --- Filter Section --- */}
        <div className="flex justify-center max-w-md mx-auto gap-7 mb-12 rounded-[var(--r-lg)] bg-white shadow-sm">
          {["All", "B. Arch", "M. Arch"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                color: activeFilter === filter ? "white" : "",
                backgroundColor:
                  activeFilter === filter ? "var(--primary)" : "transparent",
              }}
              className={`px-10 py-3 rounded-[var(--r-lg)]  transition-colors duration-200 btn-lg   cursor-pointer
             `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-4 gap-8 bg-[var(--secondary-bg)] ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row overflow-hidden shadow-sm border border-[var(--card-border)] bg-[var(--primary-bg)] rounded-[var(--r-btn)]"
            >
              {/* Left Box: Active Project Image Layout */}
              <div className="w-full sm:w-1/2 max-h-[330px]  relative bg-[var(--secondary-bg)]">
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Box: Content Details */}
              <div className="w-full sm:w-1/2 py-6 px-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Project Name */}
                  <div>
                    <h5 className="text-[var(--text-1)]">Project Name</h5>
                    <p className="text-[var(--text-1)]">
                      {project.projectName}
                    </p>
                  </div>

                  {/* Student Name */}
                  <div>
                    <h5 className="text-[var(--text-1)]">Student Name</h5>
                    <p className="text-[var(--text-1)]">
                      {project.studentName}
                    </p>
                  </div>

                  {/* Guide Name */}
                  <div>
                    <h5 className="text-[var(--text-1)]">Guide Name</h5>
                    <p className="text-[var(--text-1)]">{project.guideName}</p>
                  </div>
                </div>

                {/* Action Buttons using Global Design Tokens */}
                <div className="flex flex-row  gap-3 mt-6 w-full">
                  <a
                    href={project.youtubeUrl}
                    className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
                  >
                    Youtub link
                    <svg
                      className="w-4 h-4 text-white hover:text-(--text-1)"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                  <a
                    href={project.portfolioUrl}
                    className="btn-sm flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] transition-colors text-center hover:bg-[var(--card-border)] whitespace-nowrap"
                  >
                    Portfolio link
                    <svg
                      className="w-4 h-4 text-[var(--text-2)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
