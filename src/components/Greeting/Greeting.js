import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>Dummy text for testing purpose</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={textChangeHandler}>Chnage Text</button>
    </div>
  );
};

export default Greeting;
