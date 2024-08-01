import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadData } from "./api/data";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperienceDetail";
import Loader from "./components/common/Loader";
import CircularLoader from "./components/common/CircularLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    
    if (!hasSeenIntro) {
      setShowIntro(true);
      localStorage.setItem("hasSeenIntro", "true");
    } else {
      setIntroDone(true);
    }

    const initialize = async () => {
      await loadData(); // Load data
      setLoading(false);
    };

    initialize();
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
    setIntroDone(true);
  };

  if (showIntro) {
    return <Loader onIntroEnd={handleIntroEnd} />;
  }

  if (loading && !introDone) {
    return <CircularLoader />;
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