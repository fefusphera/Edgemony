import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";

import "./index.scss";

const MovieEntity = ({ movieID }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    console.log(movieID);
    GET("movie", movieID).then((data) => setMovieData(data));
  }, [movieID]);

  const { poster_path, original_title, genres, vote_average, tagline, title } =
    movieData;

  return (
    <div className="MovieEntity" id="movie-entity">
      <div className="MovieEntity__info">
        <div className="MovieEntity__info--title">
          <p>title</p>
          <h1>{title}</h1>
        </div>
        <div className="MovieEntity__info--bottom">
          <p>rating</p>
          <p>{vote_average || "not found"}</p>
          <p>genre</p>
          <ul>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <p className="MovieEntity__info--bottom--tagline">{tagline}</p>
        </div>
      </div>
      <img
        className="MovieEntity__poster"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className="MovieEntity__book">
        <button className="MovieEntity__book--btn">Book it!</button>
      </div>
      {movieData ? console.log(movieData) : <p>loading...</p>}
    </div>
  );
};

export default MovieEntity;
