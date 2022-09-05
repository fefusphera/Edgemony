import { useEffect, useState } from "react";
import Popular from "./components/Popular";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, []);

  console.log(movies[0]);

  return (
    <div className="App">
      {/* {movies.map((moviePippo) => (
        <Popular key={moviePippo.id} {...moviePippo} />
      ))} */}
      <Popular cardData={movies[0]} />
    </div>
  );
}

export default App;
