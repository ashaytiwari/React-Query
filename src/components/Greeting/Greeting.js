import React, { useState } from "react";
import Output from "../Output/Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>Dummy text for testing purpose</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}>Chnage Text</button>
    </div>
  );
};

export default Greeting;
