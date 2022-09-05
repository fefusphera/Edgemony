import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import { GET } from "../../utils/api";
import "./index.scss";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [filtered, setFiltered] = useState([]);

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

  useEffect(() => {
    movieLists.topRated.length !== 0 &&
      setFiltered(
        movieLists.topRated.filter((item) => item.vote_average >= 8.6)
      );
  }, [movieLists]);

  // setFiltered(movieLists.topRated.filter(vote_average >= 8.6));

  // const filteredData = APIData.filter((item) => {
  //   return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //   })

  // console.log(movieLists);

  console.log("filererses>>>>", filtered);
  return (
    <div className="MainSection">
      <div className="MainSectionPrefe">
        <h3>Popular</h3>
        {movieLists.popular.length !== 0 && (
          <MainCard isMain={true} cardData={movieLists.popular[0]} />
        )}
      </div>
      <div className="MainSectionScroll">
        <h3>Top Ratered Movies:</h3>
        <div className="MainSectionScrollRatered">
          {filtered.length !== 0 && <TopRatedList cardData={filtered} />}
        </div>
        <h3>Top Upcoming:</h3>
        <div className="MainSectionScrollUpcoming">
          {movieLists.upcoming.length !== 0 && (
            <UpcomingList cardData={movieLists.upcoming} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
