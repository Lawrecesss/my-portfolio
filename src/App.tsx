import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nav/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skill/Skills";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="px-5 sm:px-32 py-3">
          <NavBar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
