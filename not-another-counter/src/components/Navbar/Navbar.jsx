import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LightBulb from "../LightBulb/";

//voglio mettere l'userName nella navbar

const Navbar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  return (
    <div className={styles.Navbar}>
      <div className={styles.mainNav}>
        <div className={styles.mainNavImg}>
          <LightBulb />
        </div>
        <h1 className={styles.Title}>Ciao {state.user.userName}!</h1>
      </div>

      <div className={styles.form}>
        <input
          className={styles.input}
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="inserisci il tuo nome!"
        />
        <button
          className={styles.Button}
          onClick={() => dispatch({ type: "SET_USERNAME", payload: username })}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
