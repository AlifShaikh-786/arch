"use client";

import { useState } from "react";

interface WhyChooseItemProps {
  index: number;
  title: string;
  desc: string;
}

export default function WhyChooseItem({
  index,
  title,
  desc,
}: WhyChooseItemProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div
      className="bg-white border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: "var(--border-color)",
        borderRadius: "var(--r-btn)",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="text-(--primary)">0{index + 1}</span>
          <h6>{title}</h6>
        </div>

        <div
          className={`w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
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
      </button>

      {/* Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 border-t" : "max-h-0"
        }`}
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        <div className="p-6">
          <p
            className="small1"
            style={{
              color: "var(--text-2)",
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
