import { useState, useEffect } from "react";
import "./index.scss";

const MovieHome = ({
  setInputPippo,
  cardData = { title: "", poster_path: "", overview: "" },
}) => {
  const { title, poster_path, overview } = cardData;
  const [inputValue, setInputValue] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    fetch(API_SEARCH + inputValue)
      .then((res) => res.json())
      .then((data) => {
        setSearchedMovie(data.results);
      });
  }, []);

  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=a3e69b3b929b911d21793d43d1d96b7c&query=";

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputPippo(inputValue);
    setInputValue("");
  };
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  // console.log(API_SEARCH + inputValue);
  console.log(searchedMovie);

  return (
    <div className="MainMovieHome">
      <div className="searchMovieForm">
        <form className="MainInputForm" onSubmit={onHandleSubmit}>
          <input type="text" onChange={onHandleChange} />
          <button type="submit">Search</button>
        </form>

        <div className="MainMovieCard">
          <div className="MainMovieCard__info">
            <h1>{title}</h1>
            <p>{overview}</p>
          </div>
          <div className="MainMovieCard__img">
            <img src={API_IMG + poster_path} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHome;
