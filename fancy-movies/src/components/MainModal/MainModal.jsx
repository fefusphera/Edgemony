import "./index.scss";

const MainModal = ({
  cardData = { title: "", poster_path: "", overview: "" },
}) => {
  const { title, poster_path, overview } = cardData;
  return (
    <div className="MainModalOverlay">
      <div className="MainModal">
        <img
          className="ModalMainCard--img"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MainModal;
