import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { loadData } from "./api/data";

import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import Cursor from "./components/common/Cursor";

const LandingPage = lazy(() => import("./views/LandingPage"));
const About = lazy(() => import("./views/AboutPage"));
const Skills = lazy(() => import("./views/SkillsPage"));
const Experience = lazy(() => import("./views/ExperiencePage"));
const ContactPage = lazy(() => import("./components/common/Footer"));

function App() {
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadPromise = loadData();

    const minLoadingTime = new Promise<void>((resolve) => {
      setTimeout(resolve, 4000);
    });

    Promise.all([loadPromise, minLoadingTime]).then(() => {
      setDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (dataLoaded && videoRef.current) {
      videoRef.current.onended = () => setLoading(false);
      videoRef.current.onerror = () => setLoading(false);
      videoRef.current.play().catch(() => setLoading(false));
    }
  }, [dataLoaded]);

  if (loading) {
    return dataLoaded ? (
      <Loader ref={videoRef} />
    ) : (
      <div>Loading...</div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Cursor />
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Experience />
      <ContactPage />
    </Suspense>
  );
}

export default App;