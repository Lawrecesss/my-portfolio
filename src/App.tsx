import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
