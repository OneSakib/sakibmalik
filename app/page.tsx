import AboutSection from "./components/Home/AboutSection";
import HeroSection from "./components/Home/HeroSection";
import ResumeSection from "./components/Home/ResumeSection";
import SkillsSection from "./components/Home/SkillsSection";
import StatsSection from "./components/Home/StatsSection";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ResumeSection />
    </main>
  );
}
