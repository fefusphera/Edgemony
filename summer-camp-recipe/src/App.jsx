import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [meals, setMeals] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [isUpdate]);

  const showFoodChoice = () => {
    setUpdate(!isUpdate);
    console.log(meals[0].strMeal);
  };

  return (
    <div className="App">
      <div className="mainTitle">
        <h1 className="mainTitleFirst">What should I eat today?</h1>
        <button onClick={showFoodChoice}> Click Me! </button>
      </div>

      <p className="mealName"> {meals[0]?.strMeal} </p>

      <div className="mealPic">
        <img src={meals[0]?.strMealThumb} alt="img" />
      </div>

      <div className="mealRecipe">
        <h3>Recipe:</h3>
        <p className="recipeText">{meals[0]?.strInstructions}</p>
      </div>
    </div>
  );
}
export default App;
