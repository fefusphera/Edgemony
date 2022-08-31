import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ cardData, nCards }) => {
  return (
    <div className="TopRatedList">
      <h3>Top Ratered Movies:</h3>
      {cardData.map((i, ii) => (
        <MainCard
          cardData={i}
          cardStyle={{ width: "200px", height: "70px", fontSize: "16px" }}
          key={ii}
        />
      ))}
    </div>
  );
};

export default TopRatedList;
