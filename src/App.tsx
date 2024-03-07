import NavBar from "./components/Nav/NavBar";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
