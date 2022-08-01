import { useReducer } from "react";
import "./index.css";

let data2 = [
  {
    id: 0,
    advice: "ciao",
  },

  {
    id: 1,
    advice: "pippo",
  },

  {
    id: 2,
    advice: "orango",
  },

  {
    id: 3,
    advice: "mela",
  },

  {
    id: 4,
    advice: "pera",
  },

  {
    id: 5,
    advice: "blabla",
  },
];

const CounterAdvice2 = () => {
  const initialState = { count: 0 };
  //setto l'initial state con count a 0

  function reducer(state, action) {
    switch (action.type) {
      case "New":
        return { count: state.count + 1 };
      case "Previous":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  let advice2 = data2[state.count];

  return (
    <div>
      <h1>Funny Advices (useReduce)</h1>
      <p> Advice n° {advice2.id}</p>
      <p> {advice2.advice} </p>
      <button
        disabled={advice2.id > 4}
        className="New"
        onClick={() => dispatch({ type: "New" })}
      >
        New
      </button>
      <button
        disabled={advice2.id < 1}
        className="Previous"
        onClick={() => dispatch({ type: "Previous" })}
      >
        Previous
      </button>
    </div>
  );
};

export default CounterAdvice2;
