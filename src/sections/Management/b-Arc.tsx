"use client";

import React, { useState } from "react";

export default function BArchProgrammePage() {
  const [activeTab, setActiveTab] = useState<"studio" | "ict">("studio");

  const analyticsData = [
    { label: "Programme Name", value: "Bachelor of Architecture (B.Arch)" },
    { label: "Duration", value: "5 Years (Full-Time Professional Degree)" },
    { label: "Intake Capacity", value: "120 Seats" },
    { label: "Affiliation", value: "Savitribai Phule Pune University (SPPU)" },
    {
      label: "Approved & Recognised",
      value:
        "Council of Architecture (CoA), New Delhi & Government of Maharashtra",
    },
    {
      label: "Eligibility Basis",
      value:
        "Qualified NATA / JEE Main Paper II Score + Centralized CAP Round Guidelines",
    },
  ];

  const coreAreas = [
    {
      title: "Architectural Design & Visual Graphics",
      desc: "Core fundamental studio exploring spatial configuration, drafting paradigms, and structural expressionism.",
    },
    {
      title: "Building Technology, Materials & Services",
      desc: "Deep dive into construction systems, tactile material science, structural safety, and smart mechanical integrations.",
    },
    {
      title: "Theory of Structures & Engineering",
      desc: "An Analytical framework tracing structural mechanics, load distribution systems, and concrete/steel optimizations.",
    },
    {
      title: "History of Architecture & Settlements",
      desc: "A chronological journey mapping historical socio-spatial evolution, urban forms, and global civilizations.",
    },
    {
      title: "Landscape Design & Environmental Sciences",
      desc: "Synthesis of ecological system designs, micro-climate adaptation layouts, and sustainable regional land planning.",
    },
    {
      title: "Advanced Digital Modeling & BIM Workflows",
      desc: "Hands-on execution via modern state-of-the-art building information modeling, parametric structures, and virtual rendering.",
    },
  ];

  const careerRoles = [
    "Principal Architect",
    "Urban Planner",
    "Landscape Architect",
    "Interior & Spatial Designer",
    "Sustainable Design Consultant",
    "BIM Manager",
    "Real Estate Project Manager",
    "Restoration & Conservation Architect",
    "Architectural Journalist",
    "Construction Technology Expert",
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--primary-bg)", color: "var(--text-1)" }}
    >
      {/* 1. Cinematic Hero Section */}
      <header
        className="relative overflow-hidden border-b"
        style={{
          backgroundColor: "#0a0a23",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {/* Soft atmospheric glow utilizing your brand colors */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,63,150,0.25),transparent_50%)]" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]" />

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span
              className="small1 tracking-[0.25em] uppercase block font-semibold"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Dr. D. Y. Patil College of Architecture, Pune
            </span>
            <h1 className="text-white tracking-tight leading-tight">
              B.Arch Programme <br />
              <span
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200"
                style={
                  {
                    "--tw-gradient-to": "var(--primary)",
                  } as React.CSSProperties
                }
              >
                in Pune
              </span>
            </h1>
            <p
              className="font-light leading-relaxed max-w-2xl"
              style={{ color: "rgba(255, 255, 255, 0.75)" }}
            >
              The Bachelor of Architecture (B.Arch) is an elite 5-year
              professional undergraduate programme designed to fuse spatial
              artistry with advanced structural science. The programme focuses
              on cultivating globally competitive technocrats, creative
              visionaries, and environmentally conscious architects capable of
              shaping future built environments.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              className="backdrop-blur-md bg-white/5 border p-8 shadow-2xl relative"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                borderRadius: "var(--r-lg-btn)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 border-t border-r opacity-30 rounded-tr-lg"
                style={{ borderColor: "var(--primary)" }}
              />
              <h5
                className="tracking-wider text-xs uppercase mb-3 font-semibold"
                style={{ color: "var(--primary-bg)" }}
              >
                Institution Context
              </h5>
              <p
                className="small1 leading-relaxed font-light"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Offered by Dr. D. Y. Patil College of Architecture, Pune, the
                curriculum is strategically engineered to address the evolution
                of contemporary design culture, integrating hands-on design
                studio workflows, advanced building technology, and digital
                rendering tools.
              </p>
              <div
                className="mt-6 pt-6 border-t flex items-center justify-between small1 font-mono tracking-wider"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  COUNCIL OF ARCHITECTURE APPROVED
                </span>
                <span style={{ color: "var(--primary-bg)" }}>
                  ◆ CODE: MH-12
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Strategic Location Advantage */}
        <section
          className="py-20 border-b"
          style={{
            backgroundColor: "var(--primary-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 sticky top-8">
                <span
                  className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  Geographic Catalyst
                </span>
                <h2
                  className="tracking-tight mb-4"
                  style={{ color: "var(--text-1)" }}
                >
                  Why Choose B.Arch in Pune
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  Pune stands as a premier design, historical, and urban
                  planning hub in India. Studying B.Arch in Pune gives students
                  unparalleled exposure to live construction ecosystems,
                  historic preservation sites, global architectural firms, and
                  booming infrastructure developments.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dynamic Urban Lab",
                    desc: "Unparalleled access to live architectural assets and complex real-world project site exposures.",
                  },
                  {
                    title: "Top-Tier Internships",
                    desc: "Direct channel pathways with global architectural practices and prominent development firms.",
                  },
                  {
                    title: "Advanced Lab Access",
                    desc: "State-of-the-art building material testing labs, digital platforms, and climatology labs.",
                  },
                  {
                    title: "Sustainable Future",
                    desc: "An ideal city landscape custom engineered for technology-driven architectural careers.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 transition-all duration-300 hover:shadow-sm border"
                    style={{
                      backgroundColor: "var(--secondary-bg)",
                      borderColor: "var(--card-border)",
                      borderRadius: "var(--r-btn)",
                    }}
                  >
                    <div
                      className="w-8 h-8 font-mono text-xs flex items-center justify-center mb-4 text-white"
                      style={{
                        backgroundColor: "var(--primary)",
                        borderRadius: "var(--s-btn)",
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <h4 className="mb-2" style={{ color: "var(--text-1)" }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "var(--text-2)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Program Analytics */}
        <section
          className="py-20 relative overflow-hidden text-white"
          style={{ backgroundColor: "#13122e" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(64,63,150,0.15),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Institutional Matrix
              </span>
              <h2 className="text-white tracking-tight">
                MCA & B.Arch Programme Overview
              </h2>
            </div>

            <div
              className="backdrop-blur-md border overflow-hidden max-w-4xl mx-auto shadow-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: "var(--r-btn)",
              }}
            >
              <div className="grid grid-cols-1 divide-y divide-white/10">
                {analyticsData.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 p-5 transition-colors hover:bg-white/[0.02]"
                  >
                    <div
                      className="md:col-span-4 small1 uppercase tracking-wider flex items-center font-bold mb-1 md:mb-0"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="md:col-span-8 small1 font-light leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Value Proposition */}
        <section
          className="py-20 border-b"
          style={{
            backgroundColor: "var(--primary-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "var(--primary)" }}
              >
                The Value Proposition
              </span>
              <h2
                className="tracking-tight mb-4"
                style={{ color: "var(--text-1)" }}
              >
                Why Study Architecture
              </h2>
              <p
                className="leading-relaxed font-light"
                style={{ color: "var(--text-2)" }}
              >
                Architecture bridges human behavioral science, cultural history,
                and structural engineering to build sustainable spatial systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Blooming Opportunities",
                  desc: "Exponential demand across fast-growing public and private infrastructure real-estate setups globally.",
                },
                {
                  title: "Eco-Conscious Focus",
                  desc: "Deep layout alignment targeting climate-responsive environments and carbon-neutral ecosystems.",
                },
                {
                  title: "Elite Corporate Access",
                  desc: "Direct structural paths to work seamlessly with top syndicates, architectural networks, and global firms.",
                },
                {
                  title: "Specialized Vectors",
                  desc: "Accelerated career growth metrics into niche practices like Landscape Design, Urban Planning, and Project Management.",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 border flex flex-col justify-between"
                  style={{
                    backgroundColor: "var(--secondary-bg)",
                    borderColor: "var(--card-border)",
                    borderRadius: "var(--r-btn)",
                  }}
                >
                  <div className="mb-6">
                    <svg
                      className="w-8 h-8 mb-4 stroke-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="var(--primary)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <h5 className="mb-2" style={{ color: "var(--text-1)" }}>
                      {benefit.title}
                    </h5>
                    <p
                      className="small1 leading-relaxed font-light"
                      style={{ color: "var(--text-2)" }}
                    >
                      {benefit.desc}
                    </p>
                  </div>
                  <span
                    className="small1 self-end font-mono"
                    style={{ color: "var(--text-2)", opacity: 0.5 }}
                  >
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Academic Blueprint & Studio Framework */}
        <section
          className="py-20 border-b"
          style={{
            backgroundColor: "var(--secondary-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "var(--primary)" }}
              >
                Academic Blueprint
              </span>
              <h2
                className="tracking-tight mb-2"
                style={{ color: "var(--text-1)" }}
              >
                B.Arch Curriculum & Learning Framework
              </h2>
              <h6
                className="uppercase tracking-widest font-mono font-medium opacity-70"
                style={{ color: "var(--text-2)" }}
              >
                Core Studio & Science Disciplines
              </h6>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-6 border shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                  style={{
                    backgroundColor: "var(--primary-bg)",
                    borderColor: "var(--card-border)",
                    borderRadius: "var(--r-btn)",
                  }}
                >
                  <div>
                    <div
                      className="h-[2px] w-12 mb-4"
                      style={{ backgroundColor: "var(--primary)" }}
                    />
                    <h5 className="mb-2" style={{ color: "var(--text-1)" }}>
                      {area.title}
                    </h5>
                    <p
                      className="small1 leading-relaxed font-light"
                      style={{ color: "var(--text-2)" }}
                    >
                      {area.desc}
                    </p>
                  </div>
                  <div
                    className="mt-6 pt-4 border-t text-[10px] font-mono uppercase tracking-widest"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-2)",
                      opacity: 0.6,
                    }}
                  >
                    STUDIO MODULE COMPONENTS // 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Experiential Highlights Matrix Banner */}
            <div
              className="mt-12 p-8 text-white grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              style={{
                backgroundColor: "var(--primary)",
                borderRadius: "var(--r-btn)",
              }}
            >
              <div>
                <h6 className="uppercase tracking-wider font-semibold text-white">
                  Key Features & Support
                </h6>
                <p className="small1 mt-1 opacity-80 font-light">
                  All-round professional development, equipping student groups
                  with both absolute technical competence and design leadership
                  execution.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 small1 font-light">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">✓</span>{" "}
                  <span>Industry-Integrated Architecture Curriculum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">✓</span>{" "}
                  <span>Practical-Oriented Studio Methodologies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">✓</span>{" "}
                  <span>Value-Added Modules Built For Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">✓</span>{" "}
                  <span>
                    Dedicated Internship Assistance & Placement Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Dual Pedagogy Ecosystem */}
        <section
          className="py-20"
          style={{ backgroundColor: "var(--primary-bg)" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "var(--primary)" }}
              >
                Delivery Ecosystem
              </span>
              <h2 className="tracking-tight" style={{ color: "var(--text-1)" }}>
                Pedagogy & Digital Resource Infrastructure
              </h2>
            </div>

            {/* Tabs Controller matching your system specs */}
            <div className="flex justify-center mb-8 space-x-4">
              <button
                onClick={() => setActiveTab("studio")}
                className={`btn-md px-6 py-3 tracking-wider uppercase border transition-all duration-300 font-semibold cursor-pointer`}
                style={{
                  backgroundColor:
                    activeTab === "studio" ? "var(--primary)" : "transparent",
                  color: activeTab === "studio" ? "#ffffff" : "var(--text-2)",
                  borderColor:
                    activeTab === "studio"
                      ? "var(--primary)"
                      : "var(--border-color)",
                  borderRadius: "var(--s-btn)",
                }}
              >
                Traditional Studio & Field Learning
              </button>
              <button
                onClick={() => setActiveTab("ict")}
                className={`btn-md px-6 py-3 tracking-wider uppercase border transition-all duration-300 font-semibold cursor-pointer`}
                style={{
                  backgroundColor:
                    activeTab === "ict" ? "var(--primary)" : "transparent",
                  color: activeTab === "ict" ? "#ffffff" : "var(--text-2)",
                  borderColor:
                    activeTab === "ict"
                      ? "var(--primary)"
                      : "var(--border-color)",
                  borderRadius: "var(--s-btn)",
                }}
              >
                ICT-Enabled Infrastructure
              </button>
            </div>

            <div
              className="p-8 border"
              style={{
                backgroundColor: "var(--secondary-bg)",
                borderColor: "var(--border-color)",
                borderRadius: "var(--r-btn)",
              }}
            >
              {activeTab === "studio" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300">
                  {[
                    {
                      title: "Classroom & Immersive Design Studio Critiques",
                      desc: "Continuous internal and external evaluation grids mapping architectural form factors.",
                    },
                    {
                      title: "Field Trips and Industrial Site Visits",
                      desc: "Experiential alignment mapping real building lifecycle frameworks and materials construction.",
                    },
                    {
                      title: "Faculty Mentoring, Coaching & Thesis Reviews",
                      desc: "Rigorous 1-on-1 critique sessions focusing on professional individual core competency output.",
                    },
                    {
                      title: "Library-Based Learning & Architectural Research",
                      desc: "Strong academic infrastructure configured specifically for historic mapping and material science archiving.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h6
                        className="font-semibold flex items-center"
                        style={{ color: "var(--text-1)" }}
                      >
                        <span
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: "var(--primary)" }}
                        />{" "}
                        {item.title}
                      </h6>
                      <p
                        className="small1 font-light leading-relaxed pl-4"
                        style={{ color: "var(--text-2)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300">
                  {[
                    {
                      title: "Advanced Computer Lab & BIM Workstations",
                      desc: "Equipped with specialized layout configurations handling architectural simulation packages seamlessly.",
                    },
                    {
                      title: "Virtual Classrooms & Remote Expert Webinars",
                      desc: "Immediate online interface matching active practitioners, international engineers, and technical panels.",
                    },
                    {
                      title: "Digital Library Access (SWAYAM & DELNET)",
                      desc: "Instantaneous remote database access tracking global e-learning portals, e-journals, and technical guidelines.",
                    },
                    {
                      title: "Online Assignments & Performance Assessments",
                      desc: "Streamlined assessment parameters mapping academic analytics metrics reliably.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h6
                        className="font-semibold flex items-center"
                        style={{ color: "var(--text-1)" }}
                      >
                        <span
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: "var(--primary)" }}
                        />{" "}
                        {item.title}
                      </h6>
                      <p
                        className="small1 font-light leading-relaxed pl-4"
                        style={{ color: "var(--text-2)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. Career Horizons & Global Roles */}
        <section
          className="py-20 text-white"
          style={{ backgroundColor: "#0a0a23" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Career Horizons
              </span>
              <h2 className="text-white tracking-tight">
                Career Paradigms After B.Arch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {careerRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-5 border bg-white/[0.02] text-center transition-all duration-300 hover:border-white/30"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    borderRadius: "var(--s-btn)",
                  }}
                >
                  <span
                    className="block font-mono text-[10px] uppercase mb-2"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    ROLE MATRIX AREA // 0{idx + 1}
                  </span>
                  <p className="small1 font-semibold text-slate-200 tracking-tight">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Regulatory Admission Matrix */}
        <section
          className="py-20"
          style={{ backgroundColor: "var(--secondary-bg)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center">
              <span
                className="small1 tracking-[0.25em] uppercase block mb-2 font-semibold"
                style={{ color: "var(--primary)" }}
              >
                Admissions Framework
              </span>
              <h2 className="tracking-tight" style={{ color: "var(--text-1)" }}>
                Eligibility Criteria & Admission Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Requirements block */}
              <div
                className="lg:col-span-6 p-8 border flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--primary-bg)",
                  borderColor: "var(--card-border)",
                  borderRadius: "var(--r-btn)",
                }}
              >
                <div>
                  <h5
                    className="uppercase tracking-wider mb-6 pb-2 border-b font-bold"
                    style={{
                      color: "var(--text-1)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    Academic Entry Benchmarks
                  </h5>
                  <ul className="space-y-4">
                    <li
                      className="flex items-start"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span
                        className="mr-2 font-bold font-mono"
                        style={{ color: "var(--primary)" }}
                      >
                        ▪
                      </span>
                      <span>
                        <strong>10+2 / Higher Secondary Route:</strong>{" "}
                        Compulsory layout parsing containing Physics, Chemistry,
                        and Mathematics with at least 50% aggregate score
                        (State-level reservations applicable).
                      </span>
                    </li>
                    <li
                      className="flex items-start"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span
                        className="mr-2 font-bold font-mono"
                        style={{ color: "var(--primary)" }}
                      >
                        ▪
                      </span>
                      <span>
                        <strong>10+3 Diploma Criteria:</strong> Recognized
                        professional diploma certification with Mathematics
                        configured as a main module with minimum 50% aggregate
                        marks.
                      </span>
                    </li>
                    <li
                      className="flex items-start font-semibold"
                      style={{ color: "var(--text-1)" }}
                    >
                      <span
                        className="mr-2 font-bold font-mono"
                        style={{ color: "var(--primary)" }}
                      >
                        ▶
                      </span>
                      <span>
                        <strong>MANDATORY EXAMINATION FRAMEWORK:</strong> Valid,
                        verified qualifying benchmark score parameters generated
                        via National Aptitude Test in Architecture (NATA) or JEE
                        Main Paper II.
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="mt-6 p-4 rounded text-xs leading-relaxed"
                  style={{
                    backgroundColor: "var(--secondary-bg)",
                    color: "var(--text-2)",
                    borderLeft: "3px solid var(--primary)",
                  }}
                >
                  * Admission procedures strict execution is completely governed
                  under the notified guidelines of DTE / SPPU / Government of
                  Maharashtra norms.
                </div>
              </div>

              {/* Protocol Flow step tracker */}
              <div
                className="lg:col-span-6 p-8 border flex flex-col"
                style={{
                  backgroundColor: "var(--primary-bg)",
                  borderColor: "var(--card-border)",
                  borderRadius: "var(--r-btn)",
                }}
              >
                <h5
                  className="uppercase tracking-wider mb-6 pb-2 border-b font-bold"
                  style={{
                    color: "var(--text-1)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  Admission Protocol (CAP)
                </h5>

                <div
                  className="relative border-l pl-6 ml-2 space-y-6 flex-grow"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {[
                    {
                      step: "01",
                      title: "Application Mapping",
                      desc: "Online profile integration and form submission within scheduled regulatory timelines cleanly.",
                    },
                    {
                      step: "02",
                      title: "Document Verification",
                      desc: "Credentials verification protocols managed at designated regional Facilitation Centers.",
                    },
                    {
                      step: "03",
                      title: "Merit Index Generation",
                      desc: "Declaration of merit status indexes strictly derived from core competitive parameters evaluations.",
                    },
                    {
                      step: "04",
                      title: "Allocation & Confirmation",
                      desc: "Systemic option lock procedures leading to mandatory institutional seat allocation mapping.",
                    },
                  ].map((flow, idx) => (
                    <div key={idx} className="relative">
                      <span
                        className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-4 flex items-center justify-center bg-white"
                        style={{ borderColor: "var(--primary)" }}
                      />
                      <h6
                        className="font-bold tracking-tight uppercase"
                        style={{ color: "var(--text-1)" }}
                      >
                        {flow.step}. {flow.title}
                      </h6>
                      <p
                        className="small1 font-light mt-0.5 leading-relaxed"
                        style={{ color: "var(--text-2)" }}
                      >
                        {flow.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Corporate Institutional Footer */}
      <footer
        className="text-xs py-12 text-slate-400 border-t"
        style={{
          backgroundColor: "#050514",
          borderColor: "rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-light opacity-60">
            &copy; {new Date().getFullYear()} Dr. D. Y. Patil College of
            Architecture, Pune. All Institutional Architecture Rights Preserved.
          </p>
          <div className="flex space-x-6 font-mono text-[10px] uppercase tracking-wider opacity-70">
            <span>Savitribai Phule Pune University Affiliated</span>
            <span>|</span>
            <span>Council of Architecture (CoA) Registered</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
