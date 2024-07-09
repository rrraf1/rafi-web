import { useState, useEffect, useRef } from "react";
import { loadData } from "./api/data";

import LandingPage from "./views/LandingPage";
import About from "./views/AboutPage";
import Skills from "./views/SkillsPage";
import Experience from "./views/ExperiencePage";

import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import Cursor from "./components/common/Cursor";
import ContactPage from "./components/common/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadPromise = loadData();

    // Ensure the intro video is shown for at least 4 seconds
    const minLoadingTime = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });

    Promise.all([loadPromise, minLoadingTime]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader ref={videoRef} />;
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Experience />
      <ContactPage />
    </>
  );
}

export default App;
