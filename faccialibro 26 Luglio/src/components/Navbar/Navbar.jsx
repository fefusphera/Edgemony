import Button from "../Button";
import Modal from "../Modal";
import { useState } from "react";
import "./index.css";

const Navbar = ({ isRenderedList, onDeleteBtn, setSplashscreenVisibility }) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div className="Navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/it/thumb/0/09/Twitter_bird_logo.png/400px-Twitter_bird_logo.png"
        alt="logo"
      />
      <h1>Zocial</h1>
      <Button
        onBtnClick={() => setModalVisibility(true)}
        type="submit"
        textContent="LogOut"
        color="lightseagreen"
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
