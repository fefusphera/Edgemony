import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

const ToDo = () => {
  //   const [task, setTask] = useState("");
  //   const [taskList, setTaskList] = useState([]);

  const state = useSelector((state) => state);
  const { tasks } = state;

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch({ type: "SET_TASK", payload: e.target.value });
  };

  const handleOnClick = () => {
    dispatch({ type: "SET_TASK_LIST", payload: tasks.task });
    dispatch({ type: "SET_TASK", payload: "" });
  };

  return (
    <div className={styles.ToDo}>
      <input
        className={styles.input}
        onChange={(e) => handleOnChange(e)}
        value={tasks.task}
        type="text"
        name=""
        id=""
      />
      <button className={styles.btn} onClick={handleOnClick}>
        submit
      </button>
    </div>
  );
};

export default ToDo;
