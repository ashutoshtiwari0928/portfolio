import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Footer from "./components/Fotter";
import { Popover } from "@base-ui-components/react/popover";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-900 px-6 py-20 text-white mx-auto">
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
