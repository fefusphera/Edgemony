import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  console.log(movieLists);
  return (
    <div className="MainSection">
      {movieLists.popular && (
        <MainCard isMain={true} cardData={movieLists.popular[0]} />
      )}
      {movieLists.topRated && (
        <TopRatedList cardData={movieLists.topRated} nCards={3} />
      )}
      {movieLists.upcoming && (
        <UpcomingList cardData={movieLists.upcoming[0]} nCards={3} />
      )}
    </div>
  );
};

export default MainSection;
