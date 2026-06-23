import WhyChooseItem from "../../components/WhyChooseItem";

const pillars = [
  {
    title: "Experienced Faculty",
    desc: "Learn from practicing architects, urban planners, and global researchers who bridge theoretical spatial concepts with contemporary studio practices.",
  },
  {
    title: "Modern Design Studios",
    desc: "Work in large, high-ceiling collaborative studios equipped with advanced draft systems, ergonomic layouts, and specialized spatial modeling zones.",
  },
  {
    title: "Industry Collaborations",
    desc: "Engage with prominent design firms, real estate consortiums, and technology teams to solve live architectural challenges during your studies.",
  },
  {
    title: "Site Visits",
    desc: "Gain immediate contextual experience through structured site analyses, heritage studies, real-time construction tracking, and structural field mapping.",
  },
  {
    title: "Workshops & Seminars",
    desc: "Participate in specialized modules covering digital fabrication, parametric design modeling, material research testing, and expert masterclasses.",
  },
  {
    title: "Sustainable Design Focus",
    desc: "Master climate-responsive layout methodologies, green building certification standards (IGBC/GRIHA), and renewable energy resource integrations.",
  },
  {
    title: "Internship Opportunities",
    desc: "Access an elite practical training network across leading tier-1 architecture and construction firms during your critical final semesters.",
  },
  {
    title: "Strong Placement Support",
    desc: "Benefit from structured professional portfolio reviews, technical interview simulations, and exclusive placement drives with top global employers.",
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
