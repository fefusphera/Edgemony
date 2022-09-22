import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./index.module.scss";

const LightBulb = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //   const [isDarkMode, setDarkMode] = useState(false);

  //da qualche parte devo mettere sto setDarkMode.

  //   const onHandleClick = () => {
  //     console.log("ciaoamio");
  //   };

  const onHandleClick = () => {
    dispatch({ type: "SET_DARK_MODE", payload: true });
    // console.log(state.darkmode.value);
  };

  return (
    <div className={styles.LightbulbDiv}>
      <img
        className={styles.LightBulbImg}
        onClick={onHandleClick}
        src="https://icons.iconarchive.com/icons/vexels/office/1024/bulb-icon.png"
        alt=""
      />
    </div>
  );
};

export default LightBulb;
