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

function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;