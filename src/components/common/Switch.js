import React from "react";
import "./Switch.css";

function Switch({ value = false, onChange, ...props }) {
  function toggleSwitch(e) {
    e.stopPropagation();
    if (onChange)
      onChange(!value);
  }

  const containerClass = value ? "switch-container-on" : "switch-container-off";
  const circleClass = value ? "switch-circle-on" : "switch-circle-off";

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
