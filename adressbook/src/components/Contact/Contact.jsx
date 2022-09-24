import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

// const state = useSelector((state) => state);
// const { contacts } = state;

//dispatch per settare imput

const Contact = () => {
  const state = useSelector((state) => state);
  const { contactlist } = state;
  const dispatch = useDispatch();

  //   const onHandleNameChange = (e) => {
  //     dispatch({ type: "SET_NAME", payload: e.target.value });
  //   };
  //   const onHandleSurnameChange = (e) => {
  //     dispatch({ type: "SET_SURNAME", payload: e.target.value });
  //   };
  //   const onHandleNumberChange = (e) => {
  //     dispatch({ type: "SET_NUMBER", payload: e.target.value });
  //   };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const onHandleClick = () => {
    dispatch({
      type: "SET_CONTACT_LIST",
      payload: {
        name,
        surname,
        number,
      },
    });

    // console.log("ciao amio==>", contacts.name);
    // console.log("cognome ===>", contacts.surname);
    // console.log("numero===>", contacts.number);

    // console.log("ciaociao", contacts.contactlist);
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        type="text"
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Cognome"
        type="text"
      />
      <input
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Numero"
        type="text"
      />
      <button onClick={onHandleClick} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Contact;
