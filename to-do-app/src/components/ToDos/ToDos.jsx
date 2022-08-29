import "./index.css";

const ToDos = ({ todo, index, onDeleteBtn }) => {
  return (
    <li className="liEl">
      {index} - {todo}
      <button className="liBtn" onClick={onDeleteBtn}>
        X
      </button>
    </li>
  );
};

export default ToDos;
