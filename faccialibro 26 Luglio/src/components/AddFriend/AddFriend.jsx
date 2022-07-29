import { useState } from "react";
import { POST } from "../../utils/api.js";
import Button from "../Button";

import "./index.css";

const AddFriend = ({ isRenderedList, setRenderedList }) => {
  const [newFriendname, setNewFriendname] = useState("");
  const [newFriendImg, setNewFriendImg] = useState("");

  const onFormFriendSubmit = (e) => {
    e.preventDefault();

    if (newFriendname && newFriendImg) {
      POST("friends", {
        name: newFriendname,
        photo: newFriendImg,
      }).then(() => {
        setNewFriendname("");
        setNewFriendImg("");
        setRenderedList(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddFriendDiv" onSubmit={onFormFriendSubmit}>
      <h1>Aggiungi Amico</h1>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="nome amico"
        value={newFriendname}
        onChange={(e) => setNewFriendname(e.target.value)}
        required
      />
      <input
        className="AddFriend__Img"
        type="url"
        placeholder="foto profilo"
        value={newFriendImg}
        onChange={(e) => setNewFriendImg(e.target.value)}
        required
      />
      <Button type="submit" textContent="Invia" color="rgb(205 173 255)" />
    </form>
  );
};

export default AddFriend;
