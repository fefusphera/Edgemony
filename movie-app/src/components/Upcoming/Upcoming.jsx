const Upcoming = ({ cardData }) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="Upcoming">
      <div className="MainUpcomingInfo">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
      <div className="MainUpcomingmg">
        <img src={API_IMG + poster_path} alt={title} />
      </div>
    </div>
  );
};

export default Upcoming;
