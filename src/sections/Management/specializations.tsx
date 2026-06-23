import React from "react";

export default function Specializations() {
  const specializations = [
    {
      title: "Sustainable Architecture",
      description:
        "Focus on net-zero building models, renewable energy integrations, and eco-conscious construction materials.",
      code: "01",
    },
    {
      title: "Urban Design",
      description:
        "Scale your designs up to manage massive public infrastructures, transit networks, and micro-climates.",
      code: "02",
    },
    {
      title: "Computational Design",
      description:
        "Master parametric modeling workflows, custom coding algorithms, and structural digital fabrication.",
      code: "03",
    },
    {
      title: "Landscape Architecture",
      description:
        "Integrate regional ecological systems, natural water topographies, and native urban forestry layouts.",
      code: "04",
    },
    {
      title: "Sustainable Architecture",
      description:
        "Focus on net-zero building models, renewable energy integrations, and eco-conscious construction materials.",
      code: "05",
    },
    {
      title: "Urban Design",
      description:
        "Scale your designs up to manage massive public infrastructures, transit networks, and micro-climates.",
      code: "06",
    },
    {
      title: "Landscape Architecture",
      description:
        "Integrate regional ecological systems, natural water topographies, and native urban forestry layouts.",
      code: "07",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-5 bg-[var(--background)] ">
      <div className="max-w-7xl px-5 mx-auto">
        {/* PAGE HEADER */}
        <header className="border-b border-[var(--border-color)] pb-8 ">
          <h1>Specialization Offered</h1>
        </header>

        {/* LISTING CONTAINER */}
        <div className="space-y-6">
          {specializations.map((spec) => (
            <div
              key={spec.code}
              className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] flex flex-row sm:flex-row sm:items-start  gap-10"
            >
              <div>
                <span className="small1  text-[var(--primary)] bg-[var(--background)] px-2.5 py-1 rounded-[var(--s-btn)] border border-[var(--border-color)]">
                  {spec.code}
                </span>
              </div>
              <div className="space-y-2 max-w-4xl">
                <h5>{spec.title}</h5>
                <p className="text-[var(--text-2)]">{spec.description}</p>
              </div>

              {/* <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 border-[var(--border-color)] pt-4 sm:pt-0">
                <span className="small1  text-[var(--text-2)] bg-[var(--background)] px-2.5 py-1 rounded-[var(--s-btn)] border border-[var(--border-color)]">
                  {spec.code}
                </span>
                <a
                  href="#"
                  className="btn-sm text-[var(--primary)] hover:text-[var(--primary-hover)] sm:mt-4 font-semibold"
                >
                  Track Details →
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
