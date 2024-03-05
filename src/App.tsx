import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/ThemeProvider";

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
