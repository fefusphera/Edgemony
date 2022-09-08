import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import "./index.scss";

const MovieHome = ({
  query,
  ext,
  setSearchValue,
  cardData = { title: "", poster_path: "", overview: "" },
}) => {
  const { title, poster_path, overview } = cardData;
  const [inputValue, setInputValue] = useState("coco");
  const [searched, setSearched] = useState([]);
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (inputValue !== "") {
      GET(inputValue, "&language=en-US&page=1").then((data) => {
        console.log(data);
        setSearched(data.results);
      });
    }
  }, [inputValue]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputValue);
    setSearchValue(inputValue);
    // console.log("Submit MovieHome>>>", inputValue);
  };
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log("SEARCHED>>>>", searched);

  return (
    <div className="MainMovieHome">
      <div className="searchMovieForm">
        <form className="MainInputForm" onSubmit={onHandleSubmit}>
          <input type="text" onChange={onHandleChange} />
          <button className="FormBtn" type="submit">
            Search
          </button>
        </form>

        {searched.length > 0 && (
          <div className="MainMovieCard">
            <div className="MainMovieCard__info">
              <h1>{searched[0].title}</h1>
              <p>{searched[0].overview}</p>
            </div>
            <div className="MainMovieCard__img">
              <img src={API_IMG + searched[0].poster_path} alt={title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieHome;
