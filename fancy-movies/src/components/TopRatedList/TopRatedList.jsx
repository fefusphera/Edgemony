import MainCard from "../MainCard";
import "./index.scss";

const TopRatedList = ({ cardData = { title: "", poster_path: "" } }) => {
  return (
    <div className="TopRatedList">
      {cardData.map((el, index) => (
        <MainCard cardData={el} key={index} />
      ))}
    </div>
  );
};

export default TopRatedList;
