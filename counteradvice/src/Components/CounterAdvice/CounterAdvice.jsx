import "./index.css";
import { useState, useReducer } from "react";

let data = [
  {
    id: 0,
    advice:
      "If you do something bad, make sure there’s someone else around to blame.",
  },

  {
    id: 1,
    advice: "Only boring people say they’re bored.",
  },

  {
    id: 2,
    advice: "Only chickens accomplish something by sitting on their asses.",
  },

  {
    id: 3,
    advice:
      "If any guy tries to hurt you, tell him I have a gun, a shovel, and an alibi.",
  },

  {
    id: 4,
    advice:
      "Don’t follow what you think is the right way; make your way to what you think is happiness.",
  },

  {
    id: 5,
    advice: "Don’t have sex after chopping jalapenos.",
  },
];

const CounterAdvice = () => {
  const [count, setCount] = useState([0]);
  let advice = data[count];

  return (
    <div>
      <h1>Funny Advices (useState)</h1>
      <p> Advice n° {advice.id}</p>
      <p> {advice.advice} </p>
      <button
        disabled={advice.id > 4}
        className="New"
        onClick={() => setCount(advice.id + 1)}
      >
        New
      </button>
      <button
        disabled={advice.id < 1}
        className="Previous"
        onClick={() => setCount(advice.id - 1)}
      >
        Previous
      </button>
    </div>
  );
};

export default CounterAdvice;
