import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

const ToDoList = () => {
  const state = useSelector((state) => state);
  const { tasks } = state;

  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  // Arr.filter((element, index)=>{index !== id })

  //se metto graffe dentro return del map non renderizza, il render viene eseguito dalle tonde
  return (
    <div className={styles.ToDoList}>
      <ol className={styles.List}>
        {tasks.tasklist.map((element, index) => (
          <li key={index}>
            {element} <button onClick={() => handleOnClick(index)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
