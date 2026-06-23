// "use client";

// import { useEffect, useRef, useState } from "react";

// export interface MenuItem {
//   id: string;
//   label: string;
// }

// export interface SidebarNavigationProps {
//   items: MenuItem[];
// }

// export default function SidebarNavigation({ items }: SidebarNavigationProps) {
//   const [activeSection, setActiveSection] = useState(items[0]?.id || "");

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

//     items.forEach((item) => {
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
//   }, [items]);

//   return (
//     <aside className="w-full lg:w-[270px] xl:w-[340px]  shrink-0 bg-[var(--secondary-bg)] rounded-[var(--r-lg-btn)] p-6 lg:sticky lg:top-8 mt-14 border border-[var(--card-border)]">
//       {/* {title && (
//         <h2 className="text-[var(--text-1)] mb-6 border-b border-[var(--border-color)] pb-3 text-xl font-semibold">
//           {title}
//         </h2>
//       )} */}
//       <nav className="flex flex-col gap-1">
//         {items.map((item) => {
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

"use client";
import { HiArrowSmallRight } from "react-icons/hi2";

import { useEffect, useRef, useState } from "react";

export interface MenuItem {
  id: string;
  label: string;
}

export interface SidebarNavigationProps {
  items: MenuItem[];
}

export default function SidebarNavigation({ items }: SidebarNavigationProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);

  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    isClickScrolling.current = true;
    setActiveSection(id);

    const offset = 30;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;

    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);

    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }

    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-15% 0px -55% 0px",
      threshold: 0.1,
    });

    items.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();

      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, [items]);

  return (
    <>
      {/* Mobile Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed left-0 top-40 z-[1000] text-[var(--r-btn)]   bg-[var(--primary)] text-white    px-3 py-4 rounded-r-[var(--r-btn)] shadow-lg"
      >
        <HiArrowSmallRight className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* style={{
          backgroundColor: "var(--primary)",
          color: "white",
          fontSize: "var(--r-btn)",
          padding: "var(--r-btn)",
        }} */}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky
          left-0
          top-0 
          mb-10
          mt-20
          h-screen lg:h-auto 
          w-[280px] lg:w-[270px] xl:w-[340px]
          shrink-0
          bg-[var(--secondary-bg)]
          border border-[var(--card-border)]
          px-6
          py-4
          z-[1000]
          transition-transform duration-300 ease-in-out

          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}

          lg:rounded-[var(--r-lg-btn)]
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-6 mt-28 lg:hidden">
          <h6 className="text-[var(--text-1)]">Navigation</h6>

          <button
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-1)] text-xl"
          >
            ✕
          </button>
        </div>

        {/* Desktop spacing */}
        <div className="hidden lg:block mt-4" />

        <nav className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  handleScroll(item.id);
                }}
                style={{
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "var(--primary)" : "transparent",
                }}
                className={`w-full text-left px-4 py-2 rounded-[var(--s-btn)] transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-2)] hover:bg-[var(--primary)]/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
