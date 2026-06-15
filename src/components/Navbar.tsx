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
          <div className="flex items-center gap-2 pl-4 md:pl-[60px] lg:pl-[120px] md:block hidden">
            <span className="inline-flex items-center gap-2 font-[500] text-[14px] lg:text-[16px]">
              {/* Simple SVG Hat Icon */}
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
              "Accredited by NAAC with 'A' Grade",
              "MH56",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[12px] lg:text-[14px] font-[500] opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
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
        <div className="z-50">
          <Link href="/" className="logo block">
            <img
              src="/Logo/logo.png"
              alt="logo"
              className="w-36 h-44 md:w-44 md:h-52 mt-8 md:mt-12 drop-shadow-md"
            />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-left ml-auto mr-6">
          <Link
            href="/"
            className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] transition-colors"
          >
            Home
          </Link>

          {/* Dropdown 1 - About Us */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] inline-flex items-center gap-1 transition-colors">
              About Us
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[220px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                About DYPSOA
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Our Inspiration
              </Link>
              <Link
                href="/vision-mission"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Vision & Mission
              </Link>
              <Link
                href="/directors-desk"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Director's Desk
              </Link>
              <Link
                href="/features"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Key Features
              </Link>
              <Link
                href="/committees"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Committees
              </Link>
            </div>
          </div>

          {/* Dropdown 2 - Academics */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Academics
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
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
                href="/b-arch"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                B.Arch
              </Link>
              <Link
                href="/m-arch"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                M.Arch
              </Link>
            </div>
          </div>

          {/* Dropdown 3 - Placement */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Placement
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md border border-[var(--card-border)] py-2 min-w-[220px]">
              <Link
                href="/about-placement"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                About Placement
              </Link>
              <Link
                href="/placement-committees"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Placement Committees
              </Link>
              <Link
                href="/placement-activities"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Placement Activities
              </Link>
              <Link
                href="/placement-updates"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Placement Updates
              </Link>
              <Link
                href="/our-recruiters"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Our Recruiters
              </Link>
              <Link
                href="/placement-gallery"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Placement Gallery
              </Link>
              <Link
                href="/career-support"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Career Support
              </Link>
            </div>
          </div>

          {/* Dropdown 4 - Faculty */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Faculty
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
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
                href="/directors-desk"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Director's Desk
              </Link>
              <Link
                href="/principals-desk"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Principal's Desk
              </Link>
              <Link
                href="/other-faculties"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Other Faculties
              </Link>
            </div>
          </div>

          {/* Dropdown 5 - Events & News */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Events & News
              <svg
                className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
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
                href="/upcoming-events"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Upcoming Events
              </Link>
              <Link
                href="/workshops"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Workshops
              </Link>
              <Link
                href="/guest-lectures"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Guest Lectures
              </Link>
              <Link
                href="/conferences"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                Conferences
              </Link>
              <Link
                href="/news-updates"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)] transition-colors"
              >
                News & Updates
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-[var(--link-size)] font-[var(--font-weight-body)] text-black hover:text-[#3E4095] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Utilities (Mobile Burger & CTA Button) */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0 z-50">
          <Link
            href="/apply"
            className="btn-md bg-[#3E4095] hover:bg-[#2d2f7f] text-white px-5 py-2.5 rounded-[var(--r-lg)] flex items-center gap-2 transition-colors shadow-sm text-center font-medium"
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

          {/* Responsive Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#3E4095] focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- MOBILE ACCORDION DRAWER --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-[138px] left-0 w-full bg-white border-t border-[var(--card-border)] shadow-xl z-50 transition-all duration-200">
          <div className="px-6 py-6 flex flex-col gap-4 max-h-[calc(100vh-140px)] overflow-y-auto">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 text-black"
            >
              Home
            </Link>
            <div className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 flex justify-between items-center text-black">
              About Us <span className="text-gray-400">+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 flex justify-between items-center text-black">
              Academics <span className="text-gray-400">+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 flex justify-between items-center text-black">
              Placement <span className="text-gray-400">+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 flex justify-between items-center text-black">
              Faculty <span className="text-gray-400">+</span>
            </div>
            <div className="text-[var(--link-size)] font-medium py-2 border-b border-gray-100 flex justify-between items-center text-black">
              Events & News <span className="text-gray-400">+</span>
            </div>
            <Link
              onClick={() => setIsOpen(false)}
              href="/contact"
              className="text-[var(--link-size)] font-medium py-2 text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
