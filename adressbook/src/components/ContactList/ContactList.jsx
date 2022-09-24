import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

const ContactList = () => {
  const state = useSelector((state) => state);
  const { contactlist } = state;
  // const dispatch = useDispatch();

  //   console.log("state", contacts.contactlist);
  console.log("===", contactlist);

  return (
    <div>
      <ul>
        {contactlist.map((element, index) => (
          <li key={index}>
            <p>{element.name}</p>
            <p>{element.surname}</p>
            <p>{element.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
