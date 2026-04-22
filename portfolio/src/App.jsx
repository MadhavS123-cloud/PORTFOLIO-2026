import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ResumePrintView from "./components/ResumePrintView";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [view, setView] = useState("portfolio"); // "portfolio" or "resume"

  if (view === "resume") {
    return <ResumePrintView onBack={() => setView("portfolio")} />;
  }

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {splashDone && (
        <div className="relative min-h-screen bg-[#050810] text-white selection:bg-cyan-400/20 selection:text-cyan-400">
          <AnimatedBackground />

          <div className="relative z-10">
            <ScrollProgress />
            <Navbar />

            <main>
              <HeroSection onResumeView={() => setView("resume")} />
              <ProjectsSection />
              <SkillsSection />
              <EducationSection />
              <AchievementsSection />
              <ContactSection />
            </main>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
