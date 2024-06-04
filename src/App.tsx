import LandingPage from "./views/LandingPage";
import About from "./views/AboutPage";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor"

function App() {
  return (
    <>
    <Cursor />
      <Navbar />
      <LandingPage />
      <About />
    </>
  );
}

export default App;
