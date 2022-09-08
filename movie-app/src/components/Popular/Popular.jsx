import { GET } from "../../utils/api";
import { useEffect, useState } from "react";
import "./index.scss";

const Popular = ({
  cardData = { title: "", poster_path: "", overview: "" },
}) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="Popular">
      <div className="MainPopular__Info">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
      <div className="MainPopular__Img">
        <img src={API_IMG + poster_path} alt={title} />
      </div>
    </div>
  );
};

export default Popular;
