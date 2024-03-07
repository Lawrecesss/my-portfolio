import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nav/NavBar";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="px-5 sm:px-32 py-3">
        <NavBar />
        <Hero />
      </div>
    </ThemeProvider>
  );
};

export default App;
