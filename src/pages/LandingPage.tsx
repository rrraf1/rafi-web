import About from "../section/AboutSection";
import Experience from "../section/ExperienceSection";
import Landing from "../section/LandingSection";
import Skills from "../section/SkillsSection";
import Cursor from "../components/common/Cursor";
import Navbar from "../components/common/Navbar";
import ContactPage from "../components/common/Footer";

export default function LandingPage() {
  return (
    <>
      <Cursor />
      ,<Navbar />
      ,<Landing />
      ,<About />
      ,<Skills />
      ,<Experience />
      ,<ContactPage />
    </>
  );
}
