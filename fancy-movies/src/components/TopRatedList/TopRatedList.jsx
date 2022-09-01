import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ cardData, nCards }) => {
  return (
    <div className="TopRatedList">
      {cardData.map((i, ii) => (
        <MainCard cardData={i} key={ii} />
      ))}
    </div>
  );
};

export default TopRatedList;
