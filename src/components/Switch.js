import React from "react";
import "./Switch.css";

function Switch(props) {
  const [on, setOn] = React.useState(false);

  function toggleSwitch(e) {
    e.stopPropagation();
    setOn((prev) => !prev);
  }

  const containerClass = on ? "switch-container-on" : "switch-container-off";
  const circleClass = on ? "switch-circle-on" : "switch-circle-off";
  
  return (
    <div
      className={`switch-container ${containerClass}`}
      onClick={toggleSwitch}
      {...props}
    >
      <div className={`switch-circle ${circleClass}`}></div>
    </div>
  );
}

export default Switch;
