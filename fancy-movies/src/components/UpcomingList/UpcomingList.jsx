import MainCard from "../MainCard";
import "./index.scss";

const UpcomingList = ({ cardData = { title: "", poster_path: "" } }) => {
  return (
    <div className="UpcomingList">
      {cardData.map((i, ii) => (
        <MainCard cardData={i} key={ii} />
      ))}
    </div>
  );
};
export default UpcomingList;
