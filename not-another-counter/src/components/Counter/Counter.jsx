import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

const Counter = () => {
  const store = useSelector((state) => state);
  const { count, user } = store;

  const dispatch = useDispatch();
  return (
    <div className={styles.Counter}>
      <div className={styles.mainCounter}>
        <h1 className={styles.CounterTitle}>Counter:</h1>
        <h1 className={styles.CounterValue}>{count.value}</h1>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
