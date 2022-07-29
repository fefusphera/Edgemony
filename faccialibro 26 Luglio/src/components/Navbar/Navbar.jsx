import Button from "../Button";
import Modal from "../Modal";
import { useState } from "react";
import "./index.css";

const Navbar = ({ isRenderedList, onDeleteBtn, setSplashscreenVisibility }) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div className="Navbar">
      <img
        src="https://www.pngall.com/wp-content/uploads/10/Aesthetic-Tumblr-PNG-Image.png"
        alt="logo"
      />
      <h1>Notice Me</h1>
      <Button
        onBtnClick={() => setModalVisibility(true)}
        type="submit"
        textContent="LogOut"
        color="rgb(205 173 255)"
      />

      {isModalVisible && (
        <Modal
          onCancelBtnClick={setModalVisibility}
          onOkBtnClick={() => {
            localStorage.clear();
            setSplashscreenVisibility(true);
          }}
          mainModalText="sei sicuro di voler fare il LogOut?"
          okBtnText="Si"
          cancelBtnText="No"
        />
      )}
    </div>
  );
};

export default Navbar;
