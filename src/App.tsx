import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";
import NavBar from "./components/Nav/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
