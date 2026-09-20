import "./App.css";

import NavbarV2 from "./components/NavbarV2";
import HeroV2 from "./components/HeroV2";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Fotter";

function App() {
  return (
    <div className="app-bg min-h-screen px-6 py-20 text-white mx-auto">
      <NavbarV2 />
      <HeroV2 />
      <Architecture />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;