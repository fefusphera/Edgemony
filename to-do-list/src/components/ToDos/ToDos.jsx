import "./index.css";

const ToDos = ({ todo }) => {
  return <li className="liEl" key={todo.id}>{todo.title}</li>;
};

export default ToDos;

//sostanzialmente restituisce elementi li con key:id e title
//che vengono poi mandati al padre TodoList