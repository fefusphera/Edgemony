import { useState } from "react";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import recommended from "./assets/recommended";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
      <CardList
        title="Top series"
        BASE_URL="https://edgemony-backend.herokuapp.com/series"
        recommended={""}
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL="https://edgemony-backend.herokuapp.com/movies"
        recommended={""}
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Recommended"
        BASE_URL=""
        recommended={recommended}
        modalVisibility={onHandleModal}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
    </div>
  );
}

export default App;
