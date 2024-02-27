import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
