"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50 bg-white select-none">
      {/* --- TOP BAR (Hidden on Mobile & Tablet) --- */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 pointer-events-none"
            : "max-h-[200px] opacity-100"
        }`}
      >
        <div className="flex flex-row justify-between px-10 py-2">
          <div className="shrink-0 z-20">
            <Link href="/" className="logo">
              <img
                src="/Logo/logo2.jpeg"
                alt="logo"
                className="w-[800px] h-28"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white mt-4 bg-[#3E4095] hover:bg-[#2A2C6B] rounded-(--r-btn) px-4 py-2">
              DTE CODE: 6245
            </span>
            <span className="text-white bg-[#3E4095] hover:bg-[#2A2C6B] rounded-(--r-btn) px-4 py-2 mb-2">
              MH56
            </span>
          </div>
        </div>
      </div>

      {/* bg-[linear-gradient(to_right,#2d2f7f,#681e5d,#A43154,#DB2A31)] */}
      {/* --- MAIN NAVIGATION BAR --- */}
      <div
        className={`relative mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "px-4 lg:px-8 h-[90px] bg-(--primary) shadow-md "
            : "px-10 h-16 bg-(--primary)"
        }`}
      >
        {/* Left Aligned Hanging Ribbon Logo Badge */}
        {isScrolled && (
          <div className="shrink-0 z-20 transition-all duration-300">
            <Link href="/" className="logo">
              <img
                src="/Logo/logo.png"
                alt="logo"
                className="lg:w-36 w-28 h-36 lg:h-44 md:w-32 md:h-36 md:mt-20 lg:mt-28 mt-18"
              />
            </Link>
          </div>
        )}

        {/* Desktop Menu Links */}
        <nav
          className={`hidden lg:flex items-center lg:gap-4 xl:gap-10 text-left xl:mr-32 2xl:mr-[210px] min-[2200px]:mr-[1250px] lg:mr-8 ml-auto transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/">
            <span
              className="hover:text-black transition-colors text-white"
              style={{
                fontSize: "var(--body-size)",
                lineHeight: "var(--body-line-height)",
                fontWeight: "var(--font-weight-body)",
              }}
            >
              Home
            </span>
          </Link>

          {/* Dropdown 1 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white hover:text-black inline-flex items-center gap-1">
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
            <div className="absolute top-14 left-0 hidden group-hover:block bg-white shadow-xl rounded-(--r-btn) border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/management-page"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                management-page
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
                Vision & Mission
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
                Committees
              </Link>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white inline-flex items-center gap-1 hover:text-black transition-colors">
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
            <div className="absolute top-14 left-0 hidden group-hover:block bg-white shadow-xl rounded-(--r-btn) border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/b-arch-page"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                B.Arch
              </Link>
              <Link
                href="/m-arch-page"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                M.Arch
              </Link>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white  inline-flex items-center gap-1 hover:text-black transition-colors">
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
            <div className="absolute top-14 left-0 hidden group-hover:block bg-white shadow-xl rounded-(--r-btn) border border-[var(--card-border)] py-2 min-w-[200px]">
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
                Placement Committees
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
            <span className="text-[var(--link-size)] text-white  font-[var(--font-weight-body)] inline-flex items-center gap-1 hover:text-black transition-colors">
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
            <div className="absolute top-14 left-0 hidden group-hover:block bg-white shadow-xl rounded-(--r-btn) border border-[var(--card-border)] py-2 min-w-[200px]">
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

          {/* Dropdown 5 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)]  text-white font-[var(--font-weight-body)] inline-flex items-center gap-1 hover:text-black transition-colors">
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
            <div className="absolute top-14 left-0 hidden group-hover:block bg-white shadow-xl rounded-(--r-btn) border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Upcoming Events
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Workshops
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Guest Lectures
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

          <Link href="/">
            <span
              className="hover:text-black transition-colors text-white"
              style={{
                fontSize: "var(--body-size)",
                lineHeight: "var(--body-line-height)",
                fontWeight: "var(--font-weight-body)",
              }}
            >
              Contact
            </span>
          </Link>
        </nav>

        {/* Right Action Utilities Container */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0 shrink-0 z-20">
          {/* Apply Now CTA Button */}
          <Link
            href="/apply"
            className={`hidden lg:flex btn-md items-center gap-2 transition-colors shadow-sm text-center duration-300 ${
              isScrolled
                ? "bg-white hover:bg-[#2A2C6B] text-black px-6 py-3 rounded-[var(--r-lg)]"
                : "bg-gray-200 hover:bg-[#2A2C6B] hover:text-white text-black px-7 py-3 rounded-(--r-btn)"
            }`}
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

          {/* 3-Dash Mobile Hamburger Toggle Icon Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col lg:hidden"
          >
            <div className="bg-white flex flex-col gap-2 p-2 rounded border border-gray-100 shadow-sm">
              <span className="h-1 bg-black rounded-full block w-10"></span>
              <span className="h-1 bg-black rounded-full block w-10"></span>
              <span className="h-1 bg-black rounded-full block w-10"></span>
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE ACCORDION DRAWER --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-white border-t border-[var(--card-border)] shadow-xl z-50 transition-all">
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
