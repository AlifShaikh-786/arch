"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function BArchDepartmentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("b-arch-programme");
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuItems = [
    { id: "b-arch-programme", label: "B.Arch Programme" },
    { id: "syllabus", label: "Syllabus" },
    // { id: "specializations", label: "Studio Electives" },
    { id: "internship", label: "Practical Training & Experience" },
    { id: "why-choose", label: "Why Choose" },
    // { id: "faculty-list", label: "Faculty Directory Last 3 Years" },
    { id: "b-arch-co-po", label: "B.Arch CO PO Outcomes" },
    // { id: "case-studies", label: "Architectural Case Studies" },
    { id: "admission-process", label: "Admission Process" },
    { id: "academic-calendar", label: "Academic Calendar" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "What programs are offered at DY Patil School of Architecture?",
      answer:
        "DY Patil School of Architecture offers undergraduate and postgraduate programs in Architecture, designed to develop creative thinking, technical expertise, and professional skills required in the architecture and design industry.",
    },
    {
      question:
        "What is the eligibility criteria for admission to the Architecture program?",
      answer:
        "To be eligible for the Bachelor of Architecture (B.Arch.) program, candidates must have completed 10+2 (or equivalent) with mathematics as a subject. Additionally, candidates must appear for the NATA (National Aptitude Test in Architecture) and secure the minimum qualifying score as prescribed by the Council of Architecture.",
    },
    {
      question: "What is the duration of the B.Arch program ?",
      answer:
        "The Bachelor of Architecture (B.Arch) program is a 5-year full-time professional degree course divided into 10 semesters, including practical training and design studios.",
    },
    {
      question: "What are the eligibility criteria for admission to B.Arch?",
      answer:
        "Candidates must have completed 10+2 with Mathematics as a compulsory subject and meet the minimum marks criteria prescribed by the Council of Architecture and admission authorities. A valid NATA score is also required.",
    },
    {
      question: "How are the faculty members at DYPSA?",
      answer:
        "Our faculty comprises highly qualified academicians and industry professionals with extensive experience in architecture, design, urban planning, and sustainability. They are dedicated to mentoring students and fostering innovation.",
    },
    {
      question: "What are the career opportunities after completing B.Arch?",
      answer:
        "Graduates can work as architects, interior designers, urban planners, landscape architects, construction managers, heritage consultants, or pursue higher education in India or abroad. The demand for skilled architects is growing across various sectors.",
    },
    {
      question:
        "Does the institute have industry tie-ups for internships and placements?",
      answer:
        "Yes, we have strong ties with leading architectural firms, construction companies, real estate developers, and design studios. These collaborations provide students with valuable internship opportunities and enhance their placement prospects.",
    },
    {
      question: "What software and technology do students learn?",
      answer:
        "Students are trained in industry-standard software such as AutoCAD, Revit, SketchUp, V-Ray, Adobe Creative Suite, and BIM tools. Practical exposure to modern construction technologies and sustainable design practices is also emphasized.",
    },
    {
      question: "Do you offer hostel facilities for students?",
      answer:
        "Yes, comfortable and secure hostel facilities are available for both boys and girls with amenities like Wi-Fi, mess facilities, security, and recreational areas to support a conducive learning environment.",
    },
    {
      question: "What are the internship opportunities for students?",
      answer:
        "Internships are a mandatory part of our curriculum. Students work with architectural firms, construction sites, and design studios to gain hands-on experience in real-world projects during their program.",
    },
  ];

  const processSteps = [
    {
      title: "Apply Online",
      timeframe: "Step 01",
      desc: "Complete the digital application profile on our central registration portal, uploading your formal identity layouts and official higher secondary academic transcript sheets.",
    },
    {
      title: "Eligibility Verification",
      timeframe: "Step 02",
      desc: "Our regulatory admissions panel meticulously audits your standard marks profile to ensure complete compliance alignment with state level criteria and minimum grade configurations.",
    },
    {
      title: "Entrance Exam Score Submission",
      timeframe: "Step 03",
      desc: "Provide your official, authenticated NATA scorecards or your JEE Main Paper II scorecard metrics to establish your rank position on the institutional admission index list.",
    },
    {
      title: "Counseling Process",
      timeframe: "Step 04",
      desc: "Participate in formal, systematic counseling presentation tracks where you interact directly with senior studio faculty masters to evaluate workspace tracks and confirm seats.",
    },
    {
      title: "Admission Confirmation",
      timeframe: "Step 05",
      desc: "Finalize your professional registration block by rendering the entry tuition fees, securing your dedicated design table assignment, and logging into the official institutional portal.",
    },
  ];

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

  // Smooth scroll handler on click
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveSection(id);

      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (clickTimeout.current) clearTimeout(clickTimeout.current);
      clickTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  // Scroll Spy: Tracks viewport presence and highlights matching left-side titles
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -55% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto  py-20 px-5">
      <div className="flex flex-col lg:flex-row gap-8 items-start ">
        {/* Left Side Navigation Sidebar */}
        <aside className="w-full lg:w-[340px] pt-28 shrink-0 bg-[var(--secondary-bg)] rounded-[var(--r-lg-btn)] p-6 lg:sticky lg:top-8 border border-[var(--card-border)]">
          <h2 className="  text-[var(--text-1)] mb-6 border-b border-[var(--border-color)] pb-3">
            B.Arch Department
          </h2>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? "var(--primary) !important"
                      : "transparent",
                  }}
                  className={`w-full text-left px-4 py-2 rounded-[var(--s-btn)] transition-all   ${
                    isActive
                      ? "text-white "
                      : "text-white hover:bg-[var(--secondary-bg)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Side Sections Content Container */}
        <section className="flex-1 w-full space-y-20">
          {/* 1. B.Arch Programme Section */}
          {/* 1. B.Arch Programme Section */}
          <div id="b-arch-programme" className="scroll-mt-8 space-y-8">
            <div className="border-b-2 border-black pb-2 inline-block">
              <h1 className="text-[var(--text-1)] m-0">
                Bachelor of Architecture (B.Arch) in Pune
              </h1>
            </div>

            {/* Program Introduction */}
            <div className="space-y-6">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                About the B.Arch Programme
              </h3>
              <p className="text-[var(--text-2)]">
                Architectural education is about learning to balance creative
                spatial imagination with material science, environmental safety,
                and structural construction rules. Our 5-year full-time
                professional undergraduate degree program transforms creative
                students into professional architects who can plan, design, and
                construct buildings that are beautiful, safe, and sustainable.
              </p>
              <p className="text-[var(--text-2)]">
                The Bachelor of Architecture program at{" "}
                <strong className="text-[var(--text-1)] ">
                  Dr. D. Y. Patil Institute
                </strong>
                , Pune is fully approved by the Council of Architecture (COA),
                New Delhi. The program combines regular classroom lectures with
                extensive studio drawing work, building materials research,
                environmental studies, and modern digital design software
                training.
              </p>
            </div>

            {/* Program Quick Highlights Grid */}
            <div className="grid grid-cols-2 space-y-4  md:grid-cols-4 gap-4 py-6">
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center">
                <span className="block text-2xl  text-[var(--primary)]">
                  5 Years
                </span>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Course Duration
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center">
                <span className="block text-2xl  text-[var(--primary)]">
                  10 Sem
                </span>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Total Semesters
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center">
                <span className="block text-2xl  text-[var(--primary)]"> 
                  COA
                </span>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Govt. Approved
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center h-[94px]">
                <span className="block text-2xl  text-[var(--primary)]">
                  1 Semester
                </span>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Office Internship
                </span>
              </div>
            </div>

            {/* Core Learning Focus Area */}
            <div className="space-y-4">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                What You Will Learn
              </h3>
              <p className="text-[var(--text-2)]">
                The program is structured simply to help students build skills
                step-by-step. Over the course of five years, your studies will
                focus on three primary areas:
              </p>
              <ul className="list-disc pl-5 text-[var(--text-2)] space-y-2">
                <li>
                  <strong className="text-[var(--text-1)]">
                    Architectural Design Studios:
                  </strong>{" "}
                  Learning how to sketch ideas by hand, create 3D scale models,
                  and design spaces like houses, schools, commercial offices,
                  and public parks.
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">
                    Building Construction & Technology:
                  </strong>{" "}
                  Understanding how different materials like brick, concrete,
                  steel, glass, and wood behave under loads, alongside modern
                  waterproof and insulation systems.
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">
                    Digital Tools & Software:
                  </strong>{" "}
                  Mastering industry-standard computational tools like AutoCAD,
                  Revit (BIM), SketchUp, and Photoshop to create real-world
                  blueprints and virtual 3D models.
                </li>
              </ul>
            </div>

            {/* Location Advantage */}
            <div className="space-y-4">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                Why Study Architecture in Pune
              </h3>
              <p className="text-[var(--text-2)]">
                Pune serves as an excellent live lab for architecture students.
                The city blends a rich heritage of historic traditional
                monuments and colonial architectures with modern smart city
                complexes, premium IT townships, and green buildings. This
                diverse built environment provides our students with easy access
                to site case studies, regular interactive visits to local
                construction projects, and direct training connections with top
                structural layout firms across the region.
              </p>
            </div>
          </div>

          {/* 2. Syllabus & Core Modules Section */}
          <div
            id="syllabus"
            className="scroll-mt-8 space-y-6 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">Syllabus & Core Modules</h2>
            <p className="text-[var(--text-2)]">
              The curriculum spans across 10 semesters, organized to advance
              sequentially from foundational hand-drafting styles to complex
              regional urban planning matrices and computer-aided engineering
              platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--secondary-bg)] p-5 rounded-[var(--r-btn)] border border-[var(--card-border)]">
                <h5 className="text-[var(--text-1)] mb-2 ">
                  Years 1 & 2 (Foundational Studio)
                </h5>
                <ul className="list-disc pl-5 text-[var(--text-2)] space-y-1">
                  <li>Basic Design & Visual Arts Theory</li>
                  <li>Architectural Graphics & Spatial Drafting</li>
                  <li>Building Materials & Construction Tech I & II</li>
                  <li>History of Architecture & Culture</li>
                  <li>Structural Mechanics & Load Configurations</li>
                </ul>
              </div>
              <div className="bg-[var(--secondary-bg)] p-5 rounded-[var(--r-btn)] border border-[var(--card-border)]">
                <h5 className="text-[var(--text-1)] mb-2 ">
                  Years 3 & 4 (Intermediate Systems)
                </h5>
                <ul className="list-disc pl-5 text-[var(--text-2)] space-y-1">
                  <li>Working Drawings & Construction Details</li>
                  <li>Climatology & Passive Environmental Design</li>
                  <li>Building Services (HVAC, Plumbing, Electrical)</li>
                  <li>Contemporary Landscape Architecture</li>
                  <li>Parametric Design & BIM Workflows</li>
                </ul>
              </div>
              <div className="bg-[var(--secondary-bg)] p-5 rounded-[var(--r-btn)] border border-[var(--card-border)] col-span-1 md:col-span-2">
                <h5 className="text-[var(--text-1)] mb-2 ">
                  Year 5 (Professional Practice & Thesis)
                </h5>
                <ul className="list-disc pl-5 text-[var(--text-2)] space-y-1">
                  <li>Professional Practice, Ethics & Office Management</li>
                  <li>Urban Economics & Spatial Planning Dynamics</li>
                  <li>
                    Comprehensive Capstone Design Thesis & Final Defense Project
                  </li>
                </ul>
              </div>
            </div>
          </div>

      

          {/* 4. Practical Training & Experience Section */}
          <div
            id="internship"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              Practical Training & Experience
            </h2>
            <p className="text-[var(--text-2)]">
              In accordance with Council of Architecture mandates, students
              spend a full semester working in approved architectural offices,
              construction companies, or regional planning firms.
            </p>
            <p className="text-[var(--text-2)]">
              This structural residency ensures that students gain direct
              experience handling construction site blueprints, submitting
              structural approvals to civic authorities, coordinating client
              project scopes, and managing actual project budgets under senior
              project leads.
            </p>
          </div>

          {/* 5. Faculty Profile Section */}
          <div
            id="why-choose"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              {" "}
              Why Choose B.Arch at Our College?
            </h2>
            <p className="text-[var(--text-2)]">
              We provide a rigorous ecosystem engineered to transform aspiring
              creative minds into highly technical, globally competent
              architectural innovators.
            </p>
            <div className=" flex flex-col gap-2">
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
                      className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-(--primary)">0{index + 1}</span>
                        <h6>{item.title}</h6>
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
                        <p
                          className="small1 "
                          style={{ color: "var(--text-2)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6. Faculty Directory Section */}
          {/* <div
            id="faculty-list"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              Faculty Directory Last 3 Years
            </h2>
            <p className="text-[var(--text-2)]">
              The continuous academic and research efforts of our core
              architectural instructional team are detailed below:
            </p>
            <div className="overflow-x-auto border border-[var(--card-border)] rounded-[var(--r-btn)]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--secondary-bg)] border-b border-[var(--border-color)] text-[var(--text-1)]">
                    <th className="p-4 ">Faculty Member</th>
                    <th className="p-4 ">Designation</th>
                    <th className="p-4 ">Core Competency Area</th>
                    <th className="p-4 ">COA Registration No.</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-2)] divide-y divide-[var(--border-color)]">
                  <tr>
                    <td className="p-4  text-[var(--text-1)]">
                      Ar. Ramesh Kulkarni
                    </td>
                    <td className="p-4">Professor & Principal</td>
                    <td className="p-4">Urban Design & Smart Cities</td>
                    <td className="p-4">CA/1998/23412</td>
                  </tr>
                  <tr>
                    <td className="p-4  text-[var(--text-1)]">
                      Ar. Sunita Deshpande
                    </td>
                    <td className="p-4">Associate Professor</td>
                    <td className="p-4">
                      Environmental Architecture & Energy Modeling
                    </td>
                    <td className="p-4">CA/2005/36781</td>
                  </tr>
                  <tr>
                    <td className="p-4  text-[var(--text-1)]">
                      Ar. Amit Bhosale
                    </td>
                    <td className="p-4">Assistant Professor</td>
                    <td className="p-4">Digital Fabrication & BIM Logistics</td>
                    <td className="p-4">CA/2012/51294</td>
                  </tr>
                  <tr>
                    <td className="p-4  text-[var(--text-1)]">
                      Dr. Meera Kirloskar
                    </td>
                    <td className="p-4">Professor</td>
                    <td className="p-4">
                      Architectural History & Heritage Preservation
                    </td>
                    <td className="p-4">CA/1995/18420</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}

          {/* 7. B.Arch CO PO Outcomes Section */}
          <div
            id="b-arch-co-po"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              B.Arch Course Outcomes (CO) & Program Outcomes (PO)
            </h2>
            <p className="text-[var(--text-2)]">
              Our educational framework evaluates student progression based on
              explicit Course Outcomes (CO) mapped precisely against overarching
              Program Outcomes (PO). This approach matches National Board of
              Accreditation (NBA) criteria.
            </p>
            <div className="space-y-3 pl-4 border-l-4 border-[var(--primary)] text-[var(--text-2)]">
              <p>
                <strong className="text-[var(--text-1)] ">
                  PO 1 - Architectural Knowledge:
                </strong>{" "}
                Apply historical insights, social paradigms, and building
                engineering principles to generate creative spatial responses.
              </p>
              <p>
                <strong className="text-[var(--text-1)] ">
                  PO 2 - Problem Analysis:
                </strong>{" "}
                Evaluate context-driven parameters and environmental data to
                plan comprehensive architectural briefs.
              </p>
              <p>
                <strong className="text-[var(--text-1)] ">
                  PO 3 - Technical Design Solutions:
                </strong>{" "}
                Create structural construction layouts that meet global fire
                safety, zoning regulations, and structural integrity standards.
              </p>
              <p>
                <strong className="text-[var(--text-1)] ">
                  PO 4 - Sustainable Ethics:
                </strong>{" "}
                Protect community microclimates by using context-appropriate
                materials and minimizing construction footprint damage.
              </p>
            </div>
          </div>

  
          {/* 9. Admission Process */}
          <div
            id="admission-process"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)] ">Admission Process</h2>
            <p className="mt-3  text-[var(--text-2)] ">
              A highly structured, sequential pathway designed to evaluate and
              verify your qualifications for entry into our flagship
              professional undergraduate design studio batch.
            </p>
            <div className="relative border-l border-[var(--border-color)] ml-4 sm:ml-32 space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-8 sm:pl-12 group">
                  {/* Desktop Absolute Timeframe Sidebar Label Marker */}
                  <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right    text-[var(--primary)] uppercase">
                    {step.timeframe}
                  </div>

                  {/* Central Structural Timeline Junction Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-(--r-lg) bg-[var(--secondary-bg)] border-2 border-[var(--border-color)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-transparent transition-colors group-hover:bg-white" />
                  </div>

                  {/* Main Information Step Content Card Grid */}
                  <div className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[var(--primary)]/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h5 className="text-[var(--text-1)] ">{step.title}</h5>
                      {/* Mobile-only Step Counter Badge */}
                      <span className="sm:hidden inline-block w-max   text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 ">
                        {step.timeframe}
                      </span>
                    </div>

                    <p className="small1 text-[var(--text-2)] ">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Academic Calendar Section */}
          <div
            id="academic-calendar"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">Academic Calendar</h2>
            <p className="text-[var(--text-2)]">
              The academic year is organized to offer a structured, transparent
              timeline for curricular, co-curricular, and corporate initiatives.
            </p>
            <div className="bg-[var(--secondary-bg)] p-6 rounded-[var(--r-btn)] border border-[var(--card-border)] space-y-3 text-[var(--text-2)]">
              <p className="flex justify-between border-b border-[var(--border-color)] pb-2">
                <span>Studio Allocation & Term Commencement</span>
                <strong className="text-[var(--text-1)]">
                  First Week of August
                </strong>
              </p>
              <p className="flex justify-between border-b border-[var(--border-color)] pb-2">
                <span>Mid-Term Studio Evaluation Appraisals & Site Visits</span>
                <strong className="text-[var(--text-1)]">
                  Second Week of October
                </strong>
              </p>
              <p className="flex justify-between border-b border-[var(--border-color)] pb-2">
                <span>Annual Exhibition & NASA Jury Panel Critiques</span>
                <strong className="text-[var(--text-1)]">
                  Last Week of November
                </strong>
              </p>
              <p className="flex justify-between pb-1">
                <span>University Studio Viva Voce & Term Examinations</span>
                <strong className="text-[var(--text-1)]">
                  Third Week of December
                </strong>
              </p>
            </div>
          </div>

          {/* 11.    Frequently Asked Questions */}
          <div
            id="faq"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              {" "}
              Frequently Asked Questions
            </h2>

            <div className="border-t border-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <p className="text-[var(--text-1)]">{faq.question}</p>
                    <span
                      className={`w-8 h-8 rounded-full border border-black flex items-center justify-center transition-all duration-300 text-black ${
                        openIndex === index
                          ? "bg-[var(--primary)] text-white rotate-45 border-[var(--primary)]"
                          : "bg-transparent"
                      }`}
                    >
                      <FaPlus size={12} />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-[200px] pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-[var(--text-1)]">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
