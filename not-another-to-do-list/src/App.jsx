import "./App.css";
import { useReducer } from "react";
import { useState, createContext } from "react";
import Lightbulb from "./components/Lightbulb";

const theme = {
  lightMode: {
    background: "#fff",
    color: "#1b1b1b",
  },
  darkMode: {
    background: "#1b1b1b",
    color: "#fff",
  },
};
export const PippoContext = createContext();

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeStuff = {
    isDarkMode,
    setDarkMode,
  };

  const initialState = {
    count: 0,
  };

  console.log("IN APP", darkModeStuff);
  console.log("IN APP THEME", theme);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //da mettere dopo l'inizializzazione

  return (
    <div className="App" style={isDarkMode ? theme.darkMode : theme.lightMode}>
      <PippoContext.Provider value={darkModeStuff}>
        <h1>COUNTER</h1>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <Lightbulb />
      </PippoContext.Provider>
    </div>
  );
}

export default App;
