import { useState, useEffect, useRef } from "react";
import "./index.scss";

const MainInput = ({ setInputPippo }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHandleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setInputPippo(e.target[0].value);
  };

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default MainInput;
