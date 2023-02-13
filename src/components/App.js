import React, { useState } from "react";
import '../styles/App.css';
import ChildComponent from "./ChildComponent";
const App = () => {
  //code here
  const [value, setValue] = useState("");

  function onInputChange(event) {
    setValue(event.target.value);
  }
  return (
    <div id="main">
      <ChildComponent>
        <input id="input" onChange={onInputChange} />
      </ChildComponent>
      <p id="output">{Number(value) * Number(value)}</p>
    </div>
  );
};

export default App;
