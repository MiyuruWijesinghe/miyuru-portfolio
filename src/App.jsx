import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Reveal from "./components/Reveal";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div id="top">

      {loading && <Loader />}

      <Navbar />
      
      <Hero />
      
      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>
      
      <Reveal>
        <Education />
      </Reveal>

      <Reveal> 
        <Certifications />
      </Reveal>  

      <Reveal>
        <Projects />
      </Reveal>
      
      <Reveal>
        <Blogs />
      </Reveal>
      
      <Reveal>
        <Contact />
      </Reveal>
      
      <Footer />
      
    </div>
  );
}

export default App;