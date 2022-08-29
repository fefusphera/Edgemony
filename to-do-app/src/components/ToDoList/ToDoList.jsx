import ToDos from "../ToDos";
import "./index.css";

const ToDoList = ({ todos, onDeleteBtn }) => {
  return (
    <div className="ToDoList">
      <ul className="ToDoListEl">
        {todos.map((item, i) => (
          <ToDos
            onDeleteBtn={() => onDeleteBtn(i)}
            key={i}
            todo={item}
            index={i + 1}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
