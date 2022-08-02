import { useState, useReducer } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  //onChangeTask dichiarato nell'input, cosa fa?
  //setTask -di cosa? del value che scrivo nell'input

  const onChangeTask = (e) => {
    setTask(e.target.value);
  };

  //handleSubmit dichiarato nel FORM cosa fa?

  //prevent default come sempre
  //setta i todos che c'erano prima + i title.task
  //title in todos (todos.title), task in value in input

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: task }]);
    //"...todos" mi serve perchè se non lo metto, AL SUBMIT
    //non mi lascia stampati quelli che c'erano prima
    setTask(""); //mi serve solo per svuotare il campo
  };

  return (
    <div className="App">
      <div className="MainContent">
        <h1>DoDo List</h1>
        <ToDoList todos={todos} />
        <form className="liForm" onSubmit={handleSubmit}>
          <input
            className="liInput"
            type="text"
            value={task}
            placeholder="aggiungi task"
            onChange={onChangeTask}
          />
        </form>

        <img
          src="https://www.pngall.com/wp-content/uploads/11/Finch-Bird-PNG-Image.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
