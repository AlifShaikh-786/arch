"use client";
import React, { useState } from "react";
export default function ProgramOverview() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form action here
    console.log("Form Submitted Safely:", formData);
  };
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Conceptual Course Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="max-w-3xl ">
              {/* <span
                className="small1 uppercase  block mb-2"
                style={{ color: "var(--primary)" }}
              >
                Course Blueprint
              </span> */}
              <h2 style={{ color: "var(--text-1)" }} className=" ">
                Program Overview
              </h2>
            </div>
            <p className="" style={{ color: "var(--text-1)" }}>
              The Bachelor of Architecture (B.Arch) program develops creative
              thinkers, skilled designers, and future architects through a
              balance of design, technology, sustainability, and practical
              learning.
            </p>

            <p className=" " style={{ color: "var(--text-2)" }}>
              Spanning ten semesters, our curriculum approaches architectural
              education as a holistic discipline. Students explore the synergy
              between human behavior, ecological boundaries, historical
              contexts, and emergent construction technologies. Through
              collaborative studio settings, hands-on physical labs, and digital
              fabrication spaces, we empower the next generation to transform
              visionary spatial designs into structurally sound realities.
            </p>

            <blockquote
              className="p-5 border-l-4  "
              style={{
                borderColor: "var(--primary)",
                backgroundColor: "var(--secondary-bg)",
                color: "var(--text-1)",
              }}
            >
              "Architecture is not just about drawing spaces; it is an active
              exploration of material science, socio-cultural relevance, and
              environmental responsibility."
            </blockquote>
          </div>

          {/* Right Side Enquiry Form */}
          <div className="lg:col-span-5 ">
            <div
              className="bg-white border p-8 shadow-md relative"
              style={{
                borderColor: "var(--card-border)",
                borderRadius: "var(--r-btn)",
              }}
            >
              <div className="mb-6">
                <h4
                  style={{
                    color: "var(--text-1)",
                    fontSize: "var(--h5-size)",
                    lineHeight: "var(--h5-line-height)",
                  }}
                >
                  Get more Information {new Date().getFullYear()}
                </h4>
                <p className="small1 mt-1 " style={{ color: "var(--text-2)" }}>
                  Secure your slot in our flagship design studio batch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="small1 block mb-1  "
                    style={{ color: "var(--text-1)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5  small1 bg-white border outline-none transition-colors "
                    style={{
                      borderColor: "var(--border-color)",
                      borderRadius: "var(--s-btn)",
                      color: "var(--text-1)",
                    }}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-row gap-4">
                  <div>
                    <label
                      className="small1 block mb-1  "
                      style={{ color: "var(--text-1)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5  small1 bg-white border outline-none transition-colors "
                      style={{
                        borderColor: "var(--border-color)",
                        borderRadius: "var(--s-btn)",
                        color: "var(--text-1)",
                      }}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="small1 block mb-1  "
                      style={{ color: "var(--text-1)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5  small1 bg-white border outline-none transition-colors"
                      style={{
                        borderColor: "var(--border-color)",
                        borderRadius: "var(--s-btn)",
                        color: "var(--text-1)",
                      }}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="w-full">
                    <label
                      className="small1 block mb-1"
                      style={{ color: "var(--text-1)" }}
                    >
                      State
                    </label>

                    {/* Relative wrapper keeps the width identical and houses the icon */}
                    <div className="relative w-full">
                      <select
                        required
                        className="w-full px-4 pr-10 py-2.5 small1 bg-white border outline-none transition-colors appearance-none"
                        style={{
                          borderColor: "var(--border-color)",
                          borderRadius: "var(--s-btn)",
                          color: "var(--text-2)",
                        }}
                        value={formData.state || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select your state
                        </option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="gujarat">Gujarat</option>
                        {/* Add more states here */}
                      </select>

                      {/* Dropdown Arrow Icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-4 h-4"
                          style={{ fill: "var(--text-1)" }}
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      className="small1 block mb-1"
                      style={{ color: "var(--text-1)" }}
                    >
                      City
                    </label>

                    {/* Relative wrapper keeps the width identical and houses the icon */}
                    <div className="relative w-full">
                      <select
                        required
                        className="w-full px-4 pr-10 py-2.5 small1 bg-white border outline-none transition-colors appearance-none"
                        style={{
                          borderColor: "var(--border-color)",
                          borderRadius: "var(--s-btn)",
                          color: "var(--text-2)",
                        }}
                        value={formData.city || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select your city
                        </option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="pune">Pune</option>
                      </select>

                      {/* Dropdown Arrow Icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-4 h-4"
                          style={{ fill: "var(--text-1)" }}
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-md w-full py-3 uppercase text-white   cursor-pointer transition-colors"
                    style={{
                      color: "white",
                      backgroundColor: "var(--primary)",
                      borderRadius: "var(--s-btn)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--primary-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--primary)")
                    }
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
