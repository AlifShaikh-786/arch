import React from "react";
import { FaPlus } from "react-icons/fa";
import FAQSection from "../M-Arch/FAQSection";
import WhyChooseAccordion from "../M-Arch/WhyChoose";
import Image from "next/image";
import SidebarNavigation from "@/src/components/SidebarNavigation";

export default function MArchDepartmentPage() {
  const menuItems = [
    { id: "about-programe", label: "About Programe" },
    { id: "syllabus", label: "Syllabus & Research Core" },
    { id: "practical-training", label: "Practical Training & Experience" },
    { id: "why-choose", label: "Why Choose" },
    { id: "m-arch-co-po", label: "M.Arch CO PO Outcomes" },
    { id: "career-opportunities", label: "Career Opportunities" },
    { id: "admission-process", label: "Admission Process" },
    { id: "academic-calendar", label: "Academic Calendar" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  const processSteps = [
    {
      title: "Online Application & Document Upload",
      timeframe: "Step 01",
      desc: "Register on our central institutional admissions portal. Upload your official B.Arch degree certificates, consolidated semester transcripts, and formal identity metrics.",
    },
    {
      title: "Entrance exam Evaluation",
      timeframe: "Step 02",
      desc: "Submit your official score verification sheets for the MAH-M.Arch-CET or qualifying national GATE score matrix to be ranked on the institutional merit indexing roster.",
    },
    {
      title: "Design Portfolio Screening",
      timeframe: "Step 03",
      desc: "Present your comprehensive undergraduate design portfolio alongside professional project references to our postgraduate academic committee for baseline design aptitude screening.",
    },
    {
      title: "Centralized Counseling & Personal Interview",
      timeframe: "Step 04",
      desc: "Participate in systematic personal interviews and CAP counseling tracks where you align your intended research vision with our specific departmental studio tracks.",
    },
    {
      title: "Seat Allocation & Fee Settlement",
      timeframe: "Step 05",
      desc: "Confirm your postgraduate registration by submitting the initial tuition entry fees, securing your advanced research workstation, and receiving your institutional credentials.",
    },
  ];

  const pillars = [
    {
      title: "Acclaimed Research Faculty",
      desc: "Study directly under practicing master planners, doctorate-level scholars, and recognized global sustainability experts with deep research experience.",
    },
    {
      title: "Advanced Simulation Laboratories",
      desc: "Access specialized computer labs configured with high-performance rendering engines, microclimate mapping tools, and advanced parametric modeling platforms.",
    },
    {
      title: "Urban and Environmental Node Alliances",
      desc: "Collaborate directly with active municipal corporations, smart-city development groups, and premium environmental consultation networks during active studio reviews.",
    },
    {
      title: "Live Regional Case Studies",
      desc: "Examine complex urban infrastructures, environmental preservation layouts, and heritage sectors across western India using physical mapping and spatial data systems.",
    },
    {
      title: "Parametric & Digital Fabrication Focus",
      desc: "Master computational design methodologies, algorithmic form-generation tools, and digital fabrication techniques to solve next-generation spatial puzzles.",
    },
    {
      title: "Advanced Sustainability Milestones",
      desc: "Incorporate advanced thermal dynamic principles, zero-carbon building frameworks, and net-positive energy design parameters according to global standard models.",
    },
    {
      title: "Strategic Portfolio Optimization",
      desc: "Refine your creative and technical research outputs through high-profile review juries, helping you transition smoothly into corporate leadership or advanced doctoral fields.",
    },
    {
      title: "Executive Network Integration",
      desc: "Connect directly with prominent real estate firms, tier-1 multi-disciplinary design consultancies, and global infrastructure developers through dedicated recruitment channels.",
    },
  ];

  const careers = [
    {
      role: "Senior Architect",
      sector: "Design Leadership",
      scope:
        "Lead multidisciplinary design teams, manage large-scale projects, and oversee complex architectural developments.",
    },
    {
      role: "Urban Designer",
      sector: "Urban Development",
      scope:
        "Plan public spaces, smart-city initiatives, and urban regeneration projects that improve community experiences.",
    },
    {
      role: "Sustainability Consultant",
      sector: "Environmental Design",
      scope:
        "Develop energy-efficient, climate-responsive, and environmentally sustainable design solutions for modern buildings.",
    },
    {
      role: "BIM Manager",
      sector: "Digital Construction",
      scope:
        "Manage advanced BIM workflows, coordinate project information, and streamline collaboration across disciplines.",
    },
    {
      role: "Computational Designer",
      sector: "Design Technology",
      scope:
        "Utilize parametric modeling, generative design systems, and algorithmic workflows to solve complex design challenges.",
    },
    {
      role: "Project Architect",
      sector: "Project Management",
      scope:
        "Oversee project execution from concept development to construction completion while ensuring quality and compliance.",
    },
    {
      role: "Environmental Analyst",
      sector: "Research & Sustainability",
      scope:
        "Conduct environmental impact assessments, energy simulations, and performance evaluations for built environments.",
    },
    {
      role: "Research Associate",
      sector: "Academic Research",
      scope:
        "Contribute to architectural research projects, publications, and innovation initiatives within academic and professional institutions.",
    },
    {
      role: "Assistant Professor",
      sector: "Higher Education",
      scope:
        "Teach architecture courses, mentor students, and contribute to research, academic development, and institutional growth.",
    },
    {
      role: "Design Strategist",
      sector: "Consultancy",
      scope:
        "Develop innovative design frameworks, advise organizations on spatial strategies, and guide long-term development visions.",
    },
  ];

  return (
    <main className="">
      <section className="relative py-20 w-full h-[450px] sm:h-[350px] top-0  lg:h-[310px] xl:h-[320px]   flex flex-col  justify-center    text-white overflow-hidden  ">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0  ">
          <Image
            src="/campus/campus.png"
            alt="Management Building Background"
            fill
            priority
            className="object-cover "
          />

          <div className="absolute inset-0 bg-[#0f2c42]/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-5xl text-start px-6 flex flex-col items-start xl:mt-[80px] md:mt-32  mt-56 xl:ml-20 md:ml-16 ml-2 ">
          <h1 className="     drop-shadow-md mb-2">
            Master of Architecture in Pune
          </h1>
          <div className="w-[180px] h-[2px] bg-white/90 mb-4 opacity-80" />

          {/* Subtitle Description */}
          <p className="text-white   md:max-w-md lg:max-w-xl max-w-sm    drop-shadow-sm">
            Shape the future through creative design and sustainable
            architecture. Build innovative spaces that inspire generations.
          </p>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-[1440px] mx-auto  ">
        {/* Left Side Navigation Sidebar */}
        <div className="sticky top-20">
          <SidebarNavigation items={menuItems} />
        </div>
        {/* <aside className="  w-full lg:w-[340px] shrink-0 bg-[var(--secondary-bg)] rounded-[var(--r-lg-btn)] p-6 lg:sticky lg:top-8 border border-[var(--card-border)]">
          <h2 className="text-[var(--text-1)] mb-6 border-b border-[var(--border-color)] pb-3">
            M.Arch Department
          </h2>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => {
              const isActive = index === 0;
              return (
                <button
                  key={item.id}
                  data-section-id={item.id}
                  style={{
                    color: isActive ? "white" : "",
                    backgroundColor: isActive
                      ? "var(--primary)"
                      : "transparent",
                  }}
                  className={`w-full text-left px-4 py-2 rounded-[var(--s-btn)] transition-all sidebar-nav-btn ${
                    isActive
                      ? "text-white bg-[var(--primary)]"
                      : "text-[var(--text-1)] hover:bg-[var(--border-color)]/20"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside> */}

        {/* Right Side Sections Content Container */}
        <section className="flex-1 w-full space-y-20 py-16 mt-4">
          {/* 1. M.Arch Programme Section */}
          <div id="about-programe" className="scroll-mt-8 space-y-8">
            {/* <div className="border-b-2 border-black pb-2 inline-block">
              <h1 className="text-[var(--text-1)] m-0">
                Master of Architecture (M.Arch) in Pune
              </h1>
            </div> */}

            {/* Program Introduction */}
            <div className="space-y-6">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                About Programe
              </h3>
              <p className="text-[var(--text-2)]">
                Postgraduate architectural pedagogy centers on advanced research
                methodologies, systematic analytical skills, and cutting-edge
                software applications. Our 2-year full-time professional
                Master’s degree helps qualified architects lead specialized
                practices, manage urban transformations, and master complex,
                climate-responsive design methods.
              </p>
              <p className="text-[var(--text-2)]">
                The Master of Architecture program at{" "}
                <strong className="text-[var(--text-1)] ">
                  Dr. D. Y. Patil Institute
                </strong>
                , Pune is approved by the Council of Architecture (COA), New
                Delhi. The program bridges academic theory with field research,
                training students in parametric design pipelines, energy
                simulations, historic preservation, and data-driven urban
                strategies.
              </p>
            </div>

            {/* Program Quick Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="bg-[var(--secondary-bg)] p-4 rounded-[var(--r-btn)] border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">2 Years</h4>
                <span className="small1 text-[var(--text-2)] uppercase block mt-1">
                  Course Duration
                </span>
              </div>
              <div className="bg-[var(--secondary-bg)] p-4 rounded-[var(--r-btn)] border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">4 Sem</h4>
                <span className="small1 text-[var(--text-2)] uppercase block mt-1">
                  Total Semesters
                </span>
              </div>
              <div className="bg-[var(--secondary-bg)] p-4 rounded-[var(--r-btn)] border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">COA</h4>
                <span className="small1 text-[var(--text-2)] uppercase block mt-1">
                  Govt. Approved
                </span>
              </div>
              <div className="bg-[var(--secondary-bg)] p-4 rounded-[var(--r-btn)] border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">Research</h4>
                <span className="small1 text-[var(--text-2)] uppercase block mt-1">
                  Thesis Driven
                </span>
              </div>
            </div>

            {/* Core Learning Focus Area */}
            <div className="space-y-4">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                What You Will Learn
              </h3>
              <p className="text-[var(--text-2)]">
                The master's curriculum is carefully structured to guide
                students from theoretical framework development into live
                research testing and deployment across three major pillars:
              </p>
              <ul className="list-disc pl-5 text-[var(--text-2)] space-y-2">
                <li>
                  <strong className="text-[var(--text-1)]">
                    Advanced Research Design Studios:
                  </strong>{" "}
                  Developing large-scale spatial concepts, sustainable
                  infrastructure master plans, and context-driven neighborhood
                  regenerations based on field data.
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">
                    Environmental Simulations & Analytics:
                  </strong>{" "}
                  Using specialized software engines to model daylighting
                  indexes, optimize thermal performances, analyze microclimate
                  wind dynamics, and design for zero net carbon.
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">
                    Parametric Methods & BIM Level 2:
                  </strong>{" "}
                  Mastering rule-based structural generation via algorithmic
                  scripts, complex surface modeling, and collaborative Building
                  Information Modeling workflows.
                </li>
              </ul>
            </div>

            {/* Location Advantage */}
            <div className="space-y-4">
              <h3 className="text-[var(--text-1)] border-b border-[var(--border-color)] pb-1">
                Why Study Post-Graduation in Pune
              </h3>
              <p className="text-[var(--text-2)]">
                Pune serves as an exceptional live laboratory for postgraduate
                researchers. The rapid urban expansion of the city provides
                immediate access to live case studies, including high-tech
                industrial parks, smart infrastructure challenges, historic
                conservation zones, and complex regional transport planning
                projects. This environment provides direct collaborative access
                to top-tier structural engineering consortiums and international
                design houses.
              </p>
            </div>
          </div>

          {/* 2. Syllabus & Core Modules Section */}
          <div
            id="syllabus"
            className="scroll-mt-8 space-y-6 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">Syllabus & Research Core</h2>
            <p className="text-[var(--text-2)]">
              The curriculum spans across 4 academic semesters, structured to
              move systematically from baseline research frameworks to advanced
              simulation testing and individual capstone dissertation tracks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--secondary-bg)] p-5 rounded-[var(--r-btn)] border border-[var(--card-border)]">
                <h5 className="text-[var(--text-1)] mb-2 ">
                  Semester 1 & 2 (Advanced Methods)
                </h5>
                <ul className="list-disc pl-5 text-[var(--text-2)] space-y-1">
                  <li>Research Methodology & Academic Writing</li>
                  <li>Advanced Architectural Design Studio I & II</li>
                  <li>Climate Responsive Architecture & Energy Auditing</li>
                  <li>Parametric Design Systems & Computational Tools</li>
                  <li>Urban Infrastructure & Land-Use Economics</li>
                </ul>
              </div>
              <div className="bg-[var(--secondary-bg)] p-5 rounded-[var(--r-btn)] border border-[var(--card-border)]">
                <h5 className="text-[var(--text-1)] mb-2 ">
                  Semester 3 & 4 (Specialization & Thesis)
                </h5>
                <ul className="list-disc pl-5 text-[var(--text-2)] space-y-1">
                  <li>Specialized Studio Elective (Urban / Eco Systems)</li>
                  <li>GIS Mapping & Regional Space Planning</li>
                  <li>Professional Practice & Project Management Metrics</li>
                  <li>Pre-Thesis Seminar & Literature Review Frameworks</li>
                  <li>Terminal Capstone Design Thesis & Public Jury Defense</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Advanced Practice & Research Section */}
          <div
            id="practical-training"
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
          {/* 4. Why Choose Section */}
          <div
            id="why-choose"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <WhyChooseAccordion />
          </div>
          {/* <div
            id="why-choose"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              Why Choose M.Arch at Our College?
            </h2>
            <p className="text-[var(--text-2)]">
              We provide a specialized postgraduate environment designed to help
              creative professionals develop deep technical expertise, research
              capabilities, and global design skills.
            </p>
            <div className="flex flex-col gap-2">
              {pillars.map((item, index) => {
                const isOpen = index === 0;
                return (
                  <div
                    key={index}
                    data-why-choose-item
                    className="bg-white border transition-all duration-300 overflow-hidden"
                    style={{
                      borderColor: "var(--border-color)",
                      borderRadius: "var(--r-btn)",
                    }}
                  >
                   
                    <button className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
                      <div className="flex items-center gap-4">
                        <span className="text-[var(--primary)] ">
                          0{index + 1}
                        </span>
                        <h6 className=" text-[var(--text-1)]">{item.title}</h6>
                      </div>

                     
                      <div
                        className={`accordion-arrow w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
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

                  
                    <div
                      className={`accordion-body transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 border-t" : "max-h-0"
                      }`}
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div className="p-6">
                        <p className=" text-[var(--text-2)] m-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}

          {/* 5. M.Arch CO PO Outcomes Section */}
          <div
            id="m-arch-co-po"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              M.Arch Course Outcomes (CO) & Program Outcomes (PO)
            </h2>
            <p className="text-[var(--text-2)]">
              Our educational framework evaluates student progress using precise
              Course Outcomes (CO) mapped against advanced, postgraduate Program
              Outcomes (PO) in line with NBA parameters.
            </p>
            <div className="space-y-3 pl-4 border-l-4 border-[var(--primary)] text-[var(--text-2)]">
              <p>
                <strong className="text-[var(--text-1)]">
                  PO 1 - Advanced Spatial Synthesis:
                </strong>{" "}
                Apply complex research methodologies and theoretical design
                frameworks to generate sustainable solutions for dense urban and
                regional challenges.
              </p>
              <p>
                <strong className="text-[var(--text-1)]">
                  PO 2 - Diagnostic Environmental Analysis:
                </strong>{" "}
                Evaluate building energy metrics, microclimate profiles, and
                site environmental factors using specialized computational
                simulation tools.
              </p>
              <p>
                <strong className="text-[var(--text-1)]">
                  PO 3 - Professional & Legal Leadership:
                </strong>{" "}
                Formulate comprehensive development plans that match municipal
                bylaws, environmental policies, national codes, and
                institutional ethics.
              </p>
              <p>
                <strong className="text-[var(--text-1)]">
                  PO 4 - Applied Innovation & Dissemination:
                </strong>{" "}
                Produce original research papers, architectural design catalogs,
                and technical thesis records suitable for professional industry
                publication.
              </p>
            </div>
          </div>

          {/* Career Opportunities & Professional Roles Section */}
          <div
            id="career-opportunities"
            className="scroll-mt-8 space-y-6 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              Career Opportunities & Professional Roles
            </h2>
            <p className="text-[var(--text-2)]">
              Earning an M.Arch degree positions you for leadership, advanced
              research, and high-level consulting work. Graduates are equipped
              to direct large-scale projects, influence policy, and handle
              intricate design problems for multinational firms and civic
              agencies.
            </p>

            <div className="min-h-screen bg-[var(--background)] text-[var(--text-1)] px-2 ">
              <div className="">
                {/* SIMPLIFIED ROW LAYOUT */}
                <div className="divide-y divide-[var(--border-color)]">
                  {careers.map((career, index) => {
                    const formattedNumber = String(index + 1).padStart(2, "0");

                    return (
                      <div
                        key={index}
                        className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
                      >
                        {/* INDEX & SECTOR LABEL */}
                        <div className=" shrink-0 flex items-center gap-3">
                          <span className="small1 text-[var(--primary)]  ">
                            {formattedNumber}
                          </span>
                          {/* <span className="small1 text-[var(--text-2)] uppercase">
                    {career.sector}
                  </span> */}
                        </div>

                        {/* CONTENT AREA */}
                        <div className="space-y-1 flex-1">
                          <h6 className=" transition-colors duration-150">
                            {career.role}
                          </h6>
                          <p className="text-[var(--text-2)]">{career.scope}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Standard Job Roles List */}
            <div
              id="Job-Roles"
              className="bg-(--secondary-bg) p-6 rounded-(--r-btn) border border-[var(--card-border)]"
            >
              <h4 className="text-[var(--text-1)]  mb-4">
                Advanced Job Titles for M.Arch Postgraduates
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4  text-[var(--text-2)]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Senior Associate Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Sustainability Consultant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Urban Planner / Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Computational BIM Lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Environmental Analyst</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Project Manager (PMC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Assistant Professor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] shrink-0" />
                  <span>Research Scientist / Critic</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Admission Process Section */}
          <div
            id="admission-process"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">Admission Process</h2>
            <p className="mt-3 text-[var(--text-2)]">
              A structured, step-by-step process designed to review your
              academic history, evaluate your entrance exam results, and verify
              your professional goals before admitting you to our advanced
              postgraduate studios.
            </p>
            <div className="relative border-l border-[var(--border-color)] ml-4 sm:ml-32 space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-8 sm:pl-12 group">
                  {/* Desktop Timeframe Sidebar Label */}
                  <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right text-[var(--primary)] uppercase ">
                    {step.timeframe}
                  </div>

                  {/* Timeline Junction Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-(--r-lg) bg-[var(--secondary-bg)] border-2 border-[var(--border-color)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-transparent transition-colors group-hover:bg-white" />
                  </div>

                  {/* Main Step Content Card */}
                  <div className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[var(--primary)]/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h5 className="text-[var(--text-1)] ">{step.title}</h5>
                      {/* Mobile-only Step Counter Badge */}
                      <span className="sm:hidden inline-block w-max small1 text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 ">
                        {step.timeframe}
                      </span>
                    </div>

                    <p className="text-[var(--text-2)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Academic Calendar Section placeholder */}
          <div
            id="academic-calendar"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">Academic Calendar</h2>
            <p className="text-[var(--text-2)]">
              Our postgraduate semester operational maps follow a strict
              research-oriented timeline. This ensures structured balances
              between studio desk-crits, mid-term laboratory testing iterations,
              and terminal external jury evaluations.
            </p>
            <div className="bg-[var(--secondary-bg)] p-6 rounded-[var(--r-btn)] border border-[var(--card-border)]">
              <p className=" text-[var(--text-2)] mb-0">
                The comprehensive schedule for the current session is
                distributed directly to scholars at the start of each semester,
                outlining exact abstract paper submission schedules, guest
                lecture matrices, and formal thesis presentation timelines.
              </p>
            </div>
          </div>

          {/* 8. Frequently Asked Questions Section */}

          <div id="faq" className="scroll-mt-8 space-y-4 pt-4 ">
            <FAQSection />
          </div>

          {/* <div
            id="faq"
            className="scroll-mt-8 space-y-4 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              {" "}
              Frequently Asked Questions
            </h2>

            <div className="border-t border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = index === 0;
                return (
                  <div
                    key={index}
                    data-faq-item
                    className="border-b border-gray-200"
                  >
                    <button className="w-full flex items-center justify-between py-6 text-left">
                      <p className="text-[var(--text-1)]">{faq.question}</p>
                      <span
                        className={`faq-plus-span w-8 h-8 rounded-(--r-lg) border border-(--text-1) flex items-center justify-center transition-all duration-300 text-(--text-1) ${
                          isOpen
                            ? "bg-[var(--primary)] text-white rotate-45 border-(--primary)"
                            : "bg-transparent"
                        }`}
                      >
                        <FaPlus size={12} />
                      </span>
                    </button>

                    <div
                      className={`faq-body overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[200px] pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-[var(--text-1)]">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
