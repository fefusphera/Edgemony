import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import { POST, GET, DELETE } from "../../utils/api.js";
import "./index.css";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, []);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList.map((message) => (
          <MessageCard textContent={message} key={message.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
