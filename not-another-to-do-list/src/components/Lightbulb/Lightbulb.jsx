import { useContext } from "react";
import PippoContext from "../../App";
import "./index.css";
// import styles from "./index.module.scss";

const Lightbulb = () => {
  const theme = useContext(PippoContext);
  const onHandleClick = () => theme.setDarkMode((prev) => !prev);
  //   const onHandleClick = () => theme.setDarkMode(true);

  console.log("IN LIGHTBULB", theme);

  return (
    <div>
      <img
        className="lightbulb"
        onClick={onHandleClick}
        src="https://icons.iconarchive.com/icons/vexels/office/1024/bulb-icon.png"
        alt=""
      />
    </div>
  );
};

export default Lightbulb;
