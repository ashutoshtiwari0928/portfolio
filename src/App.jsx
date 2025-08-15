import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Fotter";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
