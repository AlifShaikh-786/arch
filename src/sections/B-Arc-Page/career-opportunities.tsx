import React from "react";

export default function CareerOpportunities() {
  const pathways = [
    {
      title: "Architect",
      desc: "Lead private practices, manage building approvals, and drive spatial programming execution for commercial, residential, and institutional scales.",
      num: "01",
    },
    {
      title: "Urban Planner",
      desc: "Formulate regional master plans, infrastructure frameworks, policy guidelines, and smart-city zoning blueprints for municipal development authorities.",
      num: "02",
    },
    {
      title: "Interior Designer",
      desc: "Transform indoor spatial micro-environments by manipulating lighting aesthetics, bespoke furniture systems, ergonomics, and sensory material acoustics.",
      num: "03",
    },
    {
      title: "Landscape Architect",
      desc: "Design macro-scale open ecosystems, sustainable parks, urban botanical sanctuaries, and site layouts focused on ecological restoration projects.",
      num: "04",
    },
    {
      title: "Project Manager",
      desc: "Oversee operational parameters at scale, optimizing financial layouts, project resource logistics, and supply timelines (CPM/PERT models).",
      num: "05",
    },
    {
      title: "BIM Specialist",
      desc: "Architect integrated, cloud-collaborative Building Information Modeling parameters across large multidisciplinary engineering syndicates.",
      num: "06",
    },
    {
      title: "Architectural Visualizer",
      desc: "Produce cinematic hyper-photorealistic 3D visual graphics, walking sequences, animations, and immersive VR spatial layout experiences.",
      num: "07",
    },
    {
      title: "Design Consultant",
      desc: "Provide specialized real-estate advisory parameters focusing explicitly on building energy modeling, acoustics audits, and global regulatory codes.",
      num: "08",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--primary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header Layout */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-[var(--text-1)] ">Career Paths</h2>
          <p className="mt-3 text-[var(--text-2)] ">
            A B.Arch degree acts as a high-value canvas, providing direct,
            accredited channels into advanced infrastructure corporate markets
            and professional fields globally.
          </p>
        </div>

        {/* Pure Vertical Stack Layout */}
        <div className="max-w-4xl mx-auto division-y divide-[var(--border-color)] space-y-8">
          {pathways.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col pt-6 first:pt-0 transition-transform duration-300"
            >
              {/* Number and Title Inline */}
              <div className="flex items-center gap-5">
                <span className="   text-[var(--text-2)] opacity-40 transition-all duration-300 group-hover:text-[var(--primary)] group-hover:opacity-100 min-w-[1.5rem]">
                  {item.num}
                </span>
                <h4 className="text-[var(--text-1)]  transition-all duration-300 group-hover:text-[var(--primary)] group-hover:translate-x-1.5">
                  {item.title}
                </h4>
              </div>

              {/* Description precisely aligned under the title start position */}
              <div className="pl-[2.75rem] mt-2">
                <p className="small1 text-[var(--text-2)]  ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
