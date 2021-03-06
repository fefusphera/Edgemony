import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import AddFriend from "./components/AddFriend";
import Navbar from "./components/Navbar";
import Splashscreen from "./components/Splashscreen";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [filteredValue, setFilteredValue] = useState("");
  const [isSplashscreenVisibile, setSplashscreenVisibility] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setSplashscreenVisibility(false);
    }
  }, []);

  return (
    <div className="App">
      {isSplashscreenVisibile ? (
        <Splashscreen onHandleClick={setSplashscreenVisibility} />
      ) : (
        <>
          <div className="App__navbar">
            <Navbar setSplashscreenVisibility={setSplashscreenVisibility} />
          </div>
          <div className="App__mainContent">
            <div className="App__friends">
              <FriendCardList isRenderedList={isRenderedList} />
              <AddFriend
                setRenderedList={setRenderedList}
                isRenderedList={isRenderedList}
                onAddButton={setRenderedList}
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
        </>
      )}
    </div>
  );
}

export default App;
