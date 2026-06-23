"use client";

import { useState } from "react";
import { FaPlus, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const faqs = [
    {
        question: "What programs are offered at DY Patil School of Architecture?",
        answer:
            "DY Patil School of Architecture offers undergraduate and postgraduate programs in Architecture, designed to develop creative thinking, technical expertise, and professional skills required in the architecture and design industry.",
    },
    {
        question: "What is the eligibility criteria for admission to the Architecture program?",
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
        question: "Does the institute have industry tie-ups for internships and placements?",
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

export default function FAQAndCounsellor() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-16">
            <div className="max-w-[1230px] mx-auto px-6 lg:px-8">
                
                {/* FAQ Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[var(--text-1)]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[var(--text-2)] max-w-2xl mx-auto mt-3">
                        Everything you need to know before applying.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between py-6 text-left"
                            >
                                <p className="text-[var(--text-1)]">{faq.question}</p>
                                <span
                                    className={`w-8 h-8 rounded-full border border-black flex items-center justify-center transition-all duration-300 text-black ${
                                        openIndex === index
                                            ? "bg-[var(--primary)] text-white rotate-45 border-[var(--primary)]"
                                            : "bg-transparent"
                                    }`}
                                >
                                    <FaPlus size={12} />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-[200px] pb-6" : "max-h-0"
                                }`}
                            >
                                <p className="text-[var(--text-1)]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Counsellor CTA */}
                <div className="mt-16 max-w-[1000px] mx-auto">
                    <div className="bg-[#403F96] rounded-[var(--r-lg-btn)] p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
                        <div className="max-w-2xl">
                            <h2>Talk to Our Career Counsellor</h2>
                            <p className="mt-3 text-white/90">
                                Have questions about admissions, eligibility, curriculum,
                                scholarships, or career opportunities? Our expert counsellors
                                are here to guide you.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
                            <a
                                href="tel:+919225088657"
                                className="bg-white text-[#2d2f7f] font-bold px-6 py-3 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all w-full sm:w-auto"
                            >
                                <FaPhoneAlt />
                                +919225088657
                            </a>
                            <a
                                href="mailto:info@dyparch.com"
                                className="flex text-white items-center gap-2 hover:underline px-2 py-1"
                            >
                                <FaEnvelope size={14} />
                                info@dyparch.com
                            </a>
                        </div>

                        <div className="absolute -right-24 -top-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}