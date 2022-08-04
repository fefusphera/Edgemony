import "./index.css";

const Pantone = ({ data }) => {
  return (
    <div className="Pantone">
      <div className="color" style={{ backgroundColor: data.color }}></div>
      <h3>{data.color}</h3>
    </div>
  );
};

export default Pantone;
