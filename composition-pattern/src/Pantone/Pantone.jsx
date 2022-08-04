import "./index.css";

const Pantone = ({ data }) => {
  return (
    <div className="Pantone">
      <div className="colorCard1">
        <div className="color1" style={{ backgroundColor: data.color1 }}></div>
        <h3>{data.color1}</h3>
      </div>
      <div className="colorCard2">
        <div className="color2" style={{ backgroundColor: data.color2 }}></div>
        <h3>{data.color2}</h3>
      </div>
      <div className="colorCard3">
        <div className="color3" style={{ backgroundColor: data.color3 }}></div>
        <h3>{data.color3}</h3>
      </div>
    </div>
  );
};

export default Pantone;
