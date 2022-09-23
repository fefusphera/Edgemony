import "./App.css";
import Snowfall from "react-snowfall";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar/";

// theme.setDarkMode((prev) => !prev);

function App() {
  const isDarkMode = useSelector((state) => state.darkmode.value);

  return (
    <div className={isDarkMode ? "darkmode" : "lightmode"}>
      <Navbar />
      <Counter />

      {isDarkMode === true && (
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
      )}
    </div>
  );
}

export default App;
