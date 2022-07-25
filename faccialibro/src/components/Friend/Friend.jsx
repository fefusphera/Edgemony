import "./index.css";
import { POST, GET, DELETE } from "../../utils/api.js";

const Friend = (data) => {
  return (
    <div className="Friend">
      <img className="Friend__img" src={data.photo} alt="immagine" />
      <p className="Friend__name">{data.name}</p>
      <p className="Friend__id"> {data.id}</p>
    </div>
  );
};

export default Friend;
