import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full  bg-[var(--secondary-bg)] overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-16 pb-8 md:px-12 lg:px-16">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mb-16">
          {/* Column 1: Brand Profile */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center ">
              {/* Red Line-Art Shield & Lion Crest */}
              <Link href="/">
                <img
                  src="/Logo/logo.png"
                  alt="logo"
                  className="w-40 h-40  items-center justify-center"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: */}
          <div className="flex flex-col space-y-4">
            <p
              className=" text-gray-400   max-w-sm"
              style={{
                fontSize: "var(--body-size)",
                lineHeight: "var(--body-line-height)",
                fontWeight: "var(--font-weight-body)",
              }}
            >
              Dr. D. Y. Patil School of Architecture, Varale, Pune is a premier
              architecture institute offering quality education, innovative
              design learning, and professional development for aspiring
              architects.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              {/* X / Twitter */}
              <Link
                href="https://x.com"
                className=" text-gray-400   hover:text-white transition-colors"
                aria-label="X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                className=" text-gray-400   hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link
                href="https://instagram.com"
                className=" text-gray-400   hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 stroke-[2] fill-none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link
                href="https://youtube.com"
                className=" text-gray-400   hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 3:  */}
          <div className="flex flex-col space-y-4">
            <h5
              className="  font-bold text-black"
              style={{
                fontSize: "var(--h5-size)",
                lineHeight: "var(--h5-line-height)",
              }}
            >
              Get in touch
            </h5>

            <div className="space-y-3">
              <span className="block text-xl font-bold text-gray-400  ">
                800 388 80 90
              </span>
              <p
                className=" text-gray-400   text-gray-400   max-w-[240px]"
                style={{
                  fontSize: "var(--small-size)",
                  lineHeight: "var(--small-line-height)",
                  fontWeight: "var(--font-weight-body)",
                }}
              >
                Varale, Near Talegaon Railway Station, Talegaon Dabhade, Pune –
                410507, Maharashtra, India.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/directions"
                className="btn-sm inline-block border border-gray-700 text-black hover:bg-white/5 px-4 py-2 transition-colors rounded-[4px]"
                style={{ fontSize: "var(--btn-sm-size)" }}
              >
                Get directions
              </Link>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h5
              className="  font-bold text-black"
              style={{
                fontSize: "var(--h5-size)",
                lineHeight: "var(--h5-line-height)",
              }}
            >
              Links
            </h5>
            <ul className="space-y-3">
              {[
                "Students",
                "Faculty & Staffs",
                "Alumni",
                "Visit",
                "Media Relations",
              ].map((link) => (
                <li
                  key={link}
                  style={{
                    fontSize: "var(--li-size)",
                    lineHeight: "var(--li-line-height)",
                  }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className=" text-gray-400   hover:text-white transition-colors block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM RIGHTS BAR --- */}
        <div className="border-t border-white/10 pt-8 mt-4 text-center">
          <small
            className="text-gray-500 "
            style={{ fontSize: "var(--small-size)" }}
          >
            © 2026 Dr. D. Y. Patil School of Architecture. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
