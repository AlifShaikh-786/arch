import React from "react";

export default function AdmissionProcessTimeline() {
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
    <section className="py-20 px-5  bg-[var(--primary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header Wrapper */}
          <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
            <h2 className="text-[var(--text-1)] ">Admission Process</h2>
            <p className="mt-3  text-[var(--text-2)] max-w-2xl mx-auto">
              A highly structured, sequential pathway designed to evaluate and
              verify your qualifications for entry into our flagship
              professional undergraduate design studio batch.
            </p>
          </div>

          {/* Structural Progressive Timeline Container */}
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
      </div>
    </section>
  );
}
