import React from "react";

import Navbar from "./components/Navbar/navbar.component";
import About from "./components/About/about.component";
import Projects from "./components/Projects/projects.component";
import Skills from "./components/Skills/skills.component";
import Testimonials from "./components/Testimonials/testimonials.component";
import Contact from "./components/Contact/contact.component";

function App() {
  return (
      <main className='text-gray-400 bg-gray-900 body-font'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
  );
}

export default App
