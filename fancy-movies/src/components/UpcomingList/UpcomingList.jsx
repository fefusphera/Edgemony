import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ cardData, nCards }) => {
  return (
    <div className="UpcomingList">
      {cardData.map((i, ii) => (
        <MainCard cardData={i} key={ii} />
      ))}
    </div>
  );
};
export default UpcomingList;
