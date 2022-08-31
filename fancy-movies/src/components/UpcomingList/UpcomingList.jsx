import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ cardData, nCards }) => {
  return (
    <div className="UpcomingList">
      <h3>Upcoming Movies:</h3>
      {[...Array(nCards)].map((i, ii) => (
        <MainCard
          cardData={cardData}
          cardStyle={{ width: "200px", height: "70px", fontSize: "16px" }}
          key={ii}
        />
      ))}
    </div>
  );
};
export default UpcomingList;
