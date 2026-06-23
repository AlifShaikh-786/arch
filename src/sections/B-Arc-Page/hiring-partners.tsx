import React from "react";

export default function HiringPartners() {
  // Directly mapping verified, working branding logo URLs matching the image ecosystem
  const partners = [
    {
      name: "Tata Consultancy Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png",
    },
    {
      name: "Cohesity",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cohesity_Logo.svg/512px-Cohesity_Logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png",
    },
    {
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens_AG_logo.svg/512px-Siemens_AG_logo.svg.png",
    },
    {
      name: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_2017_logo.svg/512px-Capgemini_2017_logo.svg.png",
    },
  ];

  // Double the list array to secure unbroken seamless loop mechanics
  const doublePartners = [...partners, ...partners];

  return (
    <section className="py-20 px-5  bg-white overflow-hidden">
      {/* Self-contained style block to inject keyframes natively without tailwind.config edits */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes inline-infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-track {
          animation: inline-infinite-scroll 30s linear infinite;
        }
      `,
        }}
      />

      {/* Styled Minimal Header to Match Image Identity */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="  text-(--text-1) ">
          Hiring <span className="text-(--primary)">Partners</span>
        </h2>
      </div>

      {/* Infinite Horizontal Logo Track Container */}
      <div className="max-w-7xl px-6 mx-auto  inline-flex flex-nowrap relative select-none">
        <div className="flex items-center justify-center gap-16 py-4 animate-scroll-track whitespace-nowrap">
          {doublePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-32 md:w-40 shrink-0 mix-blend-multiply opacity-85 transition-opacity duration-300 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
