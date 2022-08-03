import Button from "./Button";
import Input from "./Input";
import ToDoList from "./ToDoList";
import React from "react";
import "./App.css";

// 1)dopo aver importato TUTTOH diamo lo stato iniziale.
// 2)funzione reducer
// 3)dispatch

// stati iniziali const e let (1)

let stateInitialValue = {
  todos: [],
  counter: 1,
};

let todo = {}; //inizialmente ovviamente vuoto

//prima di APP possiamo cominciare la FUNZIONE REDUCE (2)

function reducer(state, action) {
  let { type, payload } = action;
  let { todos, counter } = state;

  switch (type) {
    case "Add":
      {
        let id = counter;
        counter++;
        todos = [...todos, { ...todo, id: id }];
        console.log(todos);
      }
      break;

    case "Delete":
      {
        todos = todos.filter((todo) => todo.id != payload);
      }
      break;

    default:
  }

  return {
    ...state,
    todos: todos,
    counter: counter,
  };
}

function App() {
  const addTodo = () => {
    dispatch({ type: "Add" });
  };

  const deleteTodos = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  const handleInputChange = (e) => {
    todo[e.target.name] = e.target.value;
    console.log(todo.task);
  };

  const [state, dispatch] = React.useReducer(reducer, stateInitialValue);

  return (
    <div className="container">
      <h1>TO DO</h1>
      <Input onChange={handleInputChange}>
        <Button onClick={addTodo}>Add</Button>
      </Input>

      <div className="ToDoList">
        {state.todos.map((todo, index) => {
          let { id } = todo;
          return (
            <ToDoList todo={todo} key={todo.index}>
              <Button onClick={() => deleteTodos(id)}>Delete</Button>
            </ToDoList>
          );
        })}
      </div>
    </div>
  );
}

export default App;
