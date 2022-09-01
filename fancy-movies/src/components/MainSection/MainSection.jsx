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
      <div className="MainSectionPrefe">
        <h3>Popular</h3>
        {movieLists.popular && (
          <MainCard isMain={true} cardData={movieLists.popular[0]} />
        )}
      </div>
      <div className="MainSectionScroll">
        <h3>Top Ratered Movies:</h3>
        <div className="MainSectionScrollRatered">
          {movieLists.topRated && (
            <TopRatedList cardData={movieLists.topRated} />
          )}
        </div>
        <h3>Top Upcoming:</h3>
        <div className="MainSectionScrollUpcoming">
          {movieLists.upcoming && (
            <UpcomingList cardData={movieLists.upcoming} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
