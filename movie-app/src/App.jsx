import { useEffect, useState } from "react";
import Popular from "./components/Popular";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c";

  const [movies, setMovies] = useState([]);

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
      <Navbar />
      {/* {movies.map((moviePippo) => (
        <Popular key={moviePippo.id} {...moviePippo} />
      ))} */}
      <Popular cardData={movies[0]} />
    </div>
  );
}

export default App;
