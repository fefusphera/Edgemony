import { useState, useEffect } from "react";
import { POST, GET, DELETE } from "../../utils/api.js";
import Friend from "../Friend";
import "./index.css";

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    GET("friends").then((data) => setFriendList(data));
  });
  return (
    <div className="FriendList">
      {friendList.length ? (
        friendList.map((friends) => (
          <Friend
            name={friends.name}
            img={friends.photo}
            id={friends.id}
            key={friends.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendList;
