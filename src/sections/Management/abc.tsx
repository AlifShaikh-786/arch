"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrShare } from "react-icons/gr";

export default function StudentProjectsList() {
  const studentProjects = [
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
    // --- New B. Arch Project Extensions ---
    {
      id: 7,
      type: "B. Arch",
      projectName: "Kinetic modular housing units for dense urban sectors",
      studentName: "Kabir Malhotra",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image5.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 8,
      type: "B. Arch",
      projectName:
        "Revitalizing industrial waterfronts into civic public plazas",
      studentName: "Sanya Deshmukh",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image6.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 9,
      type: "B. Arch",
      projectName: "Vernacular bamboo frameworks in institutional architecture",
      studentName: "Arjun Nair",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image7.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 10,
      type: "B. Arch",
      projectName:
        "Adaptive reuse of historical stepwells for community storage",
      studentName: "Meera Joshi",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image8.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 11,
      type: "B. Arch",
      projectName:
        "Modular disaster relief housing grids with integrated water filtration",
      studentName: "Devansh Verma",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image9.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    // --- New M. Arch Project Extensions ---
    {
      id: 12,
      type: "M. Arch",
      projectName:
        "Parametric smart-facades for optimized solar collection matrices",
      studentName: "Tanvi Hegde",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image10.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 13,
      type: "M. Arch",
      projectName:
        "Net-zero energy high-rises utilizing geo-thermal wind tunnels",
      studentName: "Rishi Kapoor",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image11.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 14,
      type: "M. Arch",
      projectName:
        "Acoustic morphology optimization in civic concert hall galleries",
      studentName: "Prisha Sen",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image12.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 15,
      type: "M. Arch",
      projectName:
        "Hydro-responsive building skins for monsoon rainwater collection",
      studentName: "Aarav Singhal",
      guideName: "Prof. Amit Sharma",
      imageUrl: "/Student-work/image13.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
    {
      id: 16,
      type: "M. Arch",
      projectName:
        "Spatiotemporal layout mechanics for high-density recovery hospitals",
      studentName: "Kriti Saxena",
      guideName: "Prof. Shubhada Chapekar",
      imageUrl: "/Student-work/image14.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ZhwZ4vtFfkk",
      portfolioUrl: "https://www.slideshare.net/secret/cPbexo6q88D3zX",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<"B. Arch" | "M. Arch">(
    "B. Arch",
  );
  const filteredProjects = studentProjects.filter(
    (project) => project.type === activeFilter,
  );

  return (
    <section className="bg-[var(--secondary-bg)] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Filter Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {(["B. Arch", "M. Arch"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                color: activeFilter === tab ? "white" : "",
                backgroundColor: activeFilter === tab ? "var(--primary)" : "",
              }}
              className={`px-5 py-2 rounded-full border btn-sm cursor-pointer transition-all ${
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
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-[var(--s-btn)] px-4 py-2 flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-center gap-6 hover:shadow-md transition-all duration-300"
            >
              {/* Left Side: Badge ID & Circular Image Frame */}
              <div className="flex items-center gap-6 w-full md:w-auto flex-shrink-0">
                {/* ID/Degree Block */}
                <div className="text-center min-w-[70px] border-r border-[var(--border-color)] pr-4 md:pr-6">
                  <span className="block text-3xl font-black text-[var(--primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-[10px] uppercase font-bold text-[var(--text-2)] mt-1">
                    {project.type}
                  </span>
                </div>

                {/* Circular Mask Container */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 bg-[var(--secondary-bg)] border border-[var(--border-color)]">
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
                <div className="block md:hidden flex-grow text-left">
                  <h6 className="text-[var(--text-1)] m-0">
                    {project.projectName}
                  </h6>
                </div>
              </div>

              {/* Center Component: Perfectly Left-Aligned Desktop Variant */}
              <div className="hidden md:block w-full text-left px-2">
                <h6 className="text-[var(--text-1)] m-0">
                  {project.projectName}
                </h6>
              </div>

              {/* Right Side: Data columns featuring details */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-4 md:gap-6 border-t md:border-t-0 pt-4 md:pt-0">
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
                    <p className="text-[var(--text-1)] font-bold mb-0.5 truncate">
                      {project.studentName}
                    </p>
                    <span className="small1 block text-[var(--text-2)] truncate">
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
                      className="text-[var(--primary)] flex flex-row gap-4 hover:text-[var(--primary-hover)] font-bold transition-colors block"
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
    </section>
  );
}
