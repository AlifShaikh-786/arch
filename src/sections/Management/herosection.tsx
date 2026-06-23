"use client";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marry Jaen",
    role: "Marketing Coordinator",
    text: "“The university helped me secure internships guided my research and gave me experiences that shaped my professional path.”",
    rating: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Annette Black",
    role: "Medical Assistant",
    text: "“The multicultural environment, mentorship, and student support services helped me thrive both academically and personally.”",
    rating: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Alen Walker",
    role: "Manager",
    text: "“Holly is one of the best content writers ve ever worked with. Her ability to write clearly and help the reader achieve their goals is remarkable.”",
    rating: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", // Reusing the same image to match your screenshot
  },
];

export default function GraduateFeedback() {
  return (
    <section className="w-full bg-[#fbf9f4] py-20 px-4 md:px-8 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#b91c1c] text-xs font-bold tracking-widest uppercase mb-3">
            <span className="text-base">🎓</span> Students Feedback
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4 tracking-tight">
            Journey of Our Graduates
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto">
            A look into how our students grow transform the skills to make an
            impact.
          </p>
        </div>

        {/* Testimonials Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 shadow-sm border border-neutral-100/60 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                {/* Card Top Block: Profile Picture & Rating Row */}
                <div className="flex justify-between items-start mb-8">
                  {/* Dynamic Custom Curved Image Cutout Mask */}
                  <div className="relative w-24 h-24 overflow-hidden rounded-tl-[24px] rounded-br-[60px] bg-neutral-100">
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  {/* Rating Stars Frame */}
                  <div className="flex gap-0.5 pt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaRegStar
                        key={i}
                        className="w-4 h-4 fill-[#f97316] text-[#f97316]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text Area */}
                <p className="text-neutral-600 text-[15px] leading-relaxed italic mb-8 font-normal">
                  {item.text}
                </p>
              </div>

              {/* Author Footer Information Block */}
              <div>
                <h4 className="text-xl font-bold text-neutral-900 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-neutral-500 text-sm mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
