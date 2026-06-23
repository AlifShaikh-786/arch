import React from "react";

export default function PlacementStatistics() {
  const stats = [
    {
      metric: "95%",
      label: "Placement Assistance",
      desc: "Dedicated institutional career transition pathways linking qualified studio graduates with premier corporate real estate practices.",
    },
    {
      metric: "200+",
      label: "Recruiters",
      desc: "An expansive network of tier-1 design groups, infrastructure development consortia, and international construction engineering partners.",
    },
    {
      metric: "500+",
      label: "Alumni",
      desc: "A powerful global ecosystem of professional architects, strategic project managers, and urban designers holding elite industry positions.",
    },
    {
      metric: "50+",
      label: "Industry Partners",
      desc: "Active institutional MoUs facilitating specialized masterclass sequences, technical material certifications, and internship channels.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-[var(--primary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title Narrative Wrapper */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[var(--text-1)] ">Placement Statistics</h2>
          <p className="mt-3 font-light text-[var(--text-2)]">
            Our historical career metrics outline a sustainable, high-performing
            educational model that routinely matches student cohorts with elite
            global infrastructure employers.
          </p>
        </div>

        {/* Numeric Metric Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] flex flex-col justify-between transition-all duration-300 hover:shadow-sm"
            >
              <div className="items-center  text-center flex flex-col justify-center">
                {/* Structural Vector Indicator Hook */}
                <span className="block mb-4  text-[var(--primary)]">
                  0{index + 1}
                </span>

                {/* Quantitative Value Output */}
                <div
                  className="text-[var(--primary)]  mb-8 mt-2"
                  style={{ fontSize: "var(--h1-size)" }}
                >
                  {item.metric}
                </div>

                {/* Metric Title Designation Label */}
                <h5 className="text-[var(--text-1)]  mb-3">{item.label}</h5>
              </div>

              {/* Architectural Technical Alignment Marker */}
              <div className="w-full h-[1px] bg-[var(--border-color)] mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
