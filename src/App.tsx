import { useState, useEffect, useRef } from "react";
import { loadData } from "./api/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperienceDetail";
import Loader from "./components/common/Loader";
import '../style/main.css'

function checkVisit() {
  const visited = localStorage.getItem("visited");
  return visited === "true";
}

function App() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (checkVisit()) {
      setLoading(false);
      return;
    }

    const loadPromise = loadData();

    const minLoadingTime = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
    
    Promise.all([loadPromise, minLoadingTime]).then(() => {
      localStorage.setItem("visited", "true"); 
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader ref={videoRef} />; // Tampilkan Loader selama loading
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:projectName" element={<ExperiencePage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
