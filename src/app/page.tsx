import Image from "next/image";
import Link from "next/link";
import CampusLifeSlider from "../sections/CampusLifeSlider";
import GraduateFeedback from "../components/Hero-Section";
import BArchProgrammePage from "../sections/Management/b-Arc";
import MBAProgrammePage from "../sections/Management/abc";
import StudentWork from "../sections/Management/StudentWork";
import StudentWorkVariation from "../sections/Management/b-Arc";

export default function Home() {
  return (
    <>
      <main>
        {/* Active Section Preview or Layout Components Go Here */}

        {/* Navigation Link Directory */}
        <div className="flex flex-col gap-10  p-6 bg-[var(--primary-bg)] mt-80 justify-center mx-auto ml-96">
          <Link href="/b-arch-page">
            <span className="text-[var(--text-1)] hover:text-[var(--primary)] transition-colors">
              B Arch
            </span>
          </Link>

          <Link href="/m-arch-page">
            <span className="text-[var(--text-1)] hover:text-[var(--primary)] transition-colors">
              M Arch
            </span>
          </Link>

          <Link href="/management-page">
            <span className="text-[var(--text-1)] hover:text-[var(--primary)] transition-colors">
              About Management
            </span>
          </Link>

          <Link href="/student-work-page">
            <span className="text-[var(--text-1)] hover:text-[var(--primary)] transition-colors">
              Student Work
            </span>
          </Link>
          <Link href="/student-work-page-copy">
            <span className="text-[var(--text-1)] hover:text-[var(--primary)] transition-colors">
              Student Work 2
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
