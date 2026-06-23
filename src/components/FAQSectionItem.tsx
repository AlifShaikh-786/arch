"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface FAQSectionItemProps {
  question: string;
  answer: string;
}

export default function FAQSectionItem({
  question,
  answer,
}: FAQSectionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-color)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer focus:outline-none"
      >
        <p className="text-[var(--text-1)]">{question}</p>

        <span
          className={`w-8 h-8 rounded-(--r-lg) border border-[var(--text-1)] flex items-center justify-center transition-all duration-300 text-[var(--text-1)] ${
            isOpen
              ? "bg-[var(--primary)] text-white rotate-45 border-[var(--primary)]"
              : "bg-transparent"
          }`}
        >
          <FaPlus size={12} />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[200px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[var(--text-1)]">{answer}</p>
      </div>
    </div>
  );
}
