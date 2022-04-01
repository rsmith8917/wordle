import "./Notification.css";
import React from "react";

function Notification({ message, open }) {
  return message ? (
    <div className="notification">
      <div className={open ? "notification-card visible" : "notification-card hidden"}>
        {message}
      </div>
    </div>
  ) : null;
}

export default Notification;
