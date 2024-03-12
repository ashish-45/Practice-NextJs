import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased ">
          <HeroSection/>
          <TestimonialCards/>
          <UpcomingWebinars/>
          <Instructor/>
      </main>
    </>
  );
}
