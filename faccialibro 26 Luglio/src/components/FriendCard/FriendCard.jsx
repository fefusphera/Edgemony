import "./index.css";
import Modal from "../Modal";
import { useState } from "react";
import { DELETE } from "../../utils/api";

const FriendCard = ({ friendData, onDeleteBtn, isRenderedList }) => {
  const { photo, name, id } = friendData;
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div onClick={() => console.log(friendData.id)} className="FriendCard">
      <button
        onClick={() => setModalVisibility(true)}
        className="FriendCard__delete"
      >
        X
      </button>
      <img className="FriendCard__photo" src={photo} alt={name} />
      <p className="FriendCard__name">{name}</p>

      <div className="stocazzo">
        {isModalVisible && (
          <Modal
            onCancelBtnClick={setModalVisibility}
            onOkBtnClick={() =>
              DELETE("friends", friendData.id).then(() =>
                onDeleteBtn(!isRenderedList)
              )
            }
            mainModalText="sei sicuro di voler eliminare l'amico?"
          />
        )}
      </div>
    </div>
  );
};

export default FriendCard;
