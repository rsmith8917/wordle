import React from "react";
import NotificationContext from "../components/layout/NotificationContext";

function useNotify() {
  return React.useContext(NotificationContext);
}

export { useNotify };
