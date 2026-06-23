import Image from "next/image";
import CampusLifeSlider from "../sections/CampusLifeSlider";
import GraduateFeedback from "../components/Hero-Section";
// import Abc from "../sections/Management/abc";
import BArchProgrammePage from "../sections/Management/b-Arc";
import MBAProgrammePage from "../sections/Management/abc";
import StudentWork from "../sections/Management/StudentWork";
import StudentWorkVariation from "../sections/Management/b-Arc";

export default function Home() {
  return (
    <>
      <main>
        {/* <Abc /> */}
        <StudentWorkVariation />
        {/* <StudentWork /> */}
        {/* <CampusLifeSlider /> */}
        {/* <BArchProgrammePage /> */}
        {/* <MBAProgrammePage /> */}
      </main>
    </>
  );
}
