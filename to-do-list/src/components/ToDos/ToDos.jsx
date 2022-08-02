import "./index.css";

const ToDos = ({ todo }) => {
  return <li key={todo.id}>{todo.title}</li>;
};

export default ToDos;
