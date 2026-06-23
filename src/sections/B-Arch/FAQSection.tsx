import FAQSectionItem from "../../components/FAQSectionItem";

const faqs = [
  {
    question: "What programs are offered at DY Patil School of Architecture?",
    answer:
      "DY Patil School of Architecture offers undergraduate and postgraduate programs in Architecture, designed to develop creative thinking, technical expertise, and professional skills required in the architecture and design industry.",
  },
  {
    question:
      "What is the eligibility criteria for admission to the Architecture program?",
    answer:
      "To be eligible for the Bachelor of Architecture (B.Arch.) program, candidates must have completed 10+2 (or equivalent) with mathematics as a subject. Additionally, candidates must appear for the NATA (National Aptitude Test in Architecture) and secure the minimum qualifying score as prescribed by the Council of Architecture.",
  },
  {
    question: "What is the duration of the B.Arch program ?",
    answer:
      "The Bachelor of Architecture (B.Arch) program is a 5-year full-time professional degree course divided into 10 semesters, including practical training and design studios.",
  },
  {
    question: "What are the eligibility criteria for admission to B.Arch?",
    answer:
      "Candidates must have completed 10+2 with Mathematics as a compulsory subject and meet the minimum marks criteria prescribed by the Council of Architecture and admission authorities. A valid NATA score is also required.",
  },
  {
    question: "How are the faculty members at DYPSA?",
    answer:
      "Our faculty comprises highly qualified academicians and industry professionals with extensive experience in architecture, design, urban planning, and sustainability. They are dedicated to mentoring students and fostering innovation.",
  },
  {
    question: "What are the career opportunities after completing B.Arch?",
    answer:
      "Graduates can work as architects, interior designers, urban planners, landscape architects, construction managers, heritage consultants, or pursue higher education in India or abroad. The demand for skilled architects is growing across various sectors.",
  },
  {
    question:
      "Does the institute have industry tie-ups for internships and placements?",
    answer:
      "Yes, we have strong ties with leading architectural firms, construction companies, real estate developers, and design studios. These collaborations provide students with valuable internship opportunities and enhance their placement prospects.",
  },
  {
    question: "What software and technology do students learn?",
    answer:
      "Students are trained in industry-standard software such as AutoCAD, Revit, SketchUp, V-Ray, Adobe Creative Suite, and BIM tools. Practical exposure to modern construction technologies and sustainable design practices is also emphasized.",
  },
  {
    question: "Do you offer hostel facilities for students?",
    answer:
      "Yes, comfortable and secure hostel facilities are available for both boys and girls with amenities like Wi-Fi, mess facilities, security, and recreational areas to support a conducive learning environment.",
  },
  {
    question: "What are the internship opportunities for students?",
    answer:
      "Internships are a mandatory part of our curriculum. Students work with architectural firms, construction sites, and design studios to gain hands-on experience in real-world projects during their program.",
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
