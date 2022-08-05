import "./index.css";

const AdviceCard = ({ data, onBtnClick }) => {
  return (
    <div>
      <h1 className="AdviceTitle">Daily Advice</h1>
      <p className="AdviceNumber">
        Advice n°{data.slip ? data.slip.id : "loading"}
      </p>
      <p className="MainText"> {data.slip ? data.slip.advice : "loading"}</p>
      <button onClick={onBtnClick} className="btnchange">
        New Advice
      </button>
    </div>
  );
};

export default AdviceCard;
