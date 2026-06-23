// "use client";

// import { useEffect, useRef, useState } from "react";

// const menuItems = [
//   { id: "about-programe", label: "About Programe" },
//   { id: "syllabus", label: "Syllabus" },
//   { id: "internship", label: "Practical Training & Experience" },
//   { id: "why-choose", label: "Why Choose" },
//   { id: "b-arch-co-po", label: "B.Arch CO PO Outcomes" },
//   { id: "career-opportunities", label: "Career Opportunities" },
//   { id: "admission-process", label: "Admission Process" },
//   { id: "academic-calendar", label: "Academic Calendar" },
//   { id: "faq", label: "Frequently Asked Questions" },
// ];

// export default function SidebarNavigation() {
//   const [activeSection, setActiveSection] = useState("b-arch-programme");

//   const isClickScrolling = useRef(false);
//   const clickTimeout = useRef<NodeJS.Timeout | null>(null);

//   const handleScroll = (id: string) => {
//     const element = document.getElementById(id);

//     if (!element) return;

//     isClickScrolling.current = true;
//     setActiveSection(id);

//     const offset = 30;

//     const bodyRect = document.body.getBoundingClientRect().top;
//     const elementRect = element.getBoundingClientRect().top;

//     const offsetPosition = elementRect - bodyRect - offset;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: "smooth",
//     });

//     if (clickTimeout.current) {
//       clearTimeout(clickTimeout.current);
//     }

//     clickTimeout.current = setTimeout(() => {
//       isClickScrolling.current = false;
//     }, 800);
//   };

//   useEffect(() => {
//     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//       if (isClickScrolling.current) return;

//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "-15% 0px -55% 0px",
//       threshold: 0.1,
//     });

//     menuItems.forEach((item) => {
//       const section = document.getElementById(item.id);

//       if (section) {
//         observer.observe(section);
//       }
//     });

//     return () => {
//       observer.disconnect();

//       if (clickTimeout.current) {
//         clearTimeout(clickTimeout.current);
//       }
//     };
//   }, []);

//   return (
//     <aside className="w-full lg:w-[340px]  shrink-0 bg-[var(--secondary-bg)] rounded-[var(--r-lg-btn)] p-6 lg:sticky lg:top-8  mt-14 border border-[var(--card-border)]">
//       <nav className="flex flex-col gap-1">
//         {menuItems.map((item) => {
//           const isActive = activeSection === item.id;

//           return (
//             <button
//               key={item.id}
//               onClick={() => handleScroll(item.id)}
//               style={{
//                 color: isActive ? "white" : "",
//                 backgroundColor: isActive
//                   ? "var(--primary) !important"
//                   : "transparent",
//               }}
//               className={`w-full text-left px-4 py-2 rounded-[var(--s-btn)] transition-all duration-300 ${
//                 isActive
//                   ? "bg-[var(--primary)] text-white"
//                   : "text-[var(--text-2)] hover:bg-[var(--primary)]/10"
//               }`}
//             >
//               {item.label}
//             </button>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }
