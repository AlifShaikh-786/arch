import React from "react";

export default function WhyChooseBArch2() {
  const pillars = [
    {
      num: "01",
      title: "Accredited Global Curriculum",
      description:
        "Our syllabus bridges council standards with international practices, facilitating direct compliance path eligibility for global architectural licenses and structural master practices.",
    },
    {
      num: "02",
      title: "Advanced Fabrication Labs",
      description:
        "Step away from traditional drafting tables. Access high-end computational tools including robotic routing arms, 3D printing farms, and virtual reality design spaces.",
    },
    {
      num: "03",
      title: "Elite Architecture Juries",
      description:
        "Defend your terminal design studio projects before an external academic panel composed exclusively of practicing principal architects and municipal city planners.",
    },
    {
      num: "04",
      title: "Live Sustainable Studio Hubs",
      description:
        "Engage directly with real-world spatial challenges. Students analyze true environmental parameters, micro-climate data, and localized material mapping within deep ecological design frameworks.",
    },
    {
      num: "05",
      title: "Parametric Workflow Mastery",
      description:
        "Develop fluency in modern architectural pipelines. Learn to build algorithmic design scripts, complex computational geometries, and physics-driven environmental simulations.",
    },
    {
      num: "06",
      title: "Industry Immersive Internships",
      description:
        "Transition seamlessly into professional ecosystems through embedded training phases inside leading global design practices, construction management nodes, and urban master studios.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-5 bg-[var(--background)] text-[var(--text-1)]">
      {/* SECTION WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 py-6 lg:py-6">
        {/* ASYMMETRICAL INTRO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8   mb-9 items-end">
          <div className="lg:text-center flex items-center flex-col   justify-center w-7xl mx-auto">
            <h1 className="mb-6">
              Why Choose <span className="text-(--primary)  ">B.Arch</span> From
              Us
            </h1>
            <p className="text-(--text-2) text-center w-2xl">
              We go beyond theory, immersing students in a hands-on, tech-driven
              ecosystem where digital innovation meets real-world impact.
            </p>
          </div>
          {/* <div className="lg:col-span-5">
            <p className="text-[var(--text-2)]">
              We separate ourselves by treating architecture as a fluid
              technology, rather than static drawings. Students build, simulate, 
              and present real-world infrastructure options throughout their
              complete baseline studio lifecycle.
            </p>
          </div> */}
        </div>

        {/* THREE COLUMN VALUE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-4 rounded-[var(--r-lg-btn)] flex flex-col justify-between"
            >
              <div>
                <span className="small1  text-[var(--primary)] bg-white border border-[var(--border-color)] px-3 py-1 rounded-[var(--s-btn)] block w-fit mb-8">
                  Pillar / {item.num}
                </span>
                <h5 className="mb-4">{item.title}</h5>
                <p className="text-[var(--text-2)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM METRIC SUMMARY BANNER */}
        <div className="bg-[var(--secondary-bg)] mt-18 border border-[var(--card-border)] rounded-[var(--r-lg-btn)] p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-[var(--primary)] mb-1">100%</h2>
            <p className="text-[var(--text-2)] small1">
              Studio-Based Practice Delivery
            </p>
          </div>
          <div className="border-t md:border-t-0 md:border-x border-[var(--border-color)] pt-6 md:pt-0 md:px-8">
            <h2 className="text-[var(--primary)] mb-1">20+</h2>
            <p className="text-[var(--text-2)] small1">
              International Visiting Jury Members
            </p>
          </div>
          <div className="border-t md:border-t-0 pt-6 md:pt-0">
            <h2 className="text-[var(--primary)] mb-1">05 Labs</h2>
            <p className="text-[var(--text-2)] small1">
              Dedicated Material & Computational Infrastructure
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
