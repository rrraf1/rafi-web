import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadData } from "./api/data";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperienceDetail";
import Loader from "./components/common/Loader";
import CircularLoader from "./components/common/CircularLoader";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isNewSession = !sessionStorage.getItem("sessionStarted");

    const loadEverything = async () => {
      await loadData(); // Load data
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading of other components

      setInitialLoading(false);

      if (isNewSession) {
        sessionStorage.setItem("sessionStarted", "true");
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