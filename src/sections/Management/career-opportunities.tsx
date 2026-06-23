import React from "react";

export default function CareerOpportunities2() {
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

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-1)] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* PAGE HEADER */}
        <div className="border-b border-[var(--border-color)] justify-center pb-4 mb-8 flex flex-col">
          <h1 className="text-center mb-4">
            Career <span className="text-(--primary)">Opportunities</span>
          </h1>
          <p className="text-center">
            Architecture graduates are needed in multiple sectors
          </p>
        </div>

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
  );
}
