import React, { useState } from "react";

const Toggle = () => {
  const [display, setDisplay] = useState(true);

  const toggle = () => {
    setDisplay(!display)
  }
  return <div>

    <div>
        <button onClick={toggle}>display</button>
        
        {display ? <div style={{ height:100, width:100 , backgroundColor:"yellow" }}></div> : null}
    </div>

  </div>;
};

export default Toggle;
