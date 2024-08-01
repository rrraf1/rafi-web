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
    const isFirstVisit = !localStorage.getItem('visited');
    const loadPromise = loadData();

    if (isFirstVisit) {
      localStorage.setItem('visited', 'true');
      loadPromise.then(() => {
        setInitialLoading(false);
        setShowIntro(true);
      });
    } else {
      loadPromise.then(() => {
        setInitialLoading(false);
      });
    }
  }, []);

  if (initialLoading) {
    return <CircularLoader />;
  }

  if (showIntro) {
    return <Loader ref={videoRef} onIntroEnd={() => setShowIntro(false)} />;
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