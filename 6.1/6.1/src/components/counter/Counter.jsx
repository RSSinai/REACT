import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const inc = () => {
     setNumber(number + 1)
  };

  return (
    <div>
      <button onClick= {inc} >Incriment</button>
      {number}
    </div>
  );
};

export default Counter;
