import { useState, useEffect } from 'react';
import { loadData } from './api/data';

import LandingPage from "./views/LandingPage";
import About from "./views/AboutPage";
import Skills from './views/SkillsPage';

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([loadData()]) // Tambahkan lebih banyak promise jika perlu
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Cursor />
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
    </>
  );
}

export default App;
