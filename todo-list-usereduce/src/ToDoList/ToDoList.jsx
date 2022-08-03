import "./index.css";

const ToDoList = ({ todo, children }) => {
  const { task, id } = todo;

  return (
    <div className="todo">
      {task}
      {children}
    </div>
  );
};

export default ToDoList;
