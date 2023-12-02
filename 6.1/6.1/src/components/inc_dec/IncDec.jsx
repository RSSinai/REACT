// We want to create two buttons and one label.
// The first button will increment the counter.
// The second button will decrement the counter
// A label that displays the current value.
// The counter range can only be from -10 to 10.
// If the counter is negative the label will be a red color.
// If the counter is positive the label will be a green color.
// If the counter is 0 the label will be black in color.

import React, { useState } from "react";

const IncDec = () => {
  const [number, setNumber] = useState(0);

  const inc = () => {
    setNumber(number + 1);
    if (number === 10) {
      setNumber(10);
    }
  };

  const dec = () => {
    setNumber(number - 1);
    if (number === -10) {
      setNumber(-10);
    }
  };

  return (
    <div>
      <button onClick={inc}>Incriment</button>
      <button onClick={dec}>Decriment</button>
      {number > 0 ? (
        <div style={{ color: "green" }}>{number}</div>
      ) : number < 0 ? (
        <div style={{ color: "red" }}>{number}</div>
      ) : (
        <div style={{ color: "black" }}>{number}</div>
      )}
    </div>
  );
};

export default IncDec;
