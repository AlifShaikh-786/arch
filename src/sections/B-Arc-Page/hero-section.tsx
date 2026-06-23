export default function HeroSection() {
  return (
    <header className="relative overflow-hidden border-b py-20  mt-40  px-5 bg-[var(--secondary-bg)] border-[var(--border-color)]">
      {/* Soft atmospheric design accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,63,150,0.06),transparent_50%)]" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto  relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6">
        {/* Main Content Area */}
        <div className="lg:col-span-7 space-y-6">
          <span className="small1 uppercase block  text-(--text-2)">
            Dr. D. Y. Patil College of Architecture, Pune
          </span>

          <div className="space-y-3">
            <h1 style={{ color: "var(--text-1)" }}>
              Bachelor of Architecture (B.Arch)
            </h1>
            <p className="text-(--primary)">
              Design the Future. Shape the World.
            </p>
          </div>

          <p className="max-w-2xl  text-(--text-2)">
            The Bachelor of Architecture (B.Arch) is an elite 5-year
            professional undergraduate programme designed to fuse spatial
            artistry with advanced structural science. The programme focuses on
            cultivating globally competitive technocrats, creative visionaries,
            and environmentally conscious architects capable of shaping future
            built environments.
          </p>

          {/* Action Callouts */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              className="btn-md group px-6 py-3 uppercase flex items-center gap-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                color: "white",
                backgroundColor: "var(--primary)",
                borderRadius: "var(--s-btn)",
              }}
            >
              <span>Apply Now</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              className="btn-md group px-6 py-3 uppercase flex items-center gap-2 cursor-pointer transition-all duration-300 border bg-white"
              style={{
                color: "var(--text-1)",
                borderColor: "var(--text-1)",
                borderRadius: "var(--s-btn)",
              }}
            >
              <span>Download Brochure</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
