import HeroSection from "@/src/components/Hero-Section";
import Image from "next/image";

export default function ManagementPage() {
  const data = [
    {
      title: "Principal Desk",
      description:
        "Committed to academic excellence and strong leadership. Inspiring the next generation of innovators.",
    },
  ];
  return (
    <>
      <main className="bg-white">
        <div>
          <HeroSection
            title={data[0].title}
            description={data[0].description}
          />
        </div>
        <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-20    text-[var(--text-1)]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Title with Custom Underline */}
            <div className="mb-12">
              <h2 className="    text-[var(--text-1)] uppercase   mb-2">
                MESSAGE FROM Principal Desk
              </h2>
            </div>

            {/* Core Content Grid Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Left Column Profile Card Structure */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col">
                <div className="relative aspect-[4/5] w-full rounded-[var(--r-btn)] overflow-hidden shadow-xl border border-[var(--border-color)] mb-4">
                  <Image
                    src="/Management/R.T.Golgire_sir.webp" // Professional placeholder image
                    alt="Padmashree Dr. D. Y. Patil"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Title / Designation Label Blocks */}
                <h3 className="   text-[var(--text-1)]    ">
                  Prof. R T Golgire Principal
                </h3>
                {/* <p className=" text-[var(--text-2)]     mt-1">
                  Founder, Dr. D. Y. Patil Technical Campus
                </p> */}
              </div>

              {/* Right Column Core Typography Messaging Frame */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5 text-[var(--text-1)]">
                <p>
                  Friends and young aspiring architects, it is my honour to pen
                  down this message for a subject which is close to my heart and
                  for which I have a strong passion & deep conviction—the{" "}
                  <span className="text-[var(--primary)]">
                    education of an Architect
                  </span>
                  . I had always wished to create holistic learning environments
                  so that students will enjoy their five years of Architecture
                  with an effective learning process and lay a strong foundation
                  for their career. I feel truly blessed to have been given this
                  opportunity by Dr. Ajeenkya D. Y. Patil to lay the foundations
                  of this School of Architecture.
                </p>

                <p>
                  At{" "}
                  <span className="text-[var(--primary)]">
                    D. Y. Patil School of Architecture
                  </span>
                  , the underlying thought in imparting education has always
                  been based on the Environment and gearing students towards
                  professional practice. As we included the Master’s Program in
                  Environmental Architecture, research became the third
                  cornerstone of our ethos.{" "}
                  <span className="text-[var(--primary)]">
                    Research, Environment, and Professional Practice
                  </span>{" "}
                  form the absolute foundation of our curriculum, which is now a
                  proud part of ADYP University.
                </p>

                <p>
                  Architecture in itself is experiential; thus, the learning
                  environment must go beyond the studios. We believe that every
                  second spent by a student in our institute has to be a
                  learning experience. The role of our faculty, staff, and
                  librarian is vital in creating an ecosystem where students
                  thrive, develop a balanced personality, and gain the
                  confidence to join the profession. We strive to maintain a
                  warm camaraderie and an easy rapport between teachers and
                  students, contributing to{" "}
                  <span className="text-[var(--primary)]">
                    excellent learning environments
                  </span>
                  .
                </p>

                <p>
                  On behalf of the faculty and staff, I express my heartfelt
                  gratitude to Dr. Ajeenkya D. Y. Patil for his continuous
                  support and trust in us, and we laud his incredible vision for
                  the School of Architecture.
                </p>

                {/* Accent Quote Box Container Layer */}
                <div className="relative border-l-4 border-[var(--primary)] py-5 px-6 mt-2">
                  {/* Giant Opacity Left Quote Symbol Accent */}
                  <span className="absolute top-2 left-3 text-[var(--primary)]">
                    “
                  </span>
                  <p className="italic text-[var(--text-1)] sm:pl-2 relative z-10">
                    With the support of our dedicated team and enthusiastic
                    students, we shall continue to deliver the{" "}
                    <span className="text-[var(--primary)] not-italic">
                      best architectural education
                    </span>{" "}
                    and work towards taking this institute to ever greater
                    heights.
                    <span className="absolute bottom-[8px] pl-2 text-[var(--primary)]">
                      ”
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
