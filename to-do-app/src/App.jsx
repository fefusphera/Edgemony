import ToDoList from "../src/components/ToDoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const onChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask("");
    console.log(todos);
  };

  const onDeleteBtn = (i) => {
    setTodos(todos.filter((item, index, array) => index !== i));
    //setTodos(todos.filter((item, index, array) => item !== array[i]));
    // console.log(i);
  };

  return (
    <div className="App">
      <div className="MainContent">
        <h1>To Do App</h1>
        <ToDoList onDeleteBtn={onDeleteBtn} todos={todos} />
      </div>
      <form className="liForm" onSubmit={handleSubmit}>
        <input
          className="liInput"
          type="text"
          value={task}
          placeholder="aggiungi task"
          onChange={onChangeTask}
        />
      </form>
    </div>
  );
}

export default App;
