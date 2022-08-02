// import { useMemo } from "react"; -non funziona come vorrei
import * as React from "react";
//metodo che ha usato Emanuele
import ToDos from "../ToDos";
import "./index.css";

const ToDoList = ({ todos }) => {
  return (
    <div className="ToDoList">
      <ul>
        {todos.map((item, i) => (
          <ToDos key={i} todo={item} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ToDoList);
