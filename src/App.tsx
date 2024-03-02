import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
    </ThemeProvider>
  );
};

export default App;
