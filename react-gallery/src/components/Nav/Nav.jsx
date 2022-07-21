import { useState } from "react";
import Gallery from "../Gallery";
import Button from "../Button";

import "./index.css";

const Nav = () => {
  const [visibility, isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div>
      <Button
        btnTextCont="show / hide"
        onHandleClick={(isGalleryVisibile) =>
          setGalleryVisibility(!isGalleryVisibile)
        }
      />
    </div>
  );
};

export default Nav;
