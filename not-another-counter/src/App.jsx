import "./App.css";

import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar/";

// theme.setDarkMode((prev) => !prev);

function App() {
  const isDarkMode = useSelector((state) => state.darkmode.value);
  // const dispatch = useDispatch();

  // console.log(isDarkMode);

  return (
    <div className={isDarkMode ? "darkmode" : "lightmode"}>
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
