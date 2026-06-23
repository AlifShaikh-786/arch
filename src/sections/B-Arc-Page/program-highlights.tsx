import React from "react";

export default function ProgramHighlights() {
  const highlights = [
    {
      title: "5-Year Professional Degree",
      desc: "Comprehensive ten-semester learning structure carefully engineered to produce certified, elite global technocrats.",
    },
    {
      title: "NAAC Accredited Institution",
      desc: "A verified index of high-end quality, academic rigor, robust core infrastructure, and elite institutional standards.",
    },
    {
      title: "AICTE / COA Approved",
      desc: "Full legal statutory compliance alignment strictly matching Council of Architecture regulations and guidelines.",
    },
    {
      title: "Industry Projects",
      desc: "Live engagement tracks mapping complex technical master-planning challenges with premium developer syndicates.",
    },
    {
      title: "Live Design Studios",
      desc: "Dynamic layout spaces running immersive visual graphics critique rounds led by veteran design experts.",
    },
    {
      title: "CAD & BIM Training",
      desc: "Hands-on engineering skill sets building absolute proficiency across standard advanced digital building modeling packages.",
    },
    {
      title: "Research Opportunities",
      desc: "Deep systematic exploration modules tracing vernacular spatial history, smart systems, and environmental material sciences.",
    },
    {
      title: "Portfolio Development",
      desc: "Dedicated personal framework coaching focused explicitly on designing a high-end corporate career portfolio presentation.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--primary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="small1 text-[var(--primary)] uppercase font-semibold block mb-2">
            Academic Milestones
          </span>
          <h2 className="text-[var(--text-1)]">Program Highlights</h2>
          <p className="mt-3 font-light text-[var(--text-2)]">
            Explore the core academic pillars and systemic technical
            configurations that define our signature B.Arch layout experience.
          </p>
        </div>

        {/* Highlights Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] flex flex-col justify-between transition-all duration-300 group hover:shadow-sm hover:border-[var(--primary)]/30"
            >
              <div>
                {/* Structural Graphic Block */}
                <div className="w-10 h-10 rounded-[var(--s-btn)] bg-white border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--primary)] font-mono text-xs font-bold transition-colors group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-transparent">
                  0{index + 1}
                </div>

                <h5 className="text-[var(--text-1)] font-bold mb-2">
                  {item.title}
                </h5>

                <p className="small1 text-[var(--text-2)] font-light">
                  {item.desc}
                </p>
              </div>

              {/* Technical Grid Divider Line */}
              <div className="w-full h-[1px] bg-[var(--border-color)] mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
