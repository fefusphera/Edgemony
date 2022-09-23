import "./App.css";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>To Do List:</h1>
      <ToDo />
      <ToDoList />
    </div>
  );
}

export default App;
