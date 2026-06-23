import Image from "next/image";
interface data {
  title: string;
  description: string;
}
export default function HeroSection({ title, description }: data) {
  return (
    <section className="relative py-20 w-full  top-0  h-[500px]  sm:h-[440px]  lg:h-[440px] xl:h-[480px]   flex flex-col  justify-center    text-white overflow-hidden  ">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0  ">
        <Image
          src="/campus/campus.png"
          alt="Management Building Background"
          fill
          priority
          className="object-cover "
        />

        <div className="absolute inset-0 bg-[#0f2c42]/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-start px-6 flex flex-col items-start xl:mt-[240px] lg:mt-56 sm:mt-64  mt-64   xl:ml-20 md:ml-16 ml-2 ">
        <h1 className="     drop-shadow-md mb-2">{title}</h1>
        <div className="w-[180px] h-[2px] bg-white/90 mb-4 opacity-80" />

        {/* Subtitle Description */}
        <p className="text-white   md:max-w-md lg:max-w-xl max-w-sm    drop-shadow-sm">
          {description}
        </p>
      </div>
    </section>
  );
}
