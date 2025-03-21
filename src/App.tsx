import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
