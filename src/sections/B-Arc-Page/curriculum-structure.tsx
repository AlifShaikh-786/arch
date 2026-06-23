"use client";

import React, { useState } from "react";

interface SemesterData {
  title: string;
  courses: string[];
}

interface YearData {
  id: number;
  label: string;
  semesters: SemesterData[];
}

export default function CurriculumStructure() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1);

  const toggleYear = (id: number) => {
    setExpandedYear(expandedYear === id ? null : id);
  };

  const curriculumData: YearData[] = [
    {
      id: 1,
      label: "YEAR 1",
      semesters: [
        {
          title: "Semester 1",
          courses: [
            "Architectural Design Studio I",
            "Theory of Structures I",
            "Building Technology & Materials I",
            "Architectural Drawing & Graphics I",
            "History of Architecture I",
            "Climatology & Environmental Sciences",
          ],
        },
        {
          title: "Semester 2",
          courses: [
            "Architectural Design Studio II",
            "Theory of Structures II",
            "Building Technology & Materials II",
            "Architectural Drawing & Graphics II",
            "History of Architecture II",
            "Model Making & Workshop Practices",
          ],
        },
      ],
    },
    {
      id: 2,
      label: "YEAR 2",
      semesters: [
        {
          title: "Semester 3",
          courses: [
            "Architectural Design Studio III",
            "Theory of Structures III",
            "Building Services I (Water Supply & Sanitation)",
            "History of Architecture III",
            "Landscape Architecture Foundations",
            "Computer-Aided Design (CAD) Lab",
          ],
        },
        {
          title: "Semester 4",
          courses: [
            "Architectural Design Studio IV",
            "Theory of Structures IV",
            "Building Services II (Electrical & Lighting)",
            "Contemporary Architectural Theories",
            "Surveying & Leveling Studio",
            "Digital Modeling & Spatial Visualization",
          ],
        },
      ],
    },
    {
      id: 3,
      label: "YEAR 3",
      semesters: [
        {
          title: "Semester 5",
          courses: [
            "Working Drawing Studio I",
            "Theory of Structures V",
            "Building Services III (HVAC & Acoustics)",
            "Sustainable & Climate-Responsive Architecture",
            "Urban Sociology & Housing Systems",
            "Building Information Modeling (BIM) Workflow",
          ],
        },
        {
          title: "Semester 6",
          courses: [
            "Architectural Design Studio V",
            "Theory of Structures VI",
            "Advanced Building Materials & Systems",
            "Specifications & Estimation Mapping",
            "Research Methodology Seminar",
            "Parametric Design & Digital Fabrication",
          ],
        },
      ],
    },
    {
      id: 4,
      label: "YEAR 4",
      semesters: [
        {
          title: "Semester 7",
          courses: [
            "Advanced Architectural Design Studio VI",
            "Urban Design & Master Planning Studies",
            "Professional Practice & Statutory Bye-Laws",
            "Project Management & Operations (CPM/PERT)",
            "Elective Area: Interior Design Paradigms",
            "Elective Area: Conservation & Restoration",
          ],
        },
        {
          title: "Semester 8",
          courses: [
            "Professional Practical Training Internship",
            "Off-site Office Framework Evaluation",
            "Field Documentation Report Submission",
            "Site Management Log Analysis",
          ],
        },
      ],
    },
    {
      id: 5,
      label: "YEAR 5",
      semesters: [
        {
          title: "Semester 9",
          courses: [
            "Terminal Studio Thesis Project Phase I",
            "Specialized Architectural Elective Modules",
            "Environmental Impact Assessment (EIA) Layouts",
            "Disaster Management & Structural Resiliency",
          ],
        },
        {
          title: "Semester 10",
          courses: [
            "Terminal Studio Thesis Project Phase II",
            "Final Jury Panel Evaluation Portfolio",
            "Professional Practice Portfolio Review",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-5  bg-[var(--primary-bg)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Column — Perfectly Sticky on Large viewports */}
          <div className="lg:col-span-4  lg:sticky lg:top-24 space-y-4">
            <h2 className="text-[var(--text-1)]">
              Academic{" "}
              <span className="text-[var(--primary)] ">Curriculum</span>
            </h2>
            <p className="text-[var(--text-2)] ">
              A carefully structured 10-semester professional program from
              spatial design fundamentals to cutting-edge specialisations and
              dedicated live industry internships.
            </p>
          </div>

          {/* Right Side Column — Scrollable Area Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {curriculumData.map((year) => {
              const isOpen = expandedYear === year.id;

              return (
                <div
                  key={year.id}
                  className="border border-[var(--card-border)] transition-all duration-300 shadow-sm"
                  style={{ borderRadius: "var(--r-btn)" }}
                >
                  {/* Accordion Trigger Tab Banner */}
                  <button
                    onClick={() => toggleYear(year.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 transition-colors text-left uppercase   cursor-pointer select-none`}
                    style={{
                      backgroundColor: isOpen
                        ? "var(--primary)"
                        : "var(--secondary-bg)",
                      color: isOpen ? "#ffffff" : "var(--text-1)",
                      borderTopLeftRadius: "calc(var(--r-btn) - 1px)",
                      borderTopRightRadius: "calc(var(--r-btn) - 1px)",
                      borderBottomLeftRadius: isOpen
                        ? "0px"
                        : "calc(var(--r-btn) - 1px)",
                      borderBottomRightRadius: isOpen
                        ? "0px"
                        : "calc(var(--r-btn) - 1px)",
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`w-2 h-2 rounded-full ${isOpen ? "bg-white" : "bg-[var(--primary)]"}`}
                      />
                      <span>{year.label}</span>
                    </div>

                    <div
                      className="flex items-center justify-center w-6 h-6 rounded-[var(--r-btn)] border"
                      style={{
                        borderColor: isOpen
                          ? "rgba(255,255,255,0.3)"
                          : "var(--border-color)",
                      }}
                    >
                      {isOpen ? (
                        /* Close Cross Icon */
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        /* Expand Plus Icon */
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  {isOpen && (
                    <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-b-[var(--r-btn)]">
                      {year.semesters.map((semester, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--s-btn)]"
                        >
                          <h4 className="text-[var(--text-1)]  mb-4 pb-2 border-b border-[var(--border-color)]">
                            {semester.title}
                          </h4>
                          <ul className="space-y-2.5">
                            {semester.courses.map((course, cIdx) => (
                              <li
                                key={cIdx}
                                className="small1 text-[var(--text-2)]  flex items-start"
                              >
                                <span className="text-[var(--primary)] mr-2.5 mt-1 opacity-80 text-[10px]">
                                  ●
                                </span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
