import { useState } from "react";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import AddFriend from "./components/AddFriend";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [isRenderedFriendList, setRenderedFriendList] = useState(false);
  const [filteredValue, setFilteredValue] = useState("");

  return (
    <div className="App">
      <div className="App__navbar">
        <Navbar />
      </div>
      <div className="App__mainContent">
        <div className="App__friends">
          <FriendCardList isRenderedFriendList={isRenderedFriendList} />
          <AddFriend
            setRenderedFriendList={setRenderedFriendList}
            isRenderedFriendList={isRenderedFriendList}
            onAddButton={setRenderedFriendList}
          />
        </div>
        <div className="App_messages">
          <AddMessage
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <input
            onChange={(event) => setFilteredValue(event.target.value)}
            className="search_input"
            type="text"
            placeholder="Search..."
          />
          <MessageCardList
            filteredValue={filteredValue}
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
