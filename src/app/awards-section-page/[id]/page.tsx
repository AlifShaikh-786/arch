import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gridData } from "@/src/data/awardsData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AwardDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const awardId = parseInt(resolvedParams.id, 10);
  const award = gridData.find((item) => item.id === awardId);

  if (!award) {
    notFound();
  }

  // Get next and previous awards for navigation carousel/footer link
  const prevAwardId = awardId > 1 ? awardId - 1 : null;
  const nextAwardId = awardId < gridData.length ? awardId + 1 : null;

  return (
    <main className="bg-[var(--primary-bg)] min-h-screen text-[var(--text-1)] pt-12 mt-52 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button with Micro-animations */}
        {/* <Link
          href="/awards-section-page"
          className="group inline-flex items-center gap-2 text-[var(--text-2)] hover:text-[var(--primary)] transition-colors duration-300 mb-8  cursor-pointer"
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1.5">
            &larr;
          </span>
          <span>Back to Awards & Achievements</span>
        </Link> */}

        {/* Article Header */}
        <header className="mb-8">
          {/* <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1    uppercase bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
              {award.categoryType === "nasa"
                ? "NASA Award"
                : "Sports Achievement"}
            </span>
            {(award.date || award.location) && (
              <span className=" text-[var(--text-2)] ">
                {award.date} {award.location ? `• ${award.location}` : ""}
              </span>
            )}
          </div> */}
          <h1 className="  text-[var(--text-1)]">{award.sectionTitle}</h1>
        </header>

        {/* Center Image Component with Premium Shadow / Aspect Ratio */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[var(--r-lg-btn)] overflow-hidden shadow-lg mb-12 border border-[var(--card-border)] bg-[var(--secondary-bg)]">
          <Image
            src={award.imgSrc}
            alt={award.sectionTitle}
            fill
            priority
            sizes="(max-w-1200px) 100vw, 1200px"
            className="object-cover transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* Multi-column Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Metadata Panel */}
          {/* <aside className="md:col-span-1 bg-[var(--secondary-bg)] border border-[var(--card-border)] p-6 rounded-[var(--r-btn)] space-y-6 md:sticky md:top-28 shadow-sm">
            <div>
              <h6 className="text-[var(--text-2)] uppercase   mb-2">
                Category
              </h6>
              <p className="  text-[var(--text-1)] capitalize">
                {award.categoryType} Recognition
              </p>
            </div>

            {award.date && (
              <div>
                <h6 className="text-[var(--text-2)] uppercase   mb-2">
                  Timeline
                </h6>
                <p className="  text-[var(--text-1)]">
                  {award.date}
                </p>
              </div>
            )}

            {award.location && (
              <div>
                <h6 className="text-[var(--text-2)] uppercase   mb-2">
                  Location Venue
                </h6>
                <p className="  text-[var(--text-1)]">
                  {award.location}
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-[var(--border-color)]">
              <div className="p-3 bg-[var(--primary-bg)] rounded-[var(--s-btn)] border border-[var(--border-color)]">
                <p className="  text-[var(--text-2)]">
                  Verified institutional milestone. Commemorating students'
                  outstanding talent and leadership contribution.
                </p>
              </div>
            </div>
          </aside> */}

          {/* Right Theory/Description Columns */}
          <article className="md:col-span-4 space-y-6 text-[var(--text-2)] ">
            {award.descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className=" text-[var(--text-1)]">
                {paragraph}
              </p>
            ))}
          </article>
        </div>

        {/* Carousel/Footer Navigation for Next/Previous Items */}
        <footer className="mt-16 pt-8 border-t border-[var(--border-color)] flex justify-between items-center">
          {prevAwardId ? (
            <Link
              href={`/awards-section-page/${prevAwardId}`}
              className="group flex flex-col text-left hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer"
            >
              <span className="uppercase text-[var(--text-2)] ">
                {/* Previous Achievement */}
              </span>
              <span className="  flex items-center gap-1">
                <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
                  &larr;
                </span>{" "}
                Prev
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextAwardId ? (
            <Link
              href={`/awards-section-page/${nextAwardId}`}
              className="group flex flex-col text-right hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer"
            >
              <span className="uppercase text-[var(--text-2)] ">
                {/* Next Achievement */}
              </span>
              <span className="  flex items-center gap-1 justify-end">
                Next{" "}
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          ) : (
            <div />
          )}
        </footer>
      </div>
    </main>
  );
}
