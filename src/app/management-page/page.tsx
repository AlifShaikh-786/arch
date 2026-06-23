import HeroSection from "@/src/components/Hero-Section";
import Image from "next/image";

export default function ManagementPage() {
  const data = [
    {
      title: "About Management",
      description:
        "Committed to academic excellence and strong leadership. Inspiring the next generation of innovators.",
    },
  ];
  return (
    <>
      <main className="bg-white">
        {/* 3--------------------------------------------- */}
        {/* <section className="relative py-20 px-5 w-full h-[450px] sm:h-[350px]  lg:h-[310px] xl:h-[480px]   flex flex-col  justify-center    text-white overflow-hidden  ">
       
          <div className="absolute inset-0 z-0  ">
            <Image
              src="/campus/campus.png" 
              alt="Management Building Background"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#0f2c42]/60 mix-blend-multiply" />
          </div>

          <div className="relative z-10 w-full max-w-5xl text-start px-6 flex flex-col items-start xl:mt-[190px] md:mt-32  mt-56 xl:ml-20 md:ml-16 ml-2 ">
            <h1 className="     drop-shadow-md mb-2">Our Management</h1>
            <div className="w-[180px] h-[2px] bg-white/90 mb-4 opacity-80" />

          
            <p className="text-white   md:max-w-md lg:max-w-xl max-w-sm    drop-shadow-sm">
              Committed to academic excellence and strong leadership. Inspiring
              the next generation of innovators.
            </p>
          </div>
        </section> */}
        {/* <section className="relative py-20 w-full h-[450px] sm:h-[350px]  lg:h-[310px] xl:h-[480px]   flex flex-col  justify-center    text-white overflow-hidden  ">
        
          <div className="absolute inset-0 z-0  ">
            <Image
              src="/campus/campus.png" // A high-quality academic building image
              alt="Management Building Background"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#0f2c42]/60 mix-blend-multiply" />
          </div>

          <div className="relative z-10 w-full max-w-5xl text-start px-6 flex flex-col items-start xl:mt-[240px] md:mt-32  mt-56 xl:ml-20 md:ml-16 ml-2 ">
            <h1 className="     drop-shadow-md mb-2">Our Management</h1>
            <div className="w-[180px] h-[2px] bg-white/90 mb-4 opacity-80" />

           
            <p className="text-white   md:max-w-md lg:max-w-xl max-w-sm    drop-shadow-sm">
              Committed to academic excellence and strong leadership. Inspiring
              the next generation of innovators.
            </p>
          </div>
        </section> */}
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
                MESSAGE FROM THE FOUNDER
              </h2>
            </div>

            {/* Core Content Grid Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Left Column Profile Card Structure */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col">
                <div className="relative aspect-[4/5] w-full rounded-[var(--r-btn)] overflow-hidden shadow-xl border border-[var(--border-color)] mb-4">
                  <Image
                    src="/Management/DY-Patil.png" // Professional placeholder image
                    alt="Padmashree Dr. D. Y. Patil"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Title / Designation Label Blocks */}
                <h3 className="   text-[var(--text-1)]    ">
                  Padmashree Dr. D. Y. Patil
                </h3>
                <p className=" text-[var(--text-2)]     mt-1">
                  Founder, Dr. D. Y. Patil Technical Campus
                </p>
              </div>

              {/* Right Column Core Typography Messaging Frame */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5      text-[var(--text-1)]   ">
                <p>
                  I am very proud to share that our College under{" "}
                  <span className="   text-(--primary)">
                    D. Y. Patil Technical Campus
                  </span>{" "}
                  is one of the most eminent Higher Educational Institutions
                  today and is renowned for the standards of its{" "}
                  <span className="    text-[var(--primary)]">
                    Faculties, Students, and Alumni
                  </span>
                  . It is constantly pushing the frontiers of knowledge and
                  ensures a futuristic approach that keeps pace with the
                  changing trends of the professional world.
                </p>

                <p>
                  It is a matter of pride and privilege for me to see all of you
                  doing well as Teachers and Students. Let me remind you that
                  academic success has always been cherished tenfold when
                  coupled with achievements in various other{" "}
                  <span className="    text-[var(--primary)]">
                    non-academic arenas
                  </span>
                  . I wish and hope that all of you continue with the same zest
                  and contribute nobly as{" "}
                  <span className="    text-[var(--primary)]">
                    future pillars of the nation
                  </span>
                  .
                </p>

                {/* Accent Quote Box Container Layer */}
                <div className="relative border-l-4 border-[var(--primary)]  py-5 px-6 mt-2">
                  {/* Giant Opacity Left Quote Symbol Accent */}
                  <span className="absolute top-2 left-3      text-[var(--primary)]  ">
                    “
                  </span>
                  <p className=" italic  text-[var(--text-1)]   sm:  pl-2 relative z-10">
                    I wish the students studying at{" "}
                    <span className="    text-[var(--primary)] not-italic">
                      D. Y. Patil Technical Campus, Varale
                    </span>
                    , all the very best in their future endeavours and grand
                    success to the faculties in their efforts to impart
                    excellent education.
                    <span className="absolute bottom-[8px] pl-2      text-[var(--primary)]  ">
                      ”
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-20   text-[var(--text-1)]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Title with Brand Underline */}
            <div className="mb-12">
              <h2 className="     text-[var(--text-1)] uppercase   mb-2">
                MESSAGE FROM THE CHAIRMAN
              </h2>
            </div>

            {/* Core Content Grid Split Layout - Uses order-first/last to flip sides on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Left Column: Core Typography Messaging Frame */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5  text-[var(--text-1)]    order-2 md:order-1">
                <p>
                  With immense pleasure I welcome you all to{" "}
                  <span className="    text-[var(--primary)]">
                    Dr. D. Y. Patil Technical Campus
                  </span>
                  . The vision of Dr. D. Y. Patil Technical Campus is based on
                  smart work, transference work culture, teamwork and
                  realization of individual responsibility. This philosophy
                  allows us to emphasise on our efforts to adopt the present
                  challenges and think ahead for the future for the growth of
                  society and our nation at large.
                </p>

                <p>
                  Education should be based on{" "}
                  <span className="    text-[var(--primary)]">
                    doing the things and not just knowing the things
                  </span>
                  . We motivate and give support while understanding the
                  problems during the process of development of solutions. Dr.
                  D. Y. Patil Technical Campus has set specific objectives and
                  planned activities for achieving excellence in all spheres of
                  education where students proudly say that{" "}
                  <span className=" text-[var(--primary)]">
                    ‘I CAN DO IT AND I WILL DO IT NOW’
                  </span>{" "}
                  and thereby implement it.
                </p>

                <p>
                  We strongly believe that every young mind is to be moulded in
                  a way best suited with the best skills that individual has and
                  to bring out the best in him/her. To discover the hidden
                  talents of students and to bring out their innovative best. To
                  make our students champions in the professional world and
                  personal level by nurturing them from the best of our mentors,
                  who as a team set them an example by working together and
                  making the place a{" "}
                  <span className="    text-[var(--primary)]">
                    second home where we value every dream
                  </span>
                  .
                </p>

                <p>
                  A perfect blend of academics and dynamic environment, our
                  campus is certainly going to motivate everyone – the
                  management, faculty and students to deliver their best. Along
                  with excellent teaching skills, the faculty members are
                  actively involved in the overall development of young
                  students. Our primary objective is to generate a class of{" "}
                  <span className="    text-[var(--primary)]">
                    qualified, innovative and dynamic professionals
                  </span>{" "}
                  to serve the society.
                </p>

                {/* Accent Quote Box Container Layer */}
                <div className="relative border-l-4 border-(--primary)    py-5 px-6 mt-2">
                  {/* Giant Opacity Left Quote Symbol Accent */}
                  <span className="absolute top-2 left-3      text-[var(--primary)] ">
                    “
                  </span>
                  <p className=" italic  text-[var(--text-1)]   pl-2 relative z-10  ">
                    True awakening happens when one is gaining knowledge by
                    continuous learning and implementation.{" "}
                    <span className="    text-[var(--primary)] not-italic">
                      Keep enlightening, keep rising!
                    </span>
                    <span className="absolute bottom-[8px] pl-2      text-[var(--primary)]  ">
                      ”
                    </span>
                  </p>
                  {/* Giant Opacity Right Quote Symbol Accent */}
                </div>
              </div>

              {/* Right Column: Profile Card Structure (Flipped to right side via desktop order rules) */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col order-1 md:order-2">
                <div className="relative aspect-[4/5] w-full rounded-[var(--r-btn)] overflow-hidden shadow-xl border border-[var(--border-color)] mb-4">
                  <Image
                    src="/Management/dr-sushant-patil.webp" // High-quality professional male executive placeholder
                    alt="Dr. Sushant Patil"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Title, Qualifications / Designation Label Blocks */}
                <h3 className="    text-[var(--text-1)]    ">
                  Dr. Sushant Patil
                </h3>
                <p className="  text-[var(--primary)]     uppercase   mt-0.5">
                  PhD, MBA, LLB, BSL
                </p>
                <p className=" small1 text-[var(--text-2)]     mt-1">
                  Chairman of DYPAEEF, Pune
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-20   text-[var(--text-1)]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Title with Brand Underline */}
            <div className="mb-12">
              <h2 className="     text-[var(--text-1)] uppercase   mb-2">
                MESSAGE FROM THE SECRETARY
              </h2>
            </div>

            {/* Core Content Grid Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Left Column Profile Card Structure */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col">
                <div className="relative aspect-[4/5] w-full rounded-[var(--r-btn)] overflow-hidden shadow-xl border border-[var(--border-color)] mb-4">
                  <Image
                    src="/Management/adv-anuja-patil.webp" // High-quality professional female executive placeholder
                    alt="Mrs. Anuja Patil"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Title, Qualifications / Designation Label Blocks */}
                <h3 className="    text-[var(--text-1)]    ">
                  Mrs. Anuja Patil
                </h3>
                <p className="  text-[var(--primary)]     uppercase  r mt-0.5">
                  MBA, BSL, LLB, LLM, B.Ed
                </p>
                <p className=" small1 text-[var(--text-2)]     mt-1">
                  Secretary of DYPATILEF, Pune
                </p>
              </div>

              {/* Right Column Core Typography Messaging Frame */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5      text-[var(--text-1)]  ">
                <p>
                  With immense pleasure I welcome you all to{" "}
                  <span className="    text-[var(--primary)]">
                    Dr. D. Y. Patil Technical Campus
                  </span>
                  . The vision of our institution is based on smart work,
                  transparent work culture, teamwork, and the realization of
                  individual responsibility. This philosophy allows us to
                  emphasize our efforts to adopt the present challenges and
                  think ahead for the future for the growth of society and our
                  nation at large.
                </p>

                <p>
                  Education should be based on{" "}
                  <span className="    text-[var(--primary)]">
                    doing things and not just knowing things
                  </span>
                  . We motivate and give support while understanding the
                  problems during the process of development of solutions. Dr.
                  D. Y. Patil Technical Campus has set specific objectives and
                  planned activities for achieving excellence in all spheres of
                  education where students proudly say that{" "}
                  <span className="italic   text-[var(--text-1)]">
                    ‘I CAN DO IT AND I WILL DO IT NOW’
                  </span>{" "}
                  and thereby implement it.
                </p>

                <p>
                  We strongly believe that every young mind is to be molded in a
                  way best suited with the best skills that individual has and
                  to bring out the best in him/her. Our mission is to discover
                  the hidden talents of students, bring out their innovative
                  best, and make them champions in both the professional world
                  and on a personal level. We nurture them through the best of
                  our mentors, who as a team set an example by working
                  together—making this place a{" "}
                  <span className="    text-[var(--primary)]">
                    second home where we value every dream
                  </span>
                  .
                </p>

                <p>
                  A perfect blend of academics and a dynamic environment, our
                  campus is certainly going to motivate everyone – the
                  management, faculty, and students to deliver their best. Along
                  with excellent teaching skills, our faculty members are
                  actively involved in the overall development of young students
                  to generate a class of{" "}
                  <span className="    text-[var(--primary)]">
                    qualified, innovative, and dynamic professionals
                  </span>{" "}
                  to serve society.
                </p>

                {/* Accent Quote Box Container Layer */}
                <div className="relative border-l-4 border-(--primary)    py-5 px-6 mt-2">
                  {/* Giant Opacity Left Quote Symbol Accent */}
                  <span className="absolute top-2 left-3      text-[var(--primary)]  ">
                    “
                  </span>
                  <p className=" italic  text-[var(--text-1)]   pl-2 relative z-10  ">
                    True awakening happens when one is gaining knowledge by
                    continuous learning and implementation.{" "}
                    <span className="    text-[var(--primary)] not-italic">
                      Keep enlightening, keep rising!
                    </span>
                    <span className="absolute bottom-[8px] pl-2      text-[var(--primary)]  ">
                      ”
                    </span>
                  </p>
                  {/* Giant Opacity Right Quote Symbol Accent */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
