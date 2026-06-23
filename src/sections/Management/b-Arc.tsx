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
];

export default function StudentWorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
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
      <section className=" pb-20 px-6  max-w-7xl mx-auto bg-[var(--primary-bg)] text-[var(--text-1)]">
        {/* Top Header Section */}
        <div className=" py-16 items-center flex justify-center">
          {/* Dynamic Navigation Filters */}
          <div className="flex flex-wrap gap-10 bg-[var(--secondary-bg)] shadow-sm rounded-[var(--r-lg)] max-w-md ">
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
                  className={`btn-lg px-8   py-3 transition-all uppercase  rounded-[var(--r-lg)]  cursor-pointer
                    `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col transition-all group shadow-sm bg-[var(--primary-bg)] border border-[var(--card-border)] rounded-[var(--r-btn)] overflow-hidden"
            >
              {/* Visual Header / Thumbnail Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--secondary-bg)]">
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                {/* Floating Badge */}
                <span className="absolute top-4 left-4  text-white  uppercase small1 bg-[var(--primary)] text-whiteDoc px-2.5 py-1 rounded-[var(--s-btn)] shadow-sm">
                  {project.type}
                </span>
              </div>

              {/* Structured Text Metadata Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h5 className="mb-4  group-hover:text-[var(--primary)] transition-colors line-clamp-2 text-[var(--text-1)]">
                    {project.projectName}
                  </h5>

                  {/* Information Specs */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center border-b pb-1.5 border-[var(--border-color)]">
                      <span className="small1 text-[var(--text-2)]">
                        Student Name
                      </span>
                      <span className="small1  text-[var(--text-1)]">
                        {project.studentName}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="small1 text-[var(--text-2)]">Guide</span>
                      <span className="small1 text-[var(--text-2)]">
                        {project.guideName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button Links */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-color)]">
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm uppercase flex gap-2 items-center justify-center text-center transition-colors no-underline p-2.5 rounded-[var(--s-btn)] bg-[var(--secondary-bg)] text-[var(--text-1)] hover:bg-[var(--border-color)]"
                  >
                    Youtube link
                    <svg
                      className="w-4 h-4 text-[var(--text-1)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                  <a
                    href={project.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm flex gap-2 items-center justify-center text-center  transition-all no-underline p-2.5 rounded-[var(--s-btn)] bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
                  >
                    Portfolio link
                    <svg
                      className="w-4 h-4 text-white"
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
