import "./index.css";
import { DELETE } from "../../utils/api";

const FriendCard = ({ friendData, setRenderedList }) => {
  const { photo, name, id } = friendData;

  const onHandleDelete = (id) =>
    DELETE("friends", id).then(() => setRenderedList((prev) => !prev));

  return (
    <div className="FriendCard">
      <img className="FriendCard__photo" src={photo} alt={name} />
      <p className="FriendCard__name">{name}</p>
      <button className="FriendCard__btn" onClick={() => onHandleDelete(id)}>
        X
      </button>
    </div>
  );
};

export default FriendCard;
