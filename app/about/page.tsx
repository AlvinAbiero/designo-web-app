import AboutHeroSection from "@/app/_components/AboutHeroSection";
import AboutTalent from "@/app/_components/AboutTalent";
import AboutLocationsBox from "@/app/_components/AboutLocationsBox";
import AboutDeal from "@/app/_components/AboutDeal";
import Cta from "@/app/_components/Cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutTalent />
      <AboutLocationsBox />
      <AboutDeal />
      <Cta />
    </>
  );
};

export default About;
