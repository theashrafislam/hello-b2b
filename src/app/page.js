import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection";
import TravelExplore from "./Components/Home/TravelExplore";
import ExploreFeatures from "./Components/Home/PopularTravel";
import Special from "./Components/Home/Special";
import Destination from "./Components/Home/Destination";
import Watch from "./Components/Home/Watch";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />

      <TravelExplore />

      <ExploreFeatures />

      <Special />

      <Destination />

      <Watch />
    </div>
  );
}
