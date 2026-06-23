import SidebarNavigation from "@/src/components/SidebarNavigation";
import WhyChooseAccordion from "@/src/sections/B-Arch/WhyChoose";
import FAQSection from "@/src/sections/B-Arch/FAQSection";

import HeroSection from "@/src/components/Hero-Section";

export default function page() {
  const menuItems = [
    { id: "about-programe", label: "About Programe" },
    { id: "syllabus", label: "Syllabus" },
    { id: "internship", label: "Practical Training & Experience" },
    { id: "why-choose", label: "Why Choose" },
    { id: "b-arch-co-po", label: "B.Arch CO PO Outcomes" },
    { id: "career-opportunities", label: "Career Opportunities" },
    { id: "admission-process", label: "Admission Process" },
    { id: "academic-calendar", label: "Academic Calendar" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];
  const data = [
    {
      title: "Bachelor of Architecture in Pune",
      description:
        "Shape the future through creative design and sustainable architecture. Build innovative spaces that inspire generations.",
    },
  ];
  const careers = [
    {
      role: "Architectural Designer",
      sector: "Design & Practice",
      scope:
        "Lead conceptual design, spatial layouts, and construction blueprint workflows for residential and commercial structures.",
    },
    {
      role: "Urban Planner",
      sector: "Infrastructure",
      scope:
        "Design city master plans, public transit layouts, and high-density neighborhood frameworks using mapping data.",
    },
    {
      role: "Computational Specialist",
      sector: "Technology",
      scope:
        "Build parametric structural models and generative design scripts inside advanced algorithmic pipelines.",
    },
    {
      role: "Sustainability Consultant",
      sector: "Green Architecture",
      scope:
        "Analyze structural energy metrics and guide projects toward carbon-neutral or net-zero global certifications.",
    },
    {
      role: "Landscape Architect",
      sector: "Environmental",
      scope:
        "Integrate built elements with regional topographies, natural water channels, and public parks.",
    },
    {
      role: "BIM Coordinator",
      sector: "Management",
      scope:
        "Supervise digital data streams, manage 3D structural models, and detect architectural element conflicts.",
    },
    {
      role: "Interior Architect",
      sector: "Spatial Design",
      scope:
        "Optimize indoor environments, detailing material textures, spatial ergonomics, acoustics, and structural custom fittings.",
    },
    {
      role: "Architectural Journalist",
      sector: "Media & Research",
      scope:
        "Analyze urban trends, review critical theory, and publish research across leading architectural journals and media platforms.",
    },
    {
      role: "Project Manager",
      sector: "Real Estate & Execution",
      scope:
        "Coordinate site resources, optimize budgets, and streamline timelines from initial groundbreakings to final key handovers.",
    },
    {
      role: "Restoration Architect",
      sector: "Conservation",
      scope:
        "Preserve historical heritage sites, upgrading old structures using modern building codes without damaging historic values.",
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

  return (
    <main className=" ">
      <div>
        <HeroSection title={data[0].title} description={data[0].description} />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-[1440px] mx-auto  ">
        {/* Left Side Navigation Sidebar */}
        <div className="sticky top-20 ">
          <SidebarNavigation items={menuItems} />
        </div>

        {/* Right Side Sections Content Container */}
        <section className="flex-1 w-full space-y-20 py-16 mt-4">
          {/* 1. B.Arch Programme Section */}
          {/* 1. B.Arch Programme Section */}
          <div id="about-programe" className="scroll-mt-8 space-y-8 px-5">
            {/* <div className="border-b-2 border-black pb-2 inline-block">
              <h2 className="text-[var(--text-1)] m-0">
                Bachelor of Architecture (B.Arch) in Pune
              </h2>
            </div> */}

            {/* Program Introduction */}
            <div className="space-y-6">
              <h2 className="text-[var(--text-1)] border-b border-[var(--border-color)] ">
                About Programe
              </h2>
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
                <h4 className="block   text-[var(--primary)]">5 Years</h4>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Course Duration
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">10 Sem</h4>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Total Semesters
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center">
                <h4 className="block   text-[var(--primary)]">COA</h4>
                <span className="small1 text-[var(--text-2)]  uppercase">
                  Govt. Approved
                </span>
              </div>
              <div className="bg-(--secondary-bg) p-4 rounded-(--r-btn) border border-[var(--card-border)] text-center h-[94px]">
                <h4 className="block   text-[var(--primary)]">1 Semester</h4>
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
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
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
            className="scroll-mt-8 space-y-6  px-5 pt-4 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)] mb-6">
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

          {/* 5. Why Choose Us */}

          <div
            id="why-choose"
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
          >
            <WhyChooseAccordion />
          </div>
          {/* <div
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
                     
                     <button
                       onClick={() => setOpenIndex(isOpen ? -1 : index)}
                       className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                     >
                       <div className="flex items-center gap-4">
                         <span className="text-(--primary)">0{index + 1}</span>
                         <h6>{item.title}</h6>
                       </div>
 
                      
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
           </div> */}

          {/* 7. B.Arch CO PO Outcomes Section */}
          <div
            id="b-arch-co-po"
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
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

          {/* Career Opportunities & Professional Roles Section */}
          <div
            id="career-opportunities"
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)]">
              Career Opportunities & Professional Roles
            </h2>
            <p className="text-[var(--text-2)]">
              Completing a COA-approved B.Arch degree opens up a wide range of
              career paths in private design firms, infrastructure corporations,
              government bodies, and real estate development consortiums across
              India and globally.
            </p>

            <div className="min-h-screen bg-[var(--background)] text-[var(--text-1)] px-6 ">
              <div className="">
                {/* PAGE HEADER */}
                {/* <div className="border-b border-[var(--border-color)] justify-center pb-4 mb-8 flex flex-col">
          <h1 className="text-center mb-4"> 
            Career <span className="text-(--primary)">Opportunities</span>
          </h1>
          <p className="text-center">
            Architecture graduates are needed in multiple sectors
          </p>
        </div> */}

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
          </div>
          {/* 9. Admission Process */}
          <div
            id="admission-process"
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
          >
            <h2 className="text-[var(--text-1)] ">Admission Process</h2>
            <p className="  text-[var(--text-2)] ">
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
                  <div className="  absolute -left-[9px] top-1.5 w-4 h-4 rounded-(--r-lg) bg-[var(--secondary-bg)] border-2 border-[var(--border-color)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-(--r-lg) bg-[var(--primary)] transition-colors group-hover:bg-white" />
                  </div>

                  {/* Main Information Step Content Card Grid */}
                  <div className="bg-[var(--secondary-bg)] w-full  border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[var(--primary)]/20 z-0">
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
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
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
            className="scroll-mt-8 space-y-6 pt-4 px-5 border-t border-[var(--border-color)]"
          >
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
                       className={`w-8 h-8 rounded-(--r-lg) border border-[var(--text-1)] flex items-center justify-center transition-all duration-300 text-[var(--text-1)] ${
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
           </div> */}
        </section>
      </div>
    </main>
  );
}

{
  /* <HeroSection2 />
      <ProgramOverview />
      <CurriculumStructure2 />
      <Specializations />
      <WhyChooseBArch2 />
      <CareerOpportunities2 />
      <AdmissionProcessTimeline />
      <FAQAndCounsellor /> */
}

{
  /* <HeroSection />

      <ProgramOverview />

      <CurriculumStructure />

      <WhyChooseBArch />

      <AdmissionProcessTimeline />

      <FAQAndCounsellor /> */
}

{
  /* <div className="">
        <BArchDepartmentPage />
      </div> */
}

{
  /* <ProgramHighlights /> */
}
{
  /* <StudentPlacements /> */
}

{
  /* <PlacementStatistics /> */
}
{
  /* <HiringPartners /> */
}
{
  /* <FacultySection /> */
}
{
  /* <ArchitectureLabsAndFacilities /> */
}
{
  /* <CareerOpportunities /> */
}
{
  /* <EligibilityCriteria /> */
}
