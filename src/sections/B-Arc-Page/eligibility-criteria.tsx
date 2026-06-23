import React from "react";

export default function EligibilityCriteria() {
  const criteriaList = [
    {
      title: "10+2 Educational Framework with PCM",
      desc: "Applicants must have successfully passed the Higher Secondary Certificate (HSC) or equivalent 10+2 academic examination layout with compulsory credits completed across Physics, Chemistry, and Mathematics (PCM).",
    },
    {
      title: "Minimum Required Percentage Threshold",
      desc: "Secured an unweighted aggregate score of at least 50% marks in the 10+2 level examination, as well as 50% marks aggregate across the core PCM subject grouping (with appropriate statutory relaxations applicable for reserved categories).",
    },
    {
      title: "NATA / JEE Paper 2 Qualification Metric",
      desc: "Possess a valid, non-zero scorecard in the National Aptitude Test in Architecture (NATA) conducted by the Council of Architecture, or a qualified clear rank index in the JEE Main Paper II examination.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--secondary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="small1 text-[var(--primary)] uppercase font-semibold block mb-2">
            Compliance Requirements
          </span>
          <h2 className="text-[var(--text-1)] font-bold">
            Eligibility Criteria
          </h2>
          <p className="mt-3 font-light text-[var(--text-2)]">
            Before initiating your digital registration, please review the
            mandatory statutory qualifications mandated by the Council of
            Architecture (CoA) and the university parameters.
          </p>
        </div>

        {/* Structural Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sequential Core Criteria Track */}
          <div className="lg:col-span-7 space-y-8">
            {criteriaList.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 group">
                {/* Minimalist Grid Index Node */}
                <div className="w-8 h-8 rounded-[var(--s-btn)] bg-[var(--primary-bg)] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 text-[var(--primary)] font-mono text-xs font-bold">
                  0{index + 1}
                </div>

                {/* Description Narrative Unit */}
                <div className="space-y-1.5">
                  <h5 className="text-[var(--text-1)] font-bold transition-colors group-hover:text-[var(--primary)]">
                    {item.title}
                  </h5>
                  <p className="small1 text-[var(--text-2)] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Institutional Disclaimer & Verification Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--primary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] shadow-sm space-y-4">
              <h5 className="text-[var(--text-1)] font-bold flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Important Note for Applicants
              </h5>

              <p className="small1 text-[var(--text-2)] font-light">
                Candidates completing an equivalent 10+3 Diploma framework
                recognized by the Central/State Governments with Mathematics as
                a compulsory course parameter are also fully eligible to submit
                scores, provided an aggregate baseline marker of 50% is
                maintained.
              </p>

              <div className="w-full h-[1px] bg-[var(--border-color)] my-2" />

              <p className="small1 text-[var(--text-2)] font-light">
                All uploaded credentials, certificates, and scorecard parameters
                undergo immediate technical screening validation during the
                administrative onboarding phase. Discrepancies will invalidate
                rankings instantly.
              </p>

              {/* DTE Verification Code Footer Indicator */}
              <div className="pt-2 flex items-center justify-between font-mono text-[9px] text-[var(--text-2)] uppercase opacity-60">
                <span>COUNCIL OF ARCHITECTURE RULES</span>
                <span>CODE COMPLIANCE: MH-12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
