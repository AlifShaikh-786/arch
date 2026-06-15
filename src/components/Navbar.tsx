"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-white select-none">
      {/* --- TOP BAR --- */}
      <div className="bg-[linear-gradient(to_right,#2d2f7f,#681e5d,#A43154,#DB2A31)] text-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-12 flex items-center justify-between">
          {/* Welcome Text / Icon */}
          <div className="flex items-center gap-2 pl-[180px] lg:pl-[220px] xl:pl-[240px] md:block hidden">
            <span className="inline-flex items-center gap-2 font-[500] text-[16px] ">
              {/* Simple SVG Hat Icon matching image */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.18 13.04l6.82 3.72 6.82-3.72C17.7 15.17 15.03 16 12 16s-5.7-.83-6.82-2.96z" />
              </svg>
              Welcome To Dr. D Y Patil School of Architecture Varale, Talegaon
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 ml-auto sm:gap-6">
            {[
              "DTE CODE: 6245",
              "Accredited by NAAC with  'A'  Grade",

              "MH56",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[14px] font-[500] opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-8 h-[90px] flex items-center justify-between">
        {/* Hanging Ribbon Logo Badge */}
        <div>
          <Link href="/" className="logo">
            <img src="/Logo/logo.png" alt="logo" className="w-44 h-52 mt-12" />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center gap-10 text-left mr-10 ">
          <span
            className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] transition-colors"
          >
            Home
          </span>

          {/* Dropdown 1 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] inline-flex items-center gap-1">
              About Us
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                About DYPSOA
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Our Inspiration
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Vission & Mision
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Director's Desk
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Key Features
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Committes
              </Link>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Academics
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                B.Arch
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                M.Arch
              </Link>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Placement
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                About Placement
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Committess
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Activities
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Updates
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Our Recruiters
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Gallery
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Career Support
              </Link>
            </div>
          </div>

          {/* Dropdown 4 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Faculty
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Director's Desk
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Principal's Desk
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Other Faculties
              </Link>
            </div>
          </div>

          {/* Dropdown 4 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Events & News
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Upcoming Event's
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Workshop's
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Guest Lecture's
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Conference
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                News & Updates
              </Link>
            </div>
          </div>

          <span
            className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] transition-colors"
          >
            Contact
          </span>
        </nav>

        {/* Right Action Utilities (Search, Drawer, CTA Button) */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          {/* Apply Now CTA Button */}
          <Link
            href="/apply"
            className="btn-md bg-[#3E4095] hover:bg-[#3E4095] text-white px-6 py-3 rounded-[var(--r-lg)] flex items-center gap-2 transition-colors shadow-sm ml-2 shrink-0 text-center"
            style={{ fontSize: "var(--btn-md-size)" }}
          >
            Apply Now
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* --- MOBILE ACCORDION DRAWER --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-[130px] left-0 w-full bg-white border-t border-[var(--card-border)] shadow-xl z-50 transition-all">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[var(--link-size)] font-medium py-1 border-b border-gray-50"
            >
              Home
            </Link>
            <div className="text-[var(--link-size)] font-medium py-1 border-b border-gray-50 flex justify-between text-[#8a1529]">
              About Us <span>+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-1 border-b border-gray-50 flex justify-between">
              Pages <span>+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-1 border-b border-gray-50 flex justify-between">
              Academics <span>+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-1 border-b border-gray-50 flex justify-between">
              Blog <span>+</span>
            </div>
            <Link
              href="/contact"
              className="text-[var(--link-size)] font-medium py-1"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
