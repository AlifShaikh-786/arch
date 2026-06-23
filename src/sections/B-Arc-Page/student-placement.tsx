"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const placements = [
  {
    name: "Aarav Sharma",
    course: "M.Arch",
    batch: "2026",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: true,
  },
  {
    name: "Alif Shaikh",
    course: "M.Arch",
    batch: "2025",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: true,
  },
  {
    name: "Shreyank Parab",
    course: "B.Arch",
    batch: "2025",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: false,
  },
  {
    name: "Rahul Verma",
    course: "M.Arch",
    batch: "2025",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: false,
  },
  {
    name: "Priyanka Patel",
    course: "B.Arch",
    batch: "2026",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: false,
  },
  {
    name: "Rohan Deshmukh",
    course: "M.Arch",
    batch: "2025",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    featured: false,
  },
];

export default function StudentPlacements() {
  return (
    <section className="bg-white py-20 px-5  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Heading Header */}
        <div className="flex flex-col items-center text-center mb-9">
          <h2 className="text-[var(--text-1)] mb-4">Student Placements</h2>
          <p className="text-[var(--text-2)] max-w-2xl">
            Celebrating our students who transformed their education into
            successful careers with top companies.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative w-full">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".placement-prev",
              nextEl: ".placement-next",
            }}
            pagination={{
              clickable: true,
              el: ".placement-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-full"
          >
            {placements.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="bg-white border border-gray-200  shadow-md flex flex-col justify-between w-full h-full rounded-none">
                  {/* Shorter aspect ratio to reduce card height */}
                  <div className="overflow-hidden relative aspect-[4/4] w-full bg-[var(--secondary-bg)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover "
                    />
                    {/* Purple dot in top-left (only for featured) */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[var(--primary)]" />
                    )}
                  </div>

                  <div className="px-5 py-4 flex-grow flex flex-col justify-center">
                    <h6 className="text-[var(--text-1)]">{item.name}</h6>
                    <p className="text-[var(--text-2)] mt-1 text-sm">
                      {item.course} • Batch {item.batch}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 px-5 py-3 flex items-center justify-between bg-white">
                    <span className="text-[var(--text-2)]  uppercase ">
                      Placed At
                    </span>
                    <div className="h-[28px] w-[90px] flex items-center justify-end opacity-80 mix-blend-multiply">
                      <img
                        src={item.companyLogo}
                        alt="Company Logo"
                        className="max-h-full max-w-full object-contain object-right"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Controls Panel */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="placement-pagination bg-[var(--primary)] flex items-center gap-1.5" />

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button className="placement-prev w-11 h-11 flex items-center justify-center rounded-full bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] transition-all duration-300 text-gray-800 border border-gray-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronLeft size={14} className="text-gray-600" />
              </button>
              <button className="placement-next w-11 h-11 flex items-center justify-center rounded-full bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] transition-all duration-300 text-gray-800 border border-gray-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronRight size={14} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
