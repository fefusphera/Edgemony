import { useState } from "react";
import MainModal from "../MainModal";
import "./index.css";

const MainCard = ({ isMain, cardData = { title: "", poster_path: "" } }) => {
  const { title, poster_path } = cardData;
  const [modalVisible, setModalVisibility] = useState(false);

  const onDivClick = () => {
    setModalVisibility(true);
  };

  return (
    <>
      {modalVisible && <MainModal cardData={cardData} />}
      <div onClick={onDivClick} className={isMain ? "MainCard" : "MiniCard"}>
        <img
          className="MainCard--img"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
      </div>
    </>
  );
};

export default MainCard;
