const Popular = ({ cardData }) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="Popular">
      <div className="MainPopularInfo">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
      <div className="MainPopularImg">
        <img src={API_IMG + poster_path} alt={title} />
      </div>
    </div>
  );
};

export default Popular;
