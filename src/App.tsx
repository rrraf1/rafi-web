import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadData } from "./api/data";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperienceDetail";
import Loader from "./components/common/Loader";
import CircularLoader from "./components/common/CircularLoader";
import introVideo from "./assets/introkomp.mp4";
import introTabVideo from "./assets/intro-tab.mp4";
import introMobileVideo from "./assets/intro-mobile.mp4";

// Fungsi untuk memuat Loader terlebih dahulu
const preloadLoader = () => {
  return Promise.all([
    preloadVideo(introVideo),
    preloadVideo(introTabVideo),
    preloadVideo(introMobileVideo)
  ]);
};

const preloadVideo = (src: string) => {
  return new Promise<void>((resolve) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = src;
    link.onload = () => resolve();
    link.onerror = () => resolve(); // Resolve juga jika terjadi error
    document.head.appendChild(link);
  });
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('visited');
    
    const loadEverything = async () => {
      const loaderPromise = preloadLoader(); // Prioritaskan loading Loader
      
      const loadPromise = Promise.all([
        loadData(),
        new Promise(resolve => setTimeout(resolve, 1000)), // Simulasi loading komponen lain
        loaderPromise
      ]);

      const timeoutPromise = new Promise(resolve => setTimeout(resolve, 5000));

      try {
        await Promise.race([loadPromise, timeoutPromise]);
      } catch (error) {
        console.error("Loading error:", error);
      }

      setInitialLoading(false);
      
      if (isFirstVisit) {
        localStorage.setItem('visited', 'true');
        setShowIntro(true);
      }
    };

    loadEverything();
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  if (initialLoading) {
    return <CircularLoader />;
  }

  if (showIntro) {
    return <Loader ref={videoRef} onIntroEnd={handleIntroEnd} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/project/absensi" element={<ExperiencePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;