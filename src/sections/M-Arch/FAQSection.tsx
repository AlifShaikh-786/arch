import FAQSectionItem from "../../components/FAQSectionItem";

const faqs = [
  {
    question:
      "What specific M.Arch specializations are available at DY Patil School of Architecture?",
    answer:
      "We offer advanced Master of Architecture programs focusing on Environmental Architecture, Urban Design, and Digital Technologies. These pathways prepare students to lead complex research tracks, perform high-end environmental simulations, and manage large-scale urban interventions.",
  },
  {
    question:
      "What is the eligibility criteria for entering the M.Arch program?",
    answer:
      "Candidates must hold a Bachelor of Architecture (B.Arch) degree from an institution approved by the Council of Architecture (COA), with a minimum aggregate score of 50% (45% for reserved categories). Additionally, candidates must possess a valid MAH-M.Arch-CET score or a valid GATE score.",
  },
  {
    question:
      "What is the duration and structural breakdown of the M.Arch course?",
    answer:
      "The Master of Architecture program is a 2-year full-time postgraduate degree split into 4 semesters. It includes advanced design research studios, expert elective configurations, digital simulation labs, and a mandatory terminal thesis module across the final year.",
  },
  {
    question:
      "Are working professionals allowed to join this course part-time?",
    answer:
      "No, this is a strict full-time professional regular residency degree program approved by the COA. However, our studio schedules are organized systematically to maximize hands-on laboratory research, site planning modules, and advanced digital design certifications.",
  },
  {
    question: "What career pathways open up after an M.Arch degree?",
    answer:
      "Graduates secure senior leadership roles such as Principal Urban Designers, Sustainability Architects, Project Management Consultants (PMC), Environmental Analysts, or pursue tenure-track academic positions and advanced doctoral research (Ph.D.) paths globally.",
  },
  {
    question: "What modern software systems do M.Arch students use?",
    answer:
      "Postgraduate students operate premium simulation platforms including Ladybug, Honeybee (for microclimate analysis), Rhinoceros 3D, Grasshopper (parametric modeling), Revit (BIM Level 2 workflows), and geographic information systems (GIS).",
  },
  {
    question: "Is independent academic research or publication required?",
    answer:
      "Yes, all postgraduate scholars are strongly encouraged and mentored to publish their laboratory studio findings, environmental impact conclusions, or urban design frameworks in indexed academic journals (Scopus/UGC Care) prior to their final thesis defense.",
  },
];

export default function FAQSection() {
  return (
    <div className="">
      <h2 className="text-[var(--text-1)] mb-6 ">
        {" "}
        Frequently Asked Questions
      </h2>
      <p className="text-[var(--text-1)] max-w-2xl   mb-6">
        Everything you need to know before applying.
      </p>
      <div className="flex flex-col gap-2">
        {faqs.map((item, index) => (
          <FAQSectionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
