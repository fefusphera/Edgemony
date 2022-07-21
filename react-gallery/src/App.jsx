import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <nav>
        <Button
          btnTextCont="show / hide"
          onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}
        />
      </nav>
      {/* <Nav /> */}
      <hr />
      <Hero />
      <hr />
      <Gallery visibility={isGalleryVisibile} />
      <hr />
    </div>
  );
}

export default App;
