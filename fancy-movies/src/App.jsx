import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection/";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Navbar />
      <MainInput setInputPippo={setInputValue} />
      <MainSection />
      {/* <MovieEntity movieID="324669" /> */}
      <MovieEntity movieID={inputValue || "324663"} />
    </div>
  );
}

export default App;
