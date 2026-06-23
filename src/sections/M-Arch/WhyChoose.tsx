import WhyChooseItem from "../../components/WhyChooseItem";

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

export default function WhyChooseAccordion() {
  return (
    <>
      <h2 className="text-[var(--text-1)]">
        {" "}
        Why Choose B.Arch at Our College?
      </h2>
      <p className="text-[var(--text-2)]">
        We provide a rigorous ecosystem engineered to transform aspiring
        creative minds into highly technical, globally competent architectural
        innovators.
      </p>

      <div className="flex flex-col gap-2">
        {pillars.map((item, index) => (
          <WhyChooseItem
            key={index}
            index={index}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </>
  );
}
