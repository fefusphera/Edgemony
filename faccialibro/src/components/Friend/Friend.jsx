import "./index.css";
import { POST, GET, DELETE } from "../../utils/api.js";

const Friend = ({ name, photo, id }) => {
  return (
    <div className="Friend">
      <img className="Friend__img" src={photo} alt="immagine" />
      <p className="Friend__name">{name}</p>
      <p className="Friend__id"> {id}</p>
    </div>
  );
};

export default Friend;
