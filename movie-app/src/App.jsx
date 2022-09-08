import { useEffect, useState } from "react";
import { GET2 } from "./utils/api.js";
import Popular from "./components/Popular";
import MovieHome from "./components/MovieHome";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import "./App.css";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c";

  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    GET2("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setTopRated(data.results)
    );
  }, []);
  console.log("TOP RATED", topRated);

  return (
    <div className="App">
      <button
        onClick={(e) => {
          console.log("Bottone Search Value in App>>>>", searchValue);
        }}
      >
        CIAO AMIO
      </button>

      <MovieHome setSearchValue={setSearchValue} cardData={movies[0]} />

      <Popular cardData={movies[0]} />

      {topRated ? (
        topRated.map((topRated) => (
          <TopRated key={topRated.id} cardData={topRated} />
        ))
      ) : (
        <h1>ERROR</h1>
      )}

      <Upcoming />
    </div>
  );
}

export default App;
