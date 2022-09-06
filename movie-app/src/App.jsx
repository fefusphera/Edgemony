import { useEffect, useState } from "react";

import Popular from "./components/Popular";
import MovieHome from "./components/MovieHome";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import "./App.css";

function App() {
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=a3e69b3b929b911d21793d43d1d96b7c&query=";
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c";

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(API_SEARCH + searchValue)
      .then((res) => res.json())
      .then((data) => {
        setSearchedMovie(data.results);
      });
  }, []);

  console.log(API_SEARCH + searchValue);
  console.log(searchedMovie);

  return (
    <div className="App">
      <button
        onClick={(e) => {
          console.log("INPUT VALUE>>>>", searchValue);
        }}
      >
        CIAO AMIO
      </button>

      <MovieHome setInputPippo={setSearchValue} />
      {/* {movies.map((moviePippo) => (
        <Popular key={moviePippo.id} {...moviePippo} />
      ))} */}
      <Popular cardData={movies[0]} />
      <TopRated />
      <Upcoming />
    </div>
  );
}

export default App;
