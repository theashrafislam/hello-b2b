import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection";
import TravelExplore from "./Components/Home/TravelExplore";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />

      <TravelExplore />
    </div>
  );
}
