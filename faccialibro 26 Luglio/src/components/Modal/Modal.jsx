import Button from "../Button";
import "./index.css";

const Modal = ({
  mainModalText,
  onCancelBtnClick,
  onOkBtnClick,
  okBtnText,
  cancelBtnText,
}) => {
  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <h2 className="Modal__header">{mainModalText}</h2>
        <Button
          color="grey"
          onBtnClick={() => onCancelBtnClick(false)}
          textContent={cancelBtnText}
          className="Modal__btn_cancel"
        />
        <Button
          color="green"
          onBtnClick={onOkBtnClick}
          textContent={okBtnText}
          className="Modal__btn_ok"
        />
      </div>
    </div>
  );
};

export default Modal;
